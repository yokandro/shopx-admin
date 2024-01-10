import { Form, Input, Modal, TreeSelect, message } from "antd";
import { useContext, useMemo } from "react";

import { PRODUCT_MODALS } from "src/pages/Products/constants";
import { ModalContext } from "src/common/contexts/ModalContext/ModalContext";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
} from "src/gql/generated.graphql";
import { buildTree } from "src/common/helpers/tree/tree";

const CreateProductModal = () => {
  const [form] = Form.useForm();
  const { isOpenedCurrent, setModal } = useContext(ModalContext);
  const open = isOpenedCurrent[PRODUCT_MODALS.CreateProduct];

  const [createProduct] = useCreateProductMutation({
    onError: (error) => message.error(error.message),
    onCompleted: () => message.success("Product has been created successfully"),
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
    setModal(PRODUCT_MODALS.CreateProduct);
  };

  const onFinish = ({ price, ...values }: any) => {
    createProduct({
      variables: { input: { ...values, price: +price } },
      onCompleted: closeModal,
    });
  };

  return (
    <Modal
      title="Create product"
      open={open}
      onCancel={closeModal}
      onOk={form.submit}
    >
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="name">
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item name="description">
          <Input.TextArea placeholder="Enter description" />
        </Form.Item>
        <Form.Item name="categoryId">
          <TreeSelect
            placeholder="Select category"
            loading={loading}
            treeData={categoriesOptions}
          />
        </Form.Item>
        <Form.Item name="price">
          <Input type="number" placeholder="Enter price" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateProductModal;
