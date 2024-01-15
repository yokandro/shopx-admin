import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import moment from "moment";
import { useContext, useMemo } from "react";

import { SearchContext } from "src/common/contexts/SearchContext/SearchContext";
import { useTablePagination } from "src/common/hooks/useTablePagination/useTablePagination";
import { useTableSort } from "src/common/hooks/useTableSort/useTableSort";
import { Product, useGetProductsQuery } from "src/gql/generated.graphql";

const ProductsTable = () => {
  const { searchTerm } = useContext(SearchContext);
  const { sort, handleSort } = useTableSort();
  const { setPage, pagination } = useTablePagination();

  const { data, loading } = useGetProductsQuery({
    variables: {
      filter: {
        searchTerm,
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
    },
    {
      title: "Category",
      dataIndex: "categoryName",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b, order) => handleSort("price", order),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      sorter: (a, b, order) => handleSort("createdAt", order),
      render: (value: string) => moment(value).format("DD/MM/YYYY"),
    },
  ];
  console.log(products);
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
