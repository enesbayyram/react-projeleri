import React from "react";
import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment key={comment.id} {...comment} />;
      })}
    </div>
  );
}

export default CommentList;
