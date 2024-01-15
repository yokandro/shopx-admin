import { useContext } from "react";
import { Button, Dropdown, Typography, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { useAuth } from "src/common/hooks/useAuth/useAuth";
import { ViewerContext } from "src/common/contexts/ViewerContext/ViewerContext";

import { StyledAvatar, StyledHeader } from "./Header.styles";

const Header = () => {
  const { token } = theme.useToken();
  const { user } = useContext(ViewerContext);
  const { logout } = useAuth();

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  return (
    <StyledHeader>
      <Typography.Title className="!text-white" level={3}>
        ShopX Admin
      </Typography.Title>
      <Dropdown
        dropdownRender={() => (
          <div style={contentStyle} className="p-4">
            <Typography className="mb-2 font-semibold">
              {user?.account?.email}
            </Typography>
            <Button danger type="primary" className="w-full" onClick={logout}>
              Log out
            </Button>
          </div>
        )}
      >
        <div className="flex items-center">
          <div className="text-white mr-2">
            {user?.firstName} {user?.lastName}
          </div>
          <StyledAvatar className="cursor-pointer" icon={<UserOutlined />} />
        </div>
      </Dropdown>
    </StyledHeader>
  );
};

export default Header;
