import type { Dispatch, SetStateAction } from "react";

export type SearchContextType = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};
