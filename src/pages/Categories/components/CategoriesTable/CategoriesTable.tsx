import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useContext, useMemo } from "react";

import { SearchContext } from "src/common/contexts/SearchContext/SearchContext";
import { useTableSort } from "src/common/hooks/useTableSort/useTableSort";
import { useTablePagination } from "src/common/hooks/useTablePagination/useTablePagination";
import {
  type Category,
  useGetCategoriesQuery,
} from "src/gql/generated.graphql";

import { CATEGORY_TABLE_COLUMNS } from "./constants";
import moment from "moment";

const CategoriesTable = () => {
  const { searchTerm } = useContext(SearchContext);
  const { sort, handleSort } = useTableSort();
  const { setPage, pagination } = useTablePagination();

  const { data, loading } = useGetCategoriesQuery({
    variables: {
      filter: {
        searchTerm,
      },
      pagination,
      sort: sort,
    },
    fetchPolicy: "network-only",
  });

  const { categories, totalCount } = useMemo(
    () => ({
      categories: data?.getCategories.collection || [],
      totalCount: data?.getCategories.totalCount || 0,
    }),
    [data]
  );

  const columns: ColumnsType<Category> = CATEGORY_TABLE_COLUMNS.map(
    ({ title, key }) => ({
      title,
      key,
      dataIndex: key,
      sorter: (a, b, sortOrder) => handleSort(key, sortOrder),
      render: (value: string) =>
        key === "createdAt" || key === "updatedAt"
          ? moment(value).format("DD/MM/YYYY")
          : value || "-",
    })
  );

  return (
    <Table
      rowKey={(record) => record._id}
      loading={loading}
      dataSource={categories as Category[]}
      columns={columns}
      pagination={{
        pageSize: pagination.limit,
        total: totalCount,
        onChange: setPage,
      }}
    />
  );
};

export default CategoriesTable;
