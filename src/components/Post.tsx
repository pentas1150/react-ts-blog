import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules/index";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
import { removeSession } from "../modules/session";

function Post() {
  const [post, setPost] = useState({ title: "", content: "" });
  const { postId } = useParams();
  const session = useSelector((state: RootState) => state.session.session);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPost = async () => {
      const result = await axios.get(`http://localhost:8080/post/${postId}`, { headers: session });
      if (!result.data.authenticated) {
        dispatch(removeSession());

        alert(result.data.msg);
        return <Redirect to="/login" />;
      } else {
        setPost(result.data.post);
      }
    };

    getPost();
  }, []);

  return (
    <Table responsive>
      <thead>
        <th>{post.title}</th>
      </thead>
      <tr>
        <td>{post.content}</td>
      </tr>
    </Table>
  );
}

export default Post;
