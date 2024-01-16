import { gql } from "@apollo/client";

export const CategoryFragment = gql`
  fragment Category on Category {
    _id
    name
    parentCategoryId
    createdAt
    updatedAt
    categoryName
    description
  }
`;
