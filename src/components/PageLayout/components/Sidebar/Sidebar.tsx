import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { sidebarMenuItems } from "./contants";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Menu
      theme="dark"
      selectedKeys={[location.pathname]}
      items={sidebarMenuItems?.map((item) => ({
        ...item,
        onClick: () => navigate(item?.key as string),
      }))}
    />
  );
};

export default Sidebar;
