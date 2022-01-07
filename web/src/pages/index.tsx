import type { NextPage } from "next";
import { OAuthButton } from "../components/OAuthButton";
import { useMeQuery } from "../generated/graphql";

const Home: NextPage = () => {
  const [{ data, fetching }] = useMeQuery();
  return (
    <>
      {fetching ? (
        <>...</>
      ) : data && data.me ? (
        <>{data.me.username}</>
      ) : (
        "Not Logged in"
      )}
      <OAuthButton provider="discord" />
      <OAuthButton provider="google" />
      <OAuthButton provider="microsoft" />
    </>
  );
};

export default Home;
