import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function ContentForm() {
  return (
    <Form className="contactForm bg-light">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Website</Form.Label>
        <InputGroup>
          <InputGroup.Text>https://</InputGroup.Text>
          <Form.Control type="text" />
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={8} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="Allow us to sell your personal details to whomever we want"
        />
      </Form.Group>

      <div className="d-grid">
        <Button
          className="text-white rounded-1"
          variant="secondary"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default ContentForm;
