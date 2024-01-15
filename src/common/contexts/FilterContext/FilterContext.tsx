import {
  type FC,
  type PropsWithChildren,
  createContext,
  useState,
} from "react";

import type { FilterContextType } from "./types";

const FilterContext = createContext<FilterContextType>({
  filter: {},
  setFilter: () => {},
});

const FilterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filter, setFilter] = useState<Record<string, any>>({});

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, FilterContext };
