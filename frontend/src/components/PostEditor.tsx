import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules/index";
import { useHistory } from "react-router-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";
import axios from "axios";
import "./PostEditor.css";

function PostEditor() {
  const isLogin = useSelector((state: RootState) => state.LoginInfo.authenticated);
  const [categorylist, setCategorylist] = useState([{ name: "" }]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (!isLogin) {
      alert("로그인 필요");
      history.push("/login");
    }
    const getCategorylist = async () => {
      const result = await axios.get(`http://${process.env.REACT_APP_DOMAIN}/category`);

      setCategorylist(result.data.category);
      //setCategory(result.data.category[0].name);
    };

    getCategorylist();
  }, []);

  const onCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const onBtnClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(category);
    const result = await axios.post(`http://${process.env.REACT_APP_DOMAIN}/upload`, { category: category, title: title, content: content });

    if (!result.data.authenticated) {
      alert("로그인 필요");
      history.push("/login");
    } else {
      alert("업로드 성공");
      history.goBack();
    }
  };
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <h5>Category</h5>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control as="select" onChange={onCategoryChange}>
            {categorylist.map((item: { name: string }) => {
              return <option key={item.name}>{item.name}</option>;
            })}
          </Form.Control>
        </Form.Group>
      </Form>
      <h5>Title</h5>
      <InputGroup className="mb-3">
        <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={onTitleChange} value={title} />
      </InputGroup>
      <h5>Content</h5>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        // onInit={(editor: any) => {
        //   // You can store the "editor" and use when it is needed.
        //   console.log("Editor is ready to use!", editor);
        // }}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          setContent(data);
        }}
        // onBlur={(event: any, editor: any) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event: any, editor: any) => {
        //   console.log("Focus.", editor);
        // }}
      />
      <Button className="btn btn-light" onClick={onBtnClick}>
        Submit
      </Button>
    </div>
  );
}

export default PostEditor;
