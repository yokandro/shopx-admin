import { useState } from "react";

export const useTableSort = () => {
  const [sort, setSort] = useState<{ sortBy: string; sortOrder: number }>({
    sortBy: "createdAt",
    sortOrder: -1,
  });

  const handleSort = (sortBy: string, sortOrder?: string | null) => {
    setSort({ sortBy, sortOrder: sortOrder === "ascend" ? 1 : -1 });

    return sort.sortOrder;
  };

  return { sort, handleSort };
};
