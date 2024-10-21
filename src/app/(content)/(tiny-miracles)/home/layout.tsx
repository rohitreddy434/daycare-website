"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Menu, MenuProps } from "antd";

const homeMenuItems = [
  {
    key: `/home#about`,
    label: "About",
  },
  {
    key: `/home#programs`,
    label: "Programs",
  },
  {
    key: `/home#activities`,
    label: "Activities",
  },
  {
    key: `/home#food`,
    label: "Food",
  },
  {
    key: `/home#contact`,
    label: "Contact us",
  },
];
export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const subMenuOffset = 46;
          const headerOffset = 64; // Adjust this value to match your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition - (headerOffset + subMenuOffset);
          element.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };
    handleHashChange();
    // Function to handle the hash change
  }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    router.push(e.key);
  };

  return (
    <div>
      <nav className="home-tabs">
        <Menu
          style={{ backgroundColor: "#eee7cf" }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[homeMenuItems[0].key]}
          items={homeMenuItems}
          onClick={onClick}
        />
      </nav>
      <div>{children}</div>
    </div>
  );
}
