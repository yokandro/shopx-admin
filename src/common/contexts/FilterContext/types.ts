import type { Dispatch, SetStateAction } from "react";

export type FilterContextType = {
  filter: Record<string, any>;
  setFilter: Dispatch<SetStateAction<Record<string, any>>>;
};
