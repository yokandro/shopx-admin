import { Button } from "antd";
import { useContext } from "react";

import { ViewerContext } from "src/common/contexts/ViewerContext/ViewerContext";
import { useAuth } from "src/common/hooks/useAuth/useAuth";
import { PageLayout } from "src/components/PageLayout";

const Home = () => {
  const { user } = useContext(ViewerContext);
  const { logout } = useAuth();

  return (
    <PageLayout>
      {user?.firstName} {user?.lastName}
      <Button onClick={logout}>Log out</Button>
    </PageLayout>
  );
};

export default Home;
