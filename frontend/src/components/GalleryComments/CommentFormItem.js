import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const CommentSection = styled.div`
.comment-owner-body {
  display: flex;
  flex-direction: row;
  width: 300px;

  a {
    margin-right: 6px;
    font-weight: bold;
    color: black;
  }
  a:hover {
    opacity: 0.6;
    cursor: pointer;
  }
}

.comments-section {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 230px;

  span {
    font-size: 12px;
    margin-bottom: 5px;

    p {
      left: 100%;
      text-align: left;
      margin-bottom: 5px;
    }
  }
}
`

export default function CommentFormItem() {
  return (
      <CommentSection>
    <div>
      <div className="comments-section">
        <div className="comment-owner-body">
          {/* <Link to={`/users/${comment.owner_id}/photos`}>
            {comment.username}
          </Link> */}
          <div className="comment-body-and-delete">
            {/* <p>{comment.body}</p> */}
            {/* <span>{this.deleteCommentButton()}</span> */}
          </div>
        </div>
        {/* <span>{comment.created} ago</span> */}
      </div>
    </div>
    </CommentSection>
  );
}