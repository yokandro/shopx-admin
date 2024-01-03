import type { ReactNode } from "react";

import { Login } from "src/pages/Auth/Login";
import { Products } from "src/pages/Products";
import { Categories } from "src/pages/Categories";
import { Users } from "src/pages/Users";

import { RoutesMap } from "./routes-map";

export const ROUTES: {
  path: RoutesMap;
  element: ReactNode;
  skipLayout?: boolean;
}[] = [
  {
    path: RoutesMap.Login,
    element: <Login />,
    skipLayout: true,
  },
  {
    path: RoutesMap.Products,
    element: <Products />,
  },
  {
    path: RoutesMap.Categories,
    element: <Categories />,
  },
  {
    path: RoutesMap.Users,
    element: <Users />,
  },
];
