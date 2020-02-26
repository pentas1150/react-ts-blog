import React from "react";
import { Form, Button } from "react-bootstrap";

function LoginForm() {
  return (
    <Form>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="outline-secondary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
