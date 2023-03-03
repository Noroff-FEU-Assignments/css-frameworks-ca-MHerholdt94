import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ContentCard from "./ContentCard";

function ContentCards() {
  return (
    <>
      <Row xs={1} sm={2} md={2} lg={4} className="g-4">
        <Col>
          <ContentCard img={require("../../images/news-1.jpg")} />
        </Col>
        <Col>
          <ContentCard img={require("../../images/news-2.jpg")} />
        </Col>
        <Col>
          <ContentCard img={require("../../images/news-3.jpg")} />
        </Col>
        <Col>
          <ContentCard img={require("../../images/news-4.jpg")} />
        </Col>
        <Col>
          <ContentCard img={require("../../images/news-5.jpg")} />
        </Col>
        <Col>
          <ContentCard img={require("../../images/news-6.jpg")} />
        </Col>
        <Col>
          <ContentCard img={require("../../images/news-7.jpg")} />
        </Col>
        <Col>
          <ContentCard img={require("../../images/news-8.jpg")} />
        </Col>
      </Row>
    </>
  );
}

export default ContentCards;
