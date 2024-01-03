import { Spin } from "antd";
import { Navigate, Route, Routes } from "react-router-dom";

import { useInitViewer } from "src/common/hooks/useInitViewer/useInitViewer";
import { NotFoundPage } from "src/pages/NotFoundPage";
import { PageLayout } from "src/components/PageLayout";

import { RoutesMap } from "./routes-map";
import { ROUTES } from "./constants";

function App() {
  const { isViewerLoading } = useInitViewer();

  return (
    <>
      <Spin fullscreen spinning={isViewerLoading} />
      <Routes>
        <Route path="/" element={<Navigate to={RoutesMap.Products} />} />
        {ROUTES.map(({ path, element, skipLayout }) => (
          <Route
            key={path}
            path={path}
            element={skipLayout ? element : <PageLayout>{element}</PageLayout>}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
