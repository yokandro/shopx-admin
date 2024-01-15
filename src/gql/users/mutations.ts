import { gql } from "@apollo/client";

import { UserFragment } from "./fragments";

export const CreateUserMutation = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;
