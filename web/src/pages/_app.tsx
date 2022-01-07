import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { Provider, createClient } from "urql";
import { BACKEND } from "../constants/conn";

export const client = createClient({
  url: `${BACKEND}/graphql`,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider value={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
