import React from "react";
import "./ContactUs.css";
import Title from "antd/es/typography/Title";

export default function ContactUs() {
  return (
    <div style={{ padding: 32 }}>
      <Title level={2} style={{ textAlign: "center", padding: 16 }}>
        <strong>Contact Us</strong>
      </Title>
      <p className="intro-text">
        We would love to hear from you! For inquiries or to schedule a tour,
        feel free to reach out using the information below.
      </p>

      <div className="contact-details">
        <h2>Contact Information</h2>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+16692787764">+1 (669) 278-7764</a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="childcare.tinymiracles@gmail.com">
            childcare.tinymiracles@gmail.com
          </a>
        </p>
      </div>

      <div className="location">
        <h2>Our Location</h2>
        <p>Tiny Miracles Daycare</p>
        <p>303 Titleist Ct, San Jose, CA, 95127</p>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.7034577918996!2d-121.8264262!3d37.3716934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccf4c31d0b27%3A0x2f59f63afdecc5e4!2s303%20Titleist%20Ct%2C%20San%20Jose%2C%20CA%2095127%2C%20USA!5e0!3m2!1sen!2sus!4v1697298725341!5m2!1sen!2sus"
          width="100%"
          height="300"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
