import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5" style={{ backgroundImage: "url('/assets/about-banner.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="bg-dark bg-opacity-75 py-5">
          <h1 className="display-4 fw-bold">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <Container className="my-5">
        <Row className="text-center">
          <Col>
            <h2 className="text-primary fw-bold">Who We Are</h2>
            <p className="text-muted fs-5">
              Welcome to <strong>Rifa</strong>, the ultimate platform for online raffles and giveaways. We ensure a fun and transparent experience for all participants.
            </p>
          </Col>
        </Row>

        {/* Cards Section */}
        <Row className="mt-4">
          {/* Card 1 */}
          <Col md={4} className="mb-4">
            <Card className="shadow border-0 text-center">
              <Card.Img variant="top" src="/assets/vision-icon.png" className="w-25 mx-auto mt-4" />
              <Card.Body>
                <Card.Title className="fw-bold">Our Vision</Card.Title>
                <Card.Text className="text-muted">
                  Our goal is to create an engaging and rewarding experience through fair raffles and amazing prizes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4} className="mb-4">
            <Card className="shadow border-0 text-center">
              <Card.Img variant="top" src="/assets/mission-icon.png" className="w-25 mx-auto mt-4" />
              <Card.Body>
                <Card.Title className="fw-bold">Our Mission</Card.Title>
                <Card.Text className="text-muted">
                  Ensuring transparency and fairness while offering an entertaining way to win exciting rewards.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4} className="mb-4">
            <Card className="shadow border-0 text-center">
              <Card.Img variant="top" src="/assets/security-icon.png" className="w-25 mx-auto mt-4" />
              <Card.Body>
                <Card.Title className="fw-bold">Secure & Reliable</Card.Title>
                <Card.Text className="text-muted">
                  We prioritize security, ensuring a safe and seamless experience for all users.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row className="text-center mt-5">
          <Col>
            <h2 className="text-primary fw-bold">Get in Touch</h2>
            <p className="text-muted fs-5">
              Have questions? Reach out at{" "}
              <a href="mailto:support@rifa.com" className="text-decoration-none text-primary fw-bold">
                support@rifa.com
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
