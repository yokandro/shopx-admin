import { Route, Routes } from "react-router-dom";

import { Login } from "src/pages/Auth/Login";
import { Home } from "src/pages/Home";
import { useInitViewer } from "src/common/hooks/useInitViewer/useInitViewer";

import { RoutesMap } from "./routes-map";
import { Spin } from "antd";

function App() {
  const { isViewerLoading } = useInitViewer();

  return (
    <>
      <Spin fullscreen spinning={isViewerLoading} />
      <Routes>
        <Route path={RoutesMap.Login} element={<Login />} />
        <Route path={RoutesMap.Home} element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
