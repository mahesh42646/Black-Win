import React from "react";
import { Accordion } from "react-bootstrap";

const FAQAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How does the raffle system work?</Accordion.Header>
        <Accordion.Body>
          Our raffle system is based on a fair draw. You purchase tickets, and winners are selected randomly.
          Our raffle system is based on a fair draw. You purchase tickets, and winners are selected randomly.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>How can I buy tickets?</Accordion.Header>
        <Accordion.Body>
          You can buy tickets by signing up, selecting a contest, and making a secure payment.
          You can buy tickets by signing up, selecting a contest, and making a secure payment.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Is my personal information safe?</Accordion.Header>
        <Accordion.Body>
          Yes, we use top-notch security protocols to ensure your data remains confidential.
          Yes, we use top-notch security protocols to ensure your data remains confidential.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>When will the winners be announced?</Accordion.Header>
        <Accordion.Body>
          Winners are announced as soon as the contest ends. You will receive a notification via email.
          Winners are announced as soon as the contest ends. You will receive a notification via email.
          Winners are announced as soon as the contest ends. You will receive a notification via email.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FAQAccordion;
