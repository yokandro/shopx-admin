import { gql } from "@apollo/client";

import { UserFragment } from "./fragments";

export const GetCurrentUserQuery = gql`
  query getCurrentUser {
    getCurrentUser {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const GetUsersQuery = gql`
  query getUsers(
    $filter: GetUsersFilterInput
    $pagination: PaginationInput
    $sort: SortInput
  ) {
    getUsers(filter: $filter, pagination: $pagination, sort: $sort) {
      collection {
        ...UserFragment
      }
      totalCount
    }
  }
  ${UserFragment}
`;
