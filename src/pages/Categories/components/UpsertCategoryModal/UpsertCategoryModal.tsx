import { useContext, useMemo } from "react";
import { Form, Input, Modal, TreeSelect, message } from "antd";

import { ModalContext } from "src/common/contexts/ModalContext/ModalContext";
import {
  GetCategoriesDocument,
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
} from "src/gql/generated.graphql";
import { CategoryModals } from "src/pages/Categories/constants";
import { buildTree } from "src/common/helpers/tree/tree";

const UpsertCategoryModal = () => {
  const [form] = Form.useForm();
  const { isOpenedCurrent, setModal, payload, setPayload } =
    useContext(ModalContext);
  const [createCategory] = useCreateCategoryMutation({
    refetchQueries: [GetCategoriesDocument],
  });
  const [updateCategory] = useUpdateCategoryMutation({
    refetchQueries: [GetCategoriesDocument],
  });
  const { data } = useGetCategoriesQuery();
  const isEdit = !!payload;
  const { category } = payload || {};

  const isOpen = isOpenedCurrent[CategoryModals.UpsertCategory];
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
    setModal(CategoryModals.UpsertCategory, false);
    setPayload(undefined);
  };

  const onFinish = (values: any) => {
    if (isEdit) {
      return updateCategory({
        variables: { input: { ...values, categoryId: category?._id } },
        onCompleted: () => {
          message.success("Category has been updated");
          closeModal();
        },
        onError: (error) => {
          message.error(error.message);
        },
      });
    }
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
      title={isEdit ? "Update category" : "Create category"}
      open={isOpen}
      onOk={form.submit}
      okText={isEdit ? "Update" : "Create"}
      onCancel={closeModal}
    >
      <Form
        onFinish={onFinish}
        form={form}
        layout="vertical"
        initialValues={category}
      >
        <Form.Item name="parentCategoryId" label="Category">
          <TreeSelect
            placeholder="Select category"
            treeData={categoriesOptions}
          />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input placeholder="Enter category name" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea
            placeholder="Enter description"
            maxLength={1000}
            showCount
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpsertCategoryModal;
