import { gql } from "@apollo/client";

const LoginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
      refreshTokenExpiry
    }
  }
`;

export { LoginMutation };
