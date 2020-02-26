import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function Menubar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Pentas Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link> */}
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Menu1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Menu2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Menu3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Menu4</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menubar;
