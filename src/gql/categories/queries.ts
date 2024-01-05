import { gql } from "@apollo/client";

import { CategoryFragment } from "./fragments";

export const GetCategoriesQuery = gql`
  query getCategories(
    $sort: SortInput
    $pagination: PaginationInput
    $filter: GetCategoryFilterInput
  ) {
    getCategories(sort: $sort, pagination: $pagination, filter: $filter) {
      collection {
        ...Category
      }
      totalCount
    }
  }
  ${CategoryFragment}
`;
