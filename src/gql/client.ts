import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { localStorageOperations } from "src/common/helpers/local-storage";

const authLink = setContext((_, { headers }) => {
  const accessToken = localStorageOperations.getAccessToken();

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URL,
  cache: new InMemoryCache(),
  link: authLink,
});

export default client;
