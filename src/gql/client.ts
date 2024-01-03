import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { TokenRefreshLink } from "apollo-link-token-refresh";
import {
  fetchAccessToken,
  isAccessTokenExpired,
} from "src/common/helpers/access-token/access-token.helpers";

import { localStorageOperations } from "src/common/helpers/local-storage";
import type { TokensModel } from "./generated.graphql";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_BACKEND_URL,
});

const authLink = setContext((_, { headers }) => {
  const accessToken = localStorageOperations.getAccessToken();

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

const refreshLink = new TokenRefreshLink({
  isTokenValidOrUndefined: async () => {
    const accessToken = localStorageOperations.getAccessToken() || "";

    return !isAccessTokenExpired(accessToken);
  },
  handleFetch: (accessToken) =>
    localStorageOperations.setAccessToken(accessToken),
  fetchAccessToken: () => {
    const refreshToken = localStorageOperations.getRefreshToken() || "";

    return fetchAccessToken(process.env.REACT_APP_BACKEND_URL, refreshToken);
  },
  handleResponse: () => (refreshTokens: TokensModel) => ({
    access_token: refreshTokens.accessToken,
  }),
  handleError: (error: any) => {
    if (error?.message !== "Failed to fetch") {
      console.error(`Bearer token error: ${error?.message}`);
    }
  },
});

const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URL,
  cache: new InMemoryCache(),
  link: ApolloLink.from([authLink, refreshLink, httpLink]),
});

export default client;
