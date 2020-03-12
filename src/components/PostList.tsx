import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules/index";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";
import { removeSession } from "../modules/session";

interface post {
  id: number;
  title: string;
  author: string;
  createdAt: string;
}

function PostList() {
  const [posts, setPosts] = useState([]);
  const session = useSelector((state: RootState) => state.session);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const getPosts = async () => {
      console.log(session);
      const result = await axios.get("http://localhost:8080/", { headers: session });
      if (!result.data.authenticated) {
        dispatch(removeSession());

        alert(result.data.msg);
        history.push("/login");
      } else {
        setPosts(result.data.postlist);
      }
    };

    getPosts();
  }, []);

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post: post) => {
          return (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </td>
              <td>{post.author}</td>
              <td>{post.createdAt}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default PostList;
