import { Modal, Typography, message } from "antd";
import { useContext } from "react";

import { ModalContext } from "src/common/contexts/ModalContext/ModalContext";
import {
  GetProductsDocument,
  useDeleteProductByIdMutation,
} from "src/gql/generated.graphql";
import { PRODUCT_MODALS } from "src/pages/Products/constants";

const DeleteProductModal = () => {
  const { isOpenedCurrent, payload, setModal, setPayload } =
    useContext(ModalContext);
  const open = isOpenedCurrent[PRODUCT_MODALS.DeleteProduct];
  const { product } = payload || {};

  const [deleteProduct, { loading }] = useDeleteProductByIdMutation({
    onCompleted: () => message.success("Product deleted successfully"),
    onError: (error) => message.error(error.message),
    refetchQueries: [GetProductsDocument],
  });

  const onCancel = () => {
    setModal(PRODUCT_MODALS.DeleteProduct, false);
    setPayload(undefined);
  };

  const onSubmit = () => {
    deleteProduct({
      variables: { productId: product?._id },
      onCompleted: onCancel,
    });
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title="Delete product"
      onOk={onSubmit}
      okButtonProps={{ danger: true, loading: loading }}
      okText="Delete"
    >
      <Typography.Text>
        Are you sure you want to delete {product?.name}?
      </Typography.Text>
    </Modal>
  );
};

export default DeleteProductModal;
