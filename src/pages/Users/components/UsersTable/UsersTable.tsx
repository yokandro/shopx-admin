import moment from "moment";
import { Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { capitalize } from "lodash";
import { useContext, useMemo } from "react";

import { FilterContext } from "src/common/contexts/FilterContext/FilterContext";
import { SearchContext } from "src/common/contexts/SearchContext/SearchContext";
import { useTablePagination } from "src/common/hooks/useTablePagination/useTablePagination";
import { useTableSort } from "src/common/hooks/useTableSort/useTableSort";
import {
  AccountStatuses,
  User,
  useGetUsersQuery,
} from "src/gql/generated.graphql";

import { statusesColorsMap } from "./constants";
import { UserActions } from "./components/UserActions";

const UsersTable = () => {
  const { searchTerm } = useContext(SearchContext);
  const { sort, handleSort } = useTableSort();
  const { pagination, setPage } = useTablePagination();
  const { filter } = useContext(FilterContext);

  const { roles = [], statuses = [] } = filter || {};

  const { data, loading } = useGetUsersQuery({
    variables: {
      filter: {
        ...(searchTerm && { searchTerm }),
        ...(roles.length && { roles }),
        ...(statuses.length && { statuses }),
      },
      sort,
      pagination,
    },
  });

  const { users, totalCount } = useMemo(
    () => ({
      users: data?.getUsers.collection || [],
      totalCount: data?.getUsers.totalCount || 0,
    }),
    [data]
  );

  const columns: ColumnsType<User> = [
    {
      key: "name",
      title: "Name",
      render: (user: User) => `${user.firstName} ${user.lastName}`,
      sorter: (a, b, order) => handleSort("name", order),
    },
    {
      key: "email",
      title: "Email",
      dataIndex: ["account", "email"],
      sorter: (a, b, order) => handleSort("email", order),
    },
    {
      key: "status",
      title: "Status",
      dataIndex: ["account", "status"],
      sorter: (a, b, order) => handleSort("account.status", order),
      render: (status: AccountStatuses) => (
        <Tag color={statusesColorsMap[status]}>{capitalize(status)}</Tag>
      ),
    },
    {
      key: "role",
      title: "Role",
      dataIndex: ["account", "role"],
      sorter: (a, b, order) => handleSort("account.role", order),
      render: (role: string) => capitalize(role),
    },
    {
      key: "createdAt",
      dataIndex: "createdAt",
      title: "Creation date",
      sorter: (a, b, order) => handleSort("createdAt", order),
      render: (date: string) => moment(date).format("DD/MM/YYYY"),
    },
    {
      key: "actions",
      title: "Actions",
      render: (user: User) => <UserActions user={user} />,
    },
  ];

  return (
    <Table
      rowKey={(user) => user._id}
      columns={columns}
      loading={loading}
      dataSource={users as User[]}
      pagination={{
        pageSize: pagination.limit,
        onChange: setPage,
        total: totalCount,
      }}
    />
  );
};

export default UsersTable;
