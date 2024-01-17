import { Modal, Typography, message } from "antd";
import { useContext } from "react";

import { ModalContext } from "src/common/contexts/ModalContext/ModalContext";
import {
  GetUsersDocument,
  useDeleteUserMutation,
} from "src/gql/generated.graphql";
import { UserModals } from "src/pages/Users/constants";

const DeleteUserModal = () => {
  const { isOpenedCurrent, setPayload, setModal, payload } =
    useContext(ModalContext);
  const { user } = payload || {};
  const open = isOpenedCurrent[UserModals.DeleteUser];

  const [deleteUser] = useDeleteUserMutation({
    refetchQueries: [GetUsersDocument],
  });

  const onCancel = () => {
    setPayload(null);
    setModal(UserModals.DeleteUser, false);
  };

  const onSubmit = () => {
    deleteUser({
      variables: { userId: user?._id },
      onCompleted: () => {
        message.success("User has been deleted");
        onCancel();
      },
      onError: (error) => message.error(error.message),
    });
  };

  return (
    <Modal
      open={open}
      title="Delete user"
      onCancel={onCancel}
      okButtonProps={{ danger: true }}
      okText="Delete"
      onOk={onSubmit}
    >
      <Typography.Text>
        Are you sure you want to delete {user?.firstName} {user?.lastName}?
      </Typography.Text>
    </Modal>
  );
};

export default DeleteUserModal;
