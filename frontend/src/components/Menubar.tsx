import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules/index";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button, Form } from "react-bootstrap";
import axios from "axios";
import "./link.css";

function Menubar() {
  const isLogin = useSelector((state: RootState) => state.LoginInfo.authenticated);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const result = await axios.get(`http://${process.env.REACT_APP_DOMAIN}/category`);

      setCategory(result.data.category);
    };

    getCategory();
  }, []);

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Link to="/">
        <Navbar.Brand>Pentas Blog</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Menu1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Menu2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Menu3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Menu4</NavDropdown.Item>
          </NavDropdown> */}
          {category.map((item: { name: string }) => {
            return (
              <Nav.Link key={item.name}>
                <Link className="text-link" to={`/category/${item.name}`}>
                  {item.name}
                </Link>
              </Nav.Link>
            );
          })}
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
