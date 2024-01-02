import { Route, Routes } from "react-router-dom";

import { Login } from "src/pages/Auth/Login";
import { Home } from "src/pages/Home";

import { RoutesMap } from "./routes-map";

function App() {
  return (
    <Routes>
      <Route path={RoutesMap.Login} element={<Login />} />
      <Route path={RoutesMap.Home} element={<Home />} />
    </Routes>
  );
}

export default App;
