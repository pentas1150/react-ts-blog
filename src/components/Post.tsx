import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";
import { removeInfo } from "../modules/LoginInfo";
import renderHTML from "react-render-html";

function Post() {
  const [post, setPost] = useState({ id: 0, title: "", content: "", author: "", createdAt: "" });
  const [commentAuthor, setCommentAuthor] = useState("");
  const [comment, setComment] = useState("");
  const { postId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const onChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  const onChangeCommentAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentAuthor(e.target.value);
  };
  const onSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(`${commentAuthor}: ${comment}`);

    setCommentAuthor("");
    setComment("");
  };

  useEffect(() => {
    const getPost = async () => {
      const result = await axios.get(`http://192.168.0.10:8080/post/${postId}`);
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
    <div>
      <h1 className="mt-4">{post.title}</h1>
      <p className="lead">by {post.author}</p>
      <hr />
      <p>Posted on {post.createdAt}</p>
      <hr />
      <div>{renderHTML(post.content)}</div>
      <hr />
      <Card>
        <Card.Header>
          <h5>Leave a Comment</h5>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={onSubmitComment}>
            <Form.Group controlId="comment-author">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onChange={onChangeCommentAuthor} value={commentAuthor} />
            </Form.Group>
            <Form.Group controlId="comment">
              <Form.Label>Comment</Form.Label>
              <Form.Control type="text" onChange={onChangeComment} value={comment} />
            </Form.Group>
            <Button type="submit" variant="secondary">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Post;
