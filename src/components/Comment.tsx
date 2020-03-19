import React from "react";
import { Media } from "react-bootstrap";

type CommentProps = {
  commenter: string;
  comment: string;
};

function Comment({ commenter, comment }: CommentProps) {
  return (
    <Media className="mb-4">
      <img width={50} height={50} className="mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
      <Media.Body>
        <h5>{commenter}</h5>
        <p>{comment}</p>
      </Media.Body>
    </Media>
  );
}

export default Comment;
