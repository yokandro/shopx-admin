import { gql } from "@apollo/client";

import { AccountFragment } from "src/gql/account/fragments";

export const UserFragment = gql`
  fragment UserFragment on User {
    _id
    firstName
    lastName
    createdAt
    accountId
    account {
      ...Account
    }
  }
  ${AccountFragment}
`;
