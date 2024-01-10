import { gql } from "@apollo/client";

export const ProductFragment = gql`
  fragment Product on Product {
    _id
    name
    description
    createdAt
    price
    code
    categoryId
    categoryName
  }
`;
