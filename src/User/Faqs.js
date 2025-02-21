import React from "react";
import { Container } from "react-bootstrap";
import FAQAccordion from "../User/FAQAccordion";
import "./FAQ.css"; // Custom styles

const FAQ = () => {
  return (
    <div className="faq-page">
      {/* Hero Section */}
      <div className="hero-section text-center">
        <div className="overlay">
          <h1 className="display-4 fw-bold">Frequently Asked Questions</h1>
          <p className="text-light">Find answers to the most common queries below.</p>
        </div>
      </div>

      {/* FAQ Section */}
      <Container className="mt-5">
        <FAQAccordion />
      </Container>
    </div>
  );
};

export default FAQ;
