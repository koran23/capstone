import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPhotos } from "../../store/gallery";
import { fetchAllComments } from "../../store/posts";

const CommentSection = styled.div`
.delete-comment {
  font-size: 15px;
  border: none;
  background-color: white;
}

.delete-comment:hover {
  opacity: 0.6;
}

.comment-body-and-delete {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 210px;

  span {
    margin-right: 5px;
  }

  p {
    max-width: 180px;
  }
}

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

export default function CommentFormItem({username, userId, comment, selectedImg}) {
  const dispatch = useDispatch();

  const loggedInUser = useSelector((store) => store.session.user);

  console.log(userId)

    const deleteCommentButton = () => {
      const deleteButton = <button className="delete-comment">
      <i className="fa fa-times"
      // onClick={deleteComment()}
      aria-hidden="true"></i></button>;
      if (loggedInUser.id === userId){
        return deleteButton;
      }
    }

  return (
      <CommentSection>
    <div>
      <div className="comments-section">
        <div className="comment-owner-body">
          {/* <Link to={`/users/${comment.owner_id}/photos`}>
            {comment.username}
          </Link> */}
          <div className="comment-body-and-delete">
            <p>{comment}</p>
            <span>{deleteCommentButton()}</span>
          </div>
        </div>
        {/* <span>{comment.created} ago</span> */}
      </div>
    </div>
    </CommentSection>
  );
}