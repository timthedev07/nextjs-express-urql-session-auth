import type { NextPage } from "next";
import { OAuthButton } from "../components/OAuthButton";

const Home: NextPage = () => {
  return (
    <>
      <OAuthButton provider="discord" />
      <OAuthButton provider="google" />
      <OAuthButton provider="microsoft" />
    </>
  );
};

export default Home;
