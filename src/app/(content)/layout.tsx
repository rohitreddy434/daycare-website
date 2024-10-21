"use client";
import { ConfigProvider, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import daycareName from "../resources/images/name.png";
import daycareLogo from "../resources/images/logo-1024.png";
import Image from "next/image";

import "./styles.css";

const mainMenuItems = [
  {
    key: "home",
    label: `Home`,
  },
  // {
  //   key: "tour",
  //   label: `Schedule Tour`,
  // },
  // {
  //   key: "login",
  //   label: `Login`,
  // },
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
            darkPopupBg: "#f2f0d8",
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
            width: "100%",
          }}
        >
          <div className="title-logo long">
            <Image src={daycareName} alt="Tiny Miracles Daycare" width={200} />
          </div>
          <div className="title-logo short">
            <Image src={daycareLogo} alt="Tiny Miracles Daycare" width={64} />
          </div>
          <div className="header-contact long">
            Spots open, contact <a href="tel:+16692787764">+1 (669) 278-7764</a>{" "}
            to schedule a tour
          </div>
          <div className="header-contact short">
            <a href="tel:+16692787764">Schedule Tour</a>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[mainMenuItems[0].key]}
            items={mainMenuItems}
            style={{ minWidth: 80, justifyContent: "end" }}
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
