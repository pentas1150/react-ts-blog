import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Menubar from "./components/Menubar";
import PostList from "./components/PostList";
import Post from "./components/Post";
import PostEditor from "./components/PostEditor";
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
                <PostList />
              </Route>
              <Route path="/login">
                <LoginForm />
              </Route>
              <Route path="/upload">
                <PostEditor />
              </Route>
              <Route path="/post/:postId">
                <Post />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
