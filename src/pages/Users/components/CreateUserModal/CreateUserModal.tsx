import { Form, Input, Modal, Select, message } from "antd";
import { capitalize } from "lodash";
import { useContext } from "react";

import { ModalContext } from "src/common/contexts/ModalContext/ModalContext";
import {
  GetUsersDocument,
  Roles,
  useCreateUserMutation,
} from "src/gql/generated.graphql";
import { UserModals } from "src/pages/Users/constants";

const CreateUserModal = () => {
  const [form] = Form.useForm();
  const { isOpenedCurrent, setModal } = useContext(ModalContext);
  const open = isOpenedCurrent[UserModals.CreateUser];
  const [createUser] = useCreateUserMutation({
    onCompleted: () => {
      message.success("Invitation email has been sent");
    },
    onError: (error) => message.error(error.message),
    refetchQueries: [GetUsersDocument],
  });

  const closeModal = () => {
    form.resetFields();
    setModal(UserModals.CreateUser, false);
  };

  const onFinish = (values: any) =>
    createUser({ variables: { input: values }, onCompleted: closeModal });

  const rolesOptions = Object.values(Roles).map((role) => ({
    value: role,
    label: capitalize(role),
  }));

  return (
    <Modal
      open={open}
      title="Create user"
      onCancel={closeModal}
      onOk={form.submit}
    >
      <Form onFinish={onFinish} layout="vertical" form={form}>
        <Form.Item name="firstName" label="First name">
          <Input placeholder="Enter first name" />
        </Form.Item>
        <Form.Item name="lastName" label="Last name">
          <Input placeholder="Enter last name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Incorrect email format" },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item name="role" label="Role">
          <Select placeholder="Select role" options={rolesOptions} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateUserModal;
