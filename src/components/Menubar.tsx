import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Button, Form } from "react-bootstrap";

function Menubar() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Link to="/">
        <Navbar.Brand>Pentas Blog</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Menu1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Menu2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Menu3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Menu4</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Link to="/login">
            <Button variant="secondary">{isLogin ? "Logout" : "Login"}</Button>
          </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menubar;
