import { AccountStatuses } from "src/gql/generated.graphql";

export const statusesColorsMap: Record<AccountStatuses, string> = {
  [AccountStatuses.Active]: "green",
  [AccountStatuses.Inactive]: "red",
  [AccountStatuses.Invited]: "blue",
};
