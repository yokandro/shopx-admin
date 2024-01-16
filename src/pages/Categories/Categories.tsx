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

import { CategoryModals } from "./constants";
import { UpsertCategoryModal } from "./components/UpsertCategoryModal";
import { CategoriesTable } from "./components/CategoriesTable";
import { DeleteCategoryModal } from "./components/DeleteCategoryModal";

const Categories = () => {
  const { setModal } = useContext(ModalContext);
  const { setSearchTerm } = useContext(SearchContext);

  return (
    <div>
      <UpsertCategoryModal />
      <DeleteCategoryModal />
      <div className="flex items-center justify-between mb-4">
        <Typography.Title level={4}>Categories</Typography.Title>
        <div className="flex">
          <Input.Search
            className="mr-2 min-w-[300px]"
            placeholder="Search category"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            onClick={() => setModal(CategoryModals.UpsertCategory, true)}
            type="primary"
          >
            Create category
          </Button>
        </div>
      </div>
      <CategoriesTable />
    </div>
  );
};

const CategoriesPage = () => (
  <ModalProvider>
    <SearchProvider>
      <Categories />
    </SearchProvider>
  </ModalProvider>
);

export default CategoriesPage;
