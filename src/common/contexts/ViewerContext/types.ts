import { User } from "src/gql/generated.graphql";

export type ViewerContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};
