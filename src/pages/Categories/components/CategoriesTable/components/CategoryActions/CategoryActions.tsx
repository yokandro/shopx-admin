import { useContext, type FC, useCallback } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { ModalContext } from "src/common/contexts/ModalContext/ModalContext";
import { CategoryModals } from "src/pages/Categories/constants";

import type { CategoryActionsProps } from "./types";

const CategoryActions: FC<CategoryActionsProps> = ({ category }) => {
  const { setModal, setPayload } = useContext(ModalContext);

  const onButtonClick = useCallback(
    (modal: CategoryModals) => () => {
      setPayload({ category });
      setModal(modal, true);
    },
    [category, setModal, setPayload]
  );

  return (
    <div className="cursor-pointer">
      <EditOutlined
        className="mr-4"
        onClick={onButtonClick(CategoryModals.UpsertCategory)}
      />
      <DeleteOutlined
        className="text-red-500"
        onClick={onButtonClick(CategoryModals.DeleteCategory)}
      />
    </div>
  );
};

export default CategoryActions;
