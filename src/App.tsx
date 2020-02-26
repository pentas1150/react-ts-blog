import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Menubar from "./components/Menubar";
import Post from "./components/Post";

function App() {
  return (
    <Container className="App">
      <Row className="justify-content-center">
        <Col>
          <Menubar />
          <Post />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
