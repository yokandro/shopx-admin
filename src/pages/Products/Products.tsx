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

import { PRODUCT_MODALS } from "./constants";
import { UpsertProductModal } from "./components/UpsertProductModal";
import { ProductsTable } from "./components/ProductsTable";
import { DeleteProductModal } from "./components/DeleteProductModal";

const Products = () => {
  const { setModal } = useContext(ModalContext);
  const { setSearchTerm } = useContext(SearchContext);

  return (
    <div>
      <UpsertProductModal />
      <DeleteProductModal />
      <div className="flex items-center justify-between mb-4">
        <Typography.Title level={4}>Products</Typography.Title>
        <div className="flex items-center">
          <Input.Search
            placeholder="Find product"
            className="mr-2 min-w-[300px]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            type="primary"
            onClick={() => setModal(PRODUCT_MODALS.UpsertProduct, true)}
          >
            Create product
          </Button>
        </div>
      </div>
      <ProductsTable />
    </div>
  );
};

const ProductsPage = () => (
  <ModalProvider>
    <SearchProvider>
      <Products />
    </SearchProvider>
  </ModalProvider>
);

export default ProductsPage;
