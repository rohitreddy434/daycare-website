import Image from "next/image";
import Logo from "../../../../resources/images/logo-1024.png";
import { Typography } from "antd";
const { Text, Title } = Typography;

export default function About() {
  return (
    <div style={{ display: "flex", width: "100%", backgroundColor: "#efa79d" }}>
      <div style={{ flex: 1 }}>
        <Image width={600} src={Logo} alt="Tiny Miracles Daycare" />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title level={2}>Unlocking Curiosity</Title>
        <Text>
          Tiny miracles family daycare proudly adheres to the highest standards
          of education and caregiving. We are committed to providing a
          supportive environment where your child can thrive.
        </Text>
      </div>
    </div>
  );
}
