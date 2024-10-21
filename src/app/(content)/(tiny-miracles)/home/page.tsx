"use client";
import { useEffect } from "react";
import About from "./about/About";
import Activities from "./activities/Activities";
import Programs from "./programs/Programs";
import Food from "./food/Food";
import { useRouter } from "next/navigation";
import ContactUs from "./contact/ContactUs";

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
  }, [router]);

  return (
    <div className="content-container">
      <section id="about" style={{ backgroundColor: "#efa79d" }}>
        <About />
      </section>
      <section id="programs" style={{ backgroundColor: "#81bab9" }}>
        <Programs />
      </section>
      <section id="activities" style={{ backgroundColor: "#fc7e83" }}>
        <Activities />
      </section>
      <section id="food" style={{ backgroundColor: "#78d7d3" }}>
        <Food />
      </section>

      <section id="contact" style={{ backgroundColor: "#f9f9f9" }}>
        <ContactUs />
      </section>
    </div>
  );
}
