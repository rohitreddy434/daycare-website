"use client";
import { usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
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
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const handleHashChange = () => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const subMenuOffset = 150;
        const headerOffset = 120; // Adjust this value to match your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - (headerOffset + subMenuOffset);
        element.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    handleHashChange();
    // Function to handle the hash change
  }, [params]);

  const onClick: MenuProps["onClick"] = (e) => {
    router.push(e.key);
  };

  return (
    <div>
      <nav className="home-tabs">
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[homeMenuItems[0].key]}
          items={homeMenuItems}
          style={{ flex: 1, minWidth: 0, justifyContent: "center" }}
          onClick={onClick}
        />
        {/* <Link href="/home#about" scroll={true}>
          About
        </Link>
        <Link href="/home#programs" scroll={true}>
          Programs
        </Link>
        <Link href="/home#activities" scroll={true}>
          Activities
        </Link>
        <Link href="/home#food" scroll={true}>
          Food
        </Link>
        <Link href="/home#contact" scroll={true}>
          Contact us
        </Link> */}
      </nav>
      <div>{children}</div>
    </div>
  );
}
