import React from "react";
import Container from "react-bootstrap/Container";
import Paragraph from "./Paragraph";
import ContentCarousel from "./ContentCarousel";
import ContentTabs from "./ContentTabs";
import ContentAccordion from "./ContentAccordion";

function Home() {
  return (
    <>
      <ContentCarousel />
      <Container className="my-3 p-4">
        <Paragraph />
      </Container>
      <Container className="mb-3 p-4 d-none d-sm-block">
        <ContentTabs />
      </Container>
      <Container className="mb-3 p-4 d-sm-none">
        <ContentAccordion />
      </Container>{" "}
    </>
  );
}

export default Home;
