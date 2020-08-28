import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="green" variant="dark">
      <Navbar.Brand>JN</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Calendar</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
