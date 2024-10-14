"use client";
import { ConfigProvider, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import daycareName from "../resources/images/name.png";
import Image from "next/image";

import "./styles.css";

const mainMenuItems = [
  {
    key: "home",
    label: `Home`,
  },
  {
    key: "tour",
    label: `Schedule Tour`,
  },
  {
    key: "login",
    label: `Login`,
  },
];

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [currentMenu, setCurrentMenu] = useState(mainMenuItems[0].key);
  // const onClick: MenuProps["onClick"] = (e) => {
  //   console.log("click ", e);
  //   setCurrentMenu(e.key);
  // };

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: { headerBg: "#f2f0d8", bodyBg: "#eee7cf" },
          Menu: {
            darkItemBg: "#f2f0d8",
            darkItemColor: "black",
            darkItemHoverColor: "black",
          },
        },
      }}
    >
      <Layout className="home-layout">
        <Header
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            padding: 0,
            position: "fixed",
            width: "100%",
          }}
        >
          <div className="title-logo">
            <Image src={daycareName} alt="Tiny Miracles Daycare" width={200} />
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[mainMenuItems[0].key]}
            items={mainMenuItems}
            style={{ flex: 1, minWidth: 0, justifyContent: "end" }}
          />
        </Header>
        <Content className="home-container">{children}</Content>
        {/* <Footer style={{ textAlign: "center" }}>
        Tiny miracles daycare ©{new Date().getFullYear()} Created by Swathi
      </Footer> */}
      </Layout>
    </ConfigProvider>
  );
}
