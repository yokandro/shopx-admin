import { ProductStatuses } from "src/gql/generated.graphql";

export type ProductStatusColumnType = {
  status: ProductStatuses;
  productId: string;
};
