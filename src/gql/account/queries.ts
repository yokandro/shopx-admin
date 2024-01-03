import { gql } from "@apollo/client";

export const GetCurrentAccountQuery = gql`
  query getCurrentAccount {
    getCurrentAccount {
      _id
      firstName
      lastName
      email
    }
  }
`;
