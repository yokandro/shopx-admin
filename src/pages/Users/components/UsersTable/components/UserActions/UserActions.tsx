import { message } from "antd";
import { useContext, type FC } from "react";

import { DeleteOutlined, UndoOutlined } from "@ant-design/icons";

import {
  AccountStatuses,
  useResendUserInvitationEmailMutation,
} from "src/gql/generated.graphql";
import { ModalContext } from "src/common/contexts/ModalContext/ModalContext";
import { UserModals } from "src/pages/Users/constants";
import { ViewerContext } from "src/common/contexts/ViewerContext/ViewerContext";

import type { UserActionsProps } from "./types";

const UserActions: FC<UserActionsProps> = ({ user }) => {
  const { setModal, setPayload } = useContext(ModalContext);
  const { user: currentUser } = useContext(ViewerContext);

  const [resendEmail] = useResendUserInvitationEmailMutation({
    onCompleted: () => message.success("Invitation email has been sent"),
    onError: (error) => message.error(error.message),
  });

  const onDelete = () => {
    setPayload({ user });
    setModal(UserModals.DeleteUser, true);
  };

  return (
    <div>
      {user.account.status !== AccountStatuses.Active && (
        <UndoOutlined
          className="mr-2"
          onClick={() => resendEmail({ variables: { userId: user._id } })}
        />
      )}
      {user.accountId !== currentUser?.accountId && (
        <DeleteOutlined className="text-red-500" onClick={onDelete} />
      )}
    </div>
  );
};

export default UserActions;
