import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { Provider, createClient, dedupExchange, fetchExchange } from "urql";
import { BACKEND } from "../constants/conn";
import { getCacheExchange } from "../utils/getCacheExchange";

export const client = createClient({
  url: `${BACKEND}/graphql`,
  fetchOptions: {
    credentials: "include",
  },
  exchanges: [dedupExchange, getCacheExchange(), fetchExchange],
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
