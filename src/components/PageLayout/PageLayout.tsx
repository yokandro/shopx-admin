import { Card, Layout } from "antd";
import type { FC, PropsWithChildren } from "react";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

const { Sider, Content } = Layout;

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className="h-full">
      <Header />
      <Layout hasSider>
        <Sider>
          <Sidebar />
        </Sider>
        <Content className="p-6">
          <Card className="h-full [&>.ant-card-body]:h-full">{children}</Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
