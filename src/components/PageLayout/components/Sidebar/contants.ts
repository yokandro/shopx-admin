import { MenuItemType } from "antd/es/menu/hooks/useItems";

import { RoutesMap } from "src/app/routes-map";

export const sidebarMenuItems: MenuItemType[] = [
  {
    key: RoutesMap.Products,
    label: "Products",
  },
  {
    key: RoutesMap.Categories,
    label: "Categories",
  },
  {
    key: RoutesMap.Users,
    label: "Users",
  },
];
