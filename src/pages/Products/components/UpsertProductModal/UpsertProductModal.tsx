import { Form, Input, Modal, TreeSelect, message } from "antd";
import { useContext, useMemo } from "react";

import { PRODUCT_MODALS } from "src/pages/Products/constants";
import { ModalContext } from "src/common/contexts/ModalContext/ModalContext";
import {
  GetProductsDocument,
  useCreateProductMutation,
  useGetCategoriesQuery,
  useUpdateProductMutation,
} from "src/gql/generated.graphql";
import { buildTree } from "src/common/helpers/tree/tree";

const UpsertProductModal = () => {
  const [form] = Form.useForm();
  const { isOpenedCurrent, setModal, payload, setPayload } =
    useContext(ModalContext);
  const open = isOpenedCurrent[PRODUCT_MODALS.UpsertProduct];
  const { product } = payload || {};
  const isEdit = !!product;

  const [createProduct] = useCreateProductMutation({
    onError: (error) => message.error(error.message),
    onCompleted: () => message.success("Product has been created successfully"),
    refetchQueries: [GetProductsDocument],
  });

  const [updateProduct] = useUpdateProductMutation({
    onError: (error) => message.error(error.message),
    onCompleted: () => message.success("Product has been updated successfully"),
    refetchQueries: [GetProductsDocument],
  });

  const { data, loading } = useGetCategoriesQuery();

  const categoriesOptions = useMemo(() => {
    const categories = data?.getCategories.collection || [];

    const tree = categories.map((category) => ({
      ...category,
      title: category.name,
      value: category._id,
    }));

    return buildTree(tree);
  }, [data]);

  const closeModal = () => {
    setPayload(undefined);
    setModal(PRODUCT_MODALS.UpsertProduct, false);
    form.resetFields();
  };

  const onFinish = ({ price, ...values }: any) => {
    if (isEdit) {
      return updateProduct({
        variables: {
          input: { ...values, price: +price, productId: product._id },
        },
        onCompleted: closeModal,
      });
    }
    createProduct({
      variables: { input: { ...values, price: +price } },
      onCompleted: closeModal,
    });
  };

  return (
    <Modal
      title={isEdit ? "Edit product" : "Create product"}
      open={open}
      destroyOnClose
      onCancel={closeModal}
      okText={isEdit ? "Edit" : "Create"}
      onOk={form.submit}
    >
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        initialValues={product}
      >
        <Form.Item name="name" label="Name">
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea placeholder="Enter description" />
        </Form.Item>
        <Form.Item name="categoryId" label="Category">
          <TreeSelect
            placeholder="Select category"
            loading={loading}
            treeData={categoriesOptions}
          />
        </Form.Item>
        <Form.Item name="price" label="Price">
          <Input type="number" placeholder="Enter price" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpsertProductModal;
