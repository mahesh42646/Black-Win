import React from "react";
import { Container } from "react-bootstrap";
import FAQAccordion from "../User/FAQAccordion";
import "./FAQ.css"; // Ensure this file is updated

const FAQ = () => {
  return (
    <div style={{background:'#180034', height:'205vh'}}>
    <div className="faq-page" style={{ paddingTop: '160px'}}>
      {/* Hero Section */}
     
      <div className="hsection" >
        <h3 className="sub-heading">You Have Questions</h3>
        <h1 className="main-heading">WE  HAVE  ANSWERS</h1>
        <p className="hero-text">Do not hesitate to send us an email if you can't find what you're looking for.</p>
        <div className="faq-tabs">
          <button className="faq-tab">Rifa Tickets</button>
          <button className="faq-tab active">Banking</button>
          <button className="faq-tab">Winning</button>
          <button className="faq-tab">Results & Alerts</button>
          <button className="faq-tab">About Rifa</button>
        </div>
      </div>

      {/* FAQ Accordion */}
      <Container className="faq-content">
        <FAQAccordion />
      </Container>

     {/* Subscription Section */}
<div className="subscribe-section">
  <div className="subscribe-content">
    <div className="subscribe-texts">
      <p className="subscribe-text">Subscribe to Sorko</p>
      <span className="subscribe-subtext">To Get Exclusive Benefits</span>
    </div>
    <div className="subscribe-input">
      <input type="email" placeholder="Enter Your Email" />
      <button>Subscribe</button>
    </div>
  </div>
</div>
</div>
    </div>
  );
};

export default FAQ;
