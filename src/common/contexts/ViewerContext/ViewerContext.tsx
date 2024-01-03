import {
  type FC,
  type PropsWithChildren,
  createContext,
  useState,
} from "react";
import { Account } from "src/gql/generated.graphql";

import type { ViewerContextType } from "./types";

const ViewerContext = createContext<ViewerContextType>({
  user: null,
  setUser: () => {},
});

const ViewerProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<Account | null>(null);

  return (
    <ViewerContext.Provider value={{ user, setUser }}>
      {children}
    </ViewerContext.Provider>
  );
};

export { ViewerProvider, ViewerContext };
