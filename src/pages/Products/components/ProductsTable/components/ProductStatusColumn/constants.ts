import { ProductStatuses } from "src/gql/generated.graphql";

export const ProductStatusColors: Record<ProductStatuses, string> = {
  [ProductStatuses.Draft]: "blue",
  [ProductStatuses.Published]: "green",
  [ProductStatuses.Archived]: "red",
};
