import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Menubar from "./components/Menubar";
import Post from "./components/Post";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Router>
      <Container className="App">
        <Row className="justify-content-center">
          <Col>
            <Menubar />
            <Switch>
              <Route exact path="/">
                <Post />
              </Route>
              <Route path="/login">
                <LoginForm />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
