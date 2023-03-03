import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ContentCard(props) {
  return (
    <Card>
      <Card.Img variant="top" className="cardImg" src={props.img} />
      <Card.Body>
        <Card.Title>Nunc porttitor vel</Card.Title>
        <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
        <div className="d-grid">
          <Button className="text-white" variant="primary">
            More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ContentCard;
