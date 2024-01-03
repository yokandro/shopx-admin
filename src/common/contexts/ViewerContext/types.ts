import { Account } from "src/gql/generated.graphql";

export type ViewerContextType = {
  user: Account | null;
  setUser: (user: Account | null) => void;
};
