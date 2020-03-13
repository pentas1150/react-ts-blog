import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules/index";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";
import { removeInfo } from "../modules/LoginInfo";

function Post() {
  const [post, setPost] = useState({ title: "", content: "" });
  const { postId } = useParams();
  const session = useSelector((state: RootState) => state.LoginInfo.session);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const getPost = async () => {
      const result = await axios.get(`http://192.168.0.10:8080/post/${postId}`, { headers: session });
      if (!result.data.authenticated) {
        dispatch(removeInfo());

        alert(result.data.msg);
        return history.push("/login");
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
