import Image from "next/image";
import Logo from "../../../../resources/images/logo-1024.png";
import { Typography } from "antd";
import "./styles.css";

const { Title } = Typography;

export default function About() {
  return (
    <div className="about-container section-content">
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
          textAlign: "center",
          gap: 32,
        }}
      >
        <div>
          <Title level={2}>Unlocking Curiosity</Title>
          <div style={{ textAlign: "center", padding: "0 32px" }}>
            Tiny miracles family daycare proudly adheres to the highest
            standards of education and caregiving. We are committed to providing
            a supportive environment where your child can thrive.
          </div>
        </div>
        <div>
          <Title level={2}>Mission</Title>
          <div style={{ textAlign: "center", padding: "0 32px" }}>
            Building the best possible next generation.
          </div>
        </div>
      </div>
    </div>
  );
}
