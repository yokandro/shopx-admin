import { gql } from "@apollo/client";

import { ProductFragment } from "./fragments";

const CreateProductMutation = gql`
  mutation createProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      ...Product
    }
  }
  ${ProductFragment}
`;

const ChangeProductStatusMutation = gql`
  mutation changeProductStatus($input: ChangeProductStatusInput!) {
    changeProductStatus(input: $input) {
      ...Product
    }
  }
  ${ProductFragment}
`;

const UpdateProductMutation = gql`
  mutation updateProduct($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      ...Product
    }
  }
  ${ProductFragment}
`;

const DeleteProductMutation = gql`
  mutation deleteProductById($productId: ObjectId!) {
    deleteProductById(productId: $productId)
  }
`;

export {
  CreateProductMutation,
  ChangeProductStatusMutation,
  UpdateProductMutation,
  DeleteProductMutation,
};
