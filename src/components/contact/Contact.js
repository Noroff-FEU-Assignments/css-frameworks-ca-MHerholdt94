import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ContentForm from "./ContentForm";
import ContentContactInfo from "./ContentContactInfo";

function Contact() {
  return (
    <Container className="contact-container">
      <h1>Submit your details</h1>
      <Container className="columns d-sm-flex">
        <Col className="column">
          <ContentForm />
        </Col>
        <Col className="column">
          <ContentContactInfo />
        </Col>
      </Container>
    </Container>
  );
}

export default Contact;
