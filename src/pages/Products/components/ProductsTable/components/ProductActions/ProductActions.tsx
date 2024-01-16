import { useContext, type FC, useCallback } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { ModalContext } from "src/common/contexts/ModalContext/ModalContext";
import { PRODUCT_MODALS } from "src/pages/Products/constants";

import type { ProductActionsType } from "./types";

const ProductActions: FC<ProductActionsType> = ({ product }) => {
  const { setModal, setPayload } = useContext(ModalContext);

  const onButtonClick = useCallback(
    (modal: PRODUCT_MODALS) => () => {
      setPayload({ product });
      setModal(modal, true);
    },
    [product, setModal, setPayload]
  );

  return (
    <div className="cursor-pointer">
      <EditOutlined
        className="mr-4"
        onClick={onButtonClick(PRODUCT_MODALS.UpsertProduct)}
      />
      <DeleteOutlined
        className="text-red-500"
        onClick={onButtonClick(PRODUCT_MODALS.DeleteProduct)}
      />
    </div>
  );
};

export default ProductActions;
