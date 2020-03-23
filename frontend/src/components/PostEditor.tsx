import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules/index";
import { useHistory } from "react-router-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import "./PostEditor.css";
import "dotenv/config";

function PostEditor() {
  const isLogin = useSelector((state: RootState) => state.LoginInfo.authenticated);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (!isLogin) {
      alert("로그인 필요");
      history.push("/login");
    }
  }, []);

  const onBtnClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const result = await axios.post(`http://${process.env.DOMAIN}/upload`, { title: title, content: content });

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
