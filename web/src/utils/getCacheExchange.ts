import { cacheExchange } from "@urql/exchange-graphcache";
import {
  MeDocument,
  DiscordOAuthMutation,
  MeQuery,
  GoogleOAuthMutation,
  MicrosoftOAuthMutation,
} from "../generated/graphql";
import { typedUpdateQuery } from "./betterUpdateQuery";

export const getCacheExchange = () =>
  cacheExchange({
    updates: {
      Mutation: {
        discordOAuth: (_result, _args, cache) => {
          typedUpdateQuery<DiscordOAuthMutation, MeQuery>(
            cache,
            { query: MeDocument },
            _result,
            (result, query) => {
              if (result.discordOAuth.user) {
                return {
                  me: result.discordOAuth.user,
                };
              } else {
                return query;
              }
            }
          );
        },
        googleOAuth: (_result, _args, cache) => {
          typedUpdateQuery<GoogleOAuthMutation, MeQuery>(
            cache,
            { query: MeDocument },
            _result,
            (result, query) => {
              if (result.googleOAuth.user) {
                return {
                  me: result.googleOAuth.user,
                };
              } else {
                return query;
              }
            }
          );
        },
        microsoftOAuth: (result, _args, cache) => {
          typedUpdateQuery<MicrosoftOAuthMutation, MeQuery>(
            cache,
            { query: MeDocument },
            result,
            (result, query) => {
              if (result.microsoftOAuth.user) {
                return {
                  me: result.microsoftOAuth.user,
                };
              } else {
                return query;
              }
            }
          );
        },
      },
    },
  });
