import { useState } from "react";

export const useTablePagination = (limit: number = 10) => {
  const [page, setPage] = useState(1);

  return { setPage, pagination: { limit, skip: (page - 1) * limit } };
};
