import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

function ContentContactInfo() {
  return (
    <Container className="contactInfo">
      <Col>
        <FaEnvelope />
        <p>hello@yay.com</p>
      </Col>

      <Col>
        <FaPhone />
        <p>123 456 7890</p>
      </Col>

      <Col>
        <FaMapMarkerAlt />
        <div>
          <p>123 Some street</p>
          <p>Somewhere</p>
          <p>Some City</p>
          <p>10000</p>
        </div>
      </Col>
    </Container>
  );
}

export default ContentContactInfo;

// className="contactInfo-col d-grid"
