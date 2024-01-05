import { useContext, useMemo } from "react";
import { Form, Input, Modal, TreeSelect, message } from "antd";

import { ModalContext } from "src/common/contexts/ModalContext/ModalContext";
import {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
} from "src/gql/generated.graphql";
import { CategoryModals } from "src/pages/Categories/constants";
import { buildTree } from "src/common/helpers/tree/tree";

const CreateCategoryModal = () => {
  const [form] = Form.useForm();
  const { isOpenedCurrent, setModal } = useContext(ModalContext);
  const [createCategory] = useCreateCategoryMutation();
  const { data } = useGetCategoriesQuery();

  const isOpen = isOpenedCurrent[CategoryModals.CreateCategory];
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
    form.resetFields();
    setModal(CategoryModals.CreateCategory);
  };

  const onFinish = (values: any) => {
    createCategory({
      variables: {
        input: values,
      },
      onCompleted: () => {
        message.success("Category has been created");
        closeModal();
      },
      onError: (error) => {
        message.error(error.message);
      },
    });
  };

  return (
    <Modal
      title="Create category"
      open={isOpen}
      onOk={form.submit}
      onCancel={closeModal}
    >
      <Form onFinish={onFinish} form={form}>
        <Form.Item name="parentCategoryId">
          <TreeSelect
            placeholder="Select category"
            treeData={categoriesOptions}
          />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input placeholder="Enter category name" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateCategoryModal;
