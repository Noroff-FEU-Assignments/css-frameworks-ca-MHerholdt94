import React from "react";
import Container from "react-bootstrap/Container";
import ContentButtonGroup from "./ContentButtonGroup";
import ContentCards from "./ContentCards";

function News() {
  return (
    <Container className="px-4">
      <h1>News</h1>
      <ContentButtonGroup />
      <ContentCards />
      <ContentButtonGroup />
    </Container>
  );
}

export default News;
