import { gql } from "@apollo/client";

import { CategoryFragment } from "./fragments";

export const CreateCategoryMutation = gql`
  mutation createCategory($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      ...Category
    }
  }
  ${CategoryFragment}
`;
