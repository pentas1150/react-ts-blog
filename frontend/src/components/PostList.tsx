import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { removeInfo } from "../modules/LoginInfo";
import "./link.css";

interface post {
  id: number;
  title: string;
  author: string;
  createdAt: string;
}

function PostList() {
  const [posts, setPosts] = useState([]);
  const { name } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const getPosts = async () => {
      let requestPath = `http://${process.env.REACT_APP_DOMAIN}/`;
      if (name) {
        requestPath += `category/${name}`;
      }

      const result = await axios.get(requestPath);
      if (!result.data.authenticated) {
        dispatch(removeInfo());

        alert(result.data.msg);
        history.push("/login");
      } else {
        setPosts(result.data.postlist);
      }
    };

    getPosts();
  }, [name]);

  return (
    <div>
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
                  <Link className="text-link" to={`/post/${post.id}`}>
                    {post.title}
                  </Link>
                </td>
                <td>{post.author}</td>
                <td>{post.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button className="btn btn-light">
        <Link className="text-link" to="/upload">
          Write
        </Link>
      </Button>
    </div>
  );
}

export default PostList;
