import { gql } from "@apollo/client";

import { CategoryFragment } from "./fragments";

const CreateCategoryMutation = gql`
  mutation createCategory($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      ...Category
    }
  }
  ${CategoryFragment}
`;

const UpdateCategoryMutation = gql`
  mutation updateCategory($input: UpdateCategoryInput!) {
    updateCategory(input: $input) {
      ...Category
    }
  }
  ${CategoryFragment}
`;

const DeleteCategoryByIdMutation = gql`
  mutation deleteCategoryById($categoryId: ObjectId!) {
    deleteCategoryById(categoryId: $categoryId)
  }
`;

export {
  CreateCategoryMutation,
  UpdateCategoryMutation,
  DeleteCategoryByIdMutation,
};
