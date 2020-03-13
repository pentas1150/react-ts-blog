import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addInfo } from "../modules/LoginInfo";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChangeID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    const result = await axios.post("http://192.168.0.10:8080/login", { id: id, pw: pw });
    if (result.data.authenticated) {
      dispatch(addInfo(result.data.user));

      alert("로그인 성공");
      history.goBack();
    } else {
      alert("로그인 실패");
    }
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Group controlId="id">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={onChangeID} value={id} />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={onChangePW} value={pw} />
      </Form.Group>
      <Button variant="outline-secondary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
