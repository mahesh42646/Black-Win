import React from "react";
import { Container } from "react-bootstrap";
import "./Terms.css"; // Custom styles

const Terms = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <div className="hero-section text-center">
        <div className="overlay">
          <h1 className="display-4 fw-bold">Terms & Conditions</h1>
          <p className="text-light">Please read our terms carefully before participating.</p>
        </div>
      </div>

      {/* Terms Content */}
      <Container className="mt-5">
        <h2 className="text-primary">1. Introduction</h2>
        <p>
          By using our platform, you agree to abide by these terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-primary">2. Eligibility</h2>
        <p>
          Users must be 18 years or older to participate. Any violation of age restrictions will lead to account termination.
        </p>

        <h2 className="text-primary">3. Payment and Refunds</h2>
        <p>
          All payments are non-refundable. Ensure you understand the contest rules before purchasing tickets.
        </p>

        <h2 className="text-primary">4. Fair Play Policy</h2>
        <p>
          We ensure all contests are fair and transparent. Any attempt to manipulate results will result in disqualification.
        </p>

        <h2 className="text-primary">5. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use of the platform indicates acceptance of updated terms.
        </p>

        <h2 className="text-primary">6. Contact Us</h2>
        <p>
          For any inquiries regarding these terms, contact us at{" "}
          <a href="mailto:support@rifa.com" className="text-decoration-none text-primary fw-bold">
            support@rifa.com
          </a>.
        </p>
      </Container>
    </div>
  );
};

export default Terms;
