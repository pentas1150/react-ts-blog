import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

interface post {
  id: number;
  title: string;
  author: string;
}

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postlist = await axios.get("http://localhost:8080/");

      setPosts(postlist.data);
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
        </tr>
      </thead>
      <tbody>
        {posts.map((post: post) => {
          return (
            <tr>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.author}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Post;
