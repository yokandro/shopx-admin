import { Layout } from "antd";
import type { FC, PropsWithChildren } from "react";

import { StyledContent, StyledPageLayout } from "./PageLayout.styles";

const { Header, Sider } = Layout;

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledPageLayout>
      <Header />
      <Layout hasSider>
        <Sider />
        <StyledContent>{children}</StyledContent>
      </Layout>
    </StyledPageLayout>
  );
};

export default PageLayout;
