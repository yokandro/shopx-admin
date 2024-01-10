import { gql } from "@apollo/client";

import { ProductFragment } from "./fragments";

const GetProductsQuery = gql`
  query getProducts(
    $filter: GetProductsFilterInput
    $pagination: PaginationInput
    $sort: SortInput
  ) {
    getProducts(filter: $filter, pagination: $pagination, sort: $sort) {
      collection {
        ...Product
      }
      totalCount
    }
  }
  ${ProductFragment}
`;

export { GetProductsQuery };
