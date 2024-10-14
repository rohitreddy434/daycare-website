"use client";
import { useEffect } from "react";
import About from "./about/About";
import Activities from "./activities/Activities";
import Programs from "./programs/Programs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            router.push(`/home/#${entry.target.id}`, { scroll: false });
          }
        });
      },
      { threshold: 0 } // Trigger when 50% of section is visible
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="content-container">
      <section id="about" style={{ backgroundColor: "#ffefef" }}>
        <About />
      </section>
      <section
        id="programs"
        style={{ minHeight: "800px", backgroundColor: "#e6f7ff" }}
      >
        <Programs />
      </section>
      <section
        id="activities"
        style={{ minHeight: "800px", backgroundColor: "#e6f7ff" }}
      >
        <Activities />
      </section>

      <section
        id="contact"
        style={{ minHeight: "800px", backgroundColor: "#f4f4f4" }}
      >
        <h1>Contact Us</h1>
        <p>Reach out to us for enrollment or any inquiries!</p>
      </section>
    </div>
  );
}
