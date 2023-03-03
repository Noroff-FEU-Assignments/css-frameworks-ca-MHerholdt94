import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Heading() {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav defaultActiveKey="/" className="me-auto">
            <Nav.Item>
              <NavLink to="/">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/news">News</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/contact">Contact</NavLink>
            </Nav.Item>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="search"
              className="border-0"
            ></Form.Control>
            <Button className="border-0 text-white">Go</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

const link = document.querySelectorAll(".navLink");

link.forEach(function () {
  link.addEventListener("click", console.log("hello"));
});

export default Heading;
