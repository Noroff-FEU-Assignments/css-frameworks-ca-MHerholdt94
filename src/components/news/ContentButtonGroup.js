import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ContentButtonGroup() {
  return (
    <ButtonGroup className="my-4">
      <Button variant="secondary" className="active">
        1
      </Button>
      <Button variant="secondary">2</Button>
      <Button variant="secondary">3</Button>
      <Button variant="secondary">4</Button>
    </ButtonGroup>
  );
}

export default ContentButtonGroup;
