import { Button, Input, Typography } from "antd";
import { useContext } from "react";

import {
  ModalContext,
  ModalProvider,
} from "src/common/contexts/ModalContext/ModalContext";
import {
  SearchContext,
  SearchProvider,
} from "src/common/contexts/SearchContext/SearchContext";
import { FilterProvider } from "src/common/contexts/FilterContext/FilterContext";

import { UsersTable } from "./components/UsersTable";
import { CreateUserModal } from "./components/CreateUserModal";
import { UserModals } from "./constants";
import { UsersFilter } from "./components/UsersFilter";
import { DeleteUserModal } from "./components/DeleteUserModal";

const Users = () => {
  const { setSearchTerm } = useContext(SearchContext);
  const { setModal } = useContext(ModalContext);

  return (
    <div>
      <CreateUserModal />
      <DeleteUserModal />
      <div className="flex items-center justify-between mb-2">
        <Typography.Title level={4}>Users</Typography.Title>
        <div className="flex items-center">
          <Input.Search
            className="min-w-[300px]"
            placeholder="Search users"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <UsersFilter className="mx-2" />
          <Button
            onClick={() => setModal(UserModals.CreateUser, true)}
            type="primary"
          >
            Create user
          </Button>
        </div>
      </div>
      <UsersTable />
    </div>
  );
};

const UsersPage = () => (
  <ModalProvider>
    <SearchProvider>
      <FilterProvider>
        <Users />
      </FilterProvider>
    </SearchProvider>
  </ModalProvider>
);

export default UsersPage;
