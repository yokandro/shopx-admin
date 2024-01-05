import {
  type FC,
  type PropsWithChildren,
  createContext,
  useState,
} from "react";

import type { SearchContextType } from "./types";

const SearchContext = createContext<SearchContextType>({
  searchTerm: "",
  setSearchTerm: () => null,
});

const SearchProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
