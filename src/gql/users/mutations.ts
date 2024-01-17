import { gql } from "@apollo/client";

import { UserFragment } from "./fragments";

const CreateUserMutation = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

const ResendUserInvitationEmailMutation = gql`
  mutation resendUserInvitationEmail($userId: ObjectId!) {
    resendUserInvitationEmail(userId: $userId) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

const DeleteUserMutation = gql`
  mutation deleteUser($userId: ObjectId!) {
    deleteUser(userId: $userId)
  }
`;

export {
  CreateUserMutation,
  ResendUserInvitationEmailMutation,
  DeleteUserMutation,
};
