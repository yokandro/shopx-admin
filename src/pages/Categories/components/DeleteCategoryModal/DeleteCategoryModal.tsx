import { Modal, Typography, message } from "antd";
import { useContext } from "react";

import { ModalContext } from "src/common/contexts/ModalContext/ModalContext";
import {
  GetCategoriesDocument,
  GetProductsDocument,
  useDeleteCategoryByIdMutation,
} from "src/gql/generated.graphql";
import { CategoryModals } from "src/pages/Categories/constants";

const DeleteCategoryModal = () => {
  const { isOpenedCurrent, setModal, setPayload, payload } =
    useContext(ModalContext);
  const open = isOpenedCurrent[CategoryModals.DeleteCategory];
  const { category } = payload || {};

  const [deleteCategory, { loading }] = useDeleteCategoryByIdMutation({
    onCompleted: () => message.success("Category deleted successfully"),
    onError: () => message.error("Error deleting category"),
    refetchQueries: [GetCategoriesDocument, GetProductsDocument],
  });

  const onCancel = () => {
    setModal(CategoryModals.DeleteCategory, false);
    setPayload(undefined);
  };

  const onSubmit = () => {
    deleteCategory({
      variables: { categoryId: category?._id },
      onCompleted: onCancel,
    });
  };

  return (
    <Modal
      title="Delete category"
      open={open}
      onCancel={onCancel}
      okText="Delete"
      okButtonProps={{ danger: true, loading }}
      onOk={onSubmit}
    >
      <Typography.Text>
        Are you sure you want to delete {category?.name}? This category will be
        deleted from all related products
      </Typography.Text>
    </Modal>
  );
};

export default DeleteCategoryModal;
