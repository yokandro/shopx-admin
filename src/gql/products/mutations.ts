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

export { CreateProductMutation };
