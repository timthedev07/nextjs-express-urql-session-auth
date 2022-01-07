import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteAccount: Scalars['Boolean'];
  discordOAuth: OAuthResponse;
  googleOAuth: OAuthResponse;
  logout: Scalars['Boolean'];
  microsoftOAuth: OAuthResponse;
  updateCredentials: User;
  updateEmailVisibility: User;
};


export type MutationDeleteAccountArgs = {
  email: Scalars['String'];
};


export type MutationDiscordOAuthArgs = {
  code: Scalars['String'];
};


export type MutationGoogleOAuthArgs = {
  code: Scalars['String'];
};


export type MutationMicrosoftOAuthArgs = {
  code: Scalars['String'];
};


export type MutationUpdateCredentialsArgs = {
  username?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateEmailVisibilityArgs = {
  newEmailPublic: Scalars['Boolean'];
};

export type OAuthResponse = {
  __typename?: 'OAuthResponse';
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  avatarUrl: Scalars['String'];
  email: Scalars['String'];
  emailPublic: Scalars['Boolean'];
  id: Scalars['String'];
  provider: Scalars['String'];
  username: Scalars['String'];
};

export type DiscordOAuthMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type DiscordOAuthMutation = { __typename?: 'Mutation', discordOAuth: { __typename?: 'OAuthResponse', user?: { __typename?: 'User', id: string, email: string, username: string, provider: string, avatarUrl: string, emailPublic: boolean } | null | undefined } };

export type GoogleOAuthMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type GoogleOAuthMutation = { __typename?: 'Mutation', googleOAuth: { __typename?: 'OAuthResponse', user?: { __typename?: 'User', id: string, email: string, username: string, provider: string, avatarUrl: string, emailPublic: boolean } | null | undefined } };

export type MicrosoftOAuthMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type MicrosoftOAuthMutation = { __typename?: 'Mutation', microsoftOAuth: { __typename?: 'OAuthResponse', user?: { __typename?: 'User', id: string, email: string, username: string, provider: string, avatarUrl: string, emailPublic: boolean } | null | undefined } };

export type DeleteAccountMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type DeleteAccountMutation = { __typename?: 'Mutation', deleteAccount: boolean };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string, username: string, provider: string, avatarUrl: string, emailPublic: boolean } | null | undefined };

export type UpdateCredentialsMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type UpdateCredentialsMutation = { __typename?: 'Mutation', updateCredentials: { __typename?: 'User', id: string, email: string, username: string, provider: string, avatarUrl: string, emailPublic: boolean } };

export type UpdateEmailVisibilityMutationVariables = Exact<{
  newEmailPublic: Scalars['Boolean'];
}>;


export type UpdateEmailVisibilityMutation = { __typename?: 'Mutation', updateEmailVisibility: { __typename?: 'User', id: string, email: string, username: string, provider: string, avatarUrl: string, emailPublic: boolean } };


export const DiscordOAuthDocument = gql`
    mutation DiscordOAuth($code: String!) {
  discordOAuth(code: $code) {
    user {
      id
      email
      username
      provider
      avatarUrl
      emailPublic
    }
  }
}
    `;

export function useDiscordOAuthMutation() {
  return Urql.useMutation<DiscordOAuthMutation, DiscordOAuthMutationVariables>(DiscordOAuthDocument);
};
export const GoogleOAuthDocument = gql`
    mutation GoogleOAuth($code: String!) {
  googleOAuth(code: $code) {
    user {
      id
      email
      username
      provider
      avatarUrl
      emailPublic
    }
  }
}
    `;

export function useGoogleOAuthMutation() {
  return Urql.useMutation<GoogleOAuthMutation, GoogleOAuthMutationVariables>(GoogleOAuthDocument);
};
export const MicrosoftOAuthDocument = gql`
    mutation MicrosoftOAuth($code: String!) {
  microsoftOAuth(code: $code) {
    user {
      id
      email
      username
      provider
      avatarUrl
      emailPublic
    }
  }
}
    `;

export function useMicrosoftOAuthMutation() {
  return Urql.useMutation<MicrosoftOAuthMutation, MicrosoftOAuthMutationVariables>(MicrosoftOAuthDocument);
};
export const DeleteAccountDocument = gql`
    mutation DeleteAccount($email: String!) {
  deleteAccount(email: $email)
}
    `;

export function useDeleteAccountMutation() {
  return Urql.useMutation<DeleteAccountMutation, DeleteAccountMutationVariables>(DeleteAccountDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    username
    provider
    avatarUrl
    emailPublic
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const UpdateCredentialsDocument = gql`
    mutation UpdateCredentials($username: String!) {
  updateCredentials(username: $username) {
    id
    email
    username
    provider
    avatarUrl
    emailPublic
  }
}
    `;

export function useUpdateCredentialsMutation() {
  return Urql.useMutation<UpdateCredentialsMutation, UpdateCredentialsMutationVariables>(UpdateCredentialsDocument);
};
export const UpdateEmailVisibilityDocument = gql`
    mutation UpdateEmailVisibility($newEmailPublic: Boolean!) {
  updateEmailVisibility(newEmailPublic: $newEmailPublic) {
    id
    email
    username
    provider
    avatarUrl
    emailPublic
  }
}
    `;

export function useUpdateEmailVisibilityMutation() {
  return Urql.useMutation<UpdateEmailVisibilityMutation, UpdateEmailVisibilityMutationVariables>(UpdateEmailVisibilityDocument);
};