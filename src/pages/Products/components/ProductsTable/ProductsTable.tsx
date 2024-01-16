import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import moment from "moment";
import { useContext, useMemo } from "react";

import { SearchContext } from "src/common/contexts/SearchContext/SearchContext";
import { useTablePagination } from "src/common/hooks/useTablePagination/useTablePagination";
import { useTableSort } from "src/common/hooks/useTableSort/useTableSort";
import { FilterContext } from "src/common/contexts/FilterContext/FilterContext";
import {
  Product,
  ProductStatuses,
  useGetProductsQuery,
} from "src/gql/generated.graphql";

import { ProductActions } from "./components/ProductActions";
import { ProductStatusColumn } from "./components/ProductStatusColumn";

const ProductsTable = () => {
  const { searchTerm } = useContext(SearchContext);
  const { sort, handleSort } = useTableSort();
  const { setPage, pagination } = useTablePagination();
  const { filter } = useContext(FilterContext);

  const { data, loading } = useGetProductsQuery({
    variables: {
      filter: {
        searchTerm,
        categoryIds:
          filter.categoryIds && filter.categoryIds.length > 0
            ? filter.categoryIds
            : undefined,
        statuses:
          filter.statuses && filter.statuses.length > 0
            ? filter.statuses
            : undefined,
      },
      sort,
      pagination,
    },
  });

  const { products, totalCount } = useMemo(
    () => ({
      products: data?.getProducts.collection || [],
      totalCount: data?.getProducts.totalCount || 0,
    }),
    [data]
  );

  const columns: ColumnsType<Product> = [
    {
      title: "Product code",
      dataIndex: "code",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b, order) => handleSort("name", order),
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (value: string) => value || "N/A",
    },
    {
      title: "Category",
      dataIndex: "categoryName",
      render: (value: string) => value || "N/A",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b, order) => handleSort("price", order),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (value: ProductStatuses, record: Product) => (
        <ProductStatusColumn status={value} productId={record._id} />
      ),
      sorter: (a, b, order) => handleSort("status", order),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      sorter: (a, b, order) => handleSort("createdAt", order),
      render: (value: string) => moment(value).format("DD/MM/YYYY"),
    },
    {
      title: "Actions",
      render: (product: Product) => <ProductActions product={product} />,
    },
  ];

  return (
    <Table
      rowKey={(record) => record._id}
      dataSource={products as Product[]}
      columns={columns}
      pagination={{
        pageSize: pagination.limit,
        total: totalCount,
        onChange: setPage,
      }}
      loading={loading}
    />
  );
};

export default ProductsTable;
