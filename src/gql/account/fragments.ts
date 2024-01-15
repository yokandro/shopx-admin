import { gql } from "@apollo/client";

const AccountFragment = gql`
  fragment Account on Account {
    _id
    email
    role
    status
  }
`;

export { AccountFragment };
