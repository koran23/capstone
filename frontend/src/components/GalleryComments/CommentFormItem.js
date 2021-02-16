import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../store/gallery";
import { fetchAllComments } from "../../store/gallery";

const CommentSection = styled.div`
  .delete-comment {
    font-size: 10px;
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
`;

export default function CommentFormItem({
  username,
  userId,
  comment,
  selectedImg,
}) {
  const dispatch = useDispatch();
  console.log();
  const loggedInUser = useSelector((store) => store.session.user);

  const removeComment = (e) => {
    e.preventDefault();
    const payload = {
      comment,
      userId: userId,
    };
    dispatch(deleteComment(payload));
    dispatch(fetchAllComments(selectedImg.id));
  };

  const deleteCommentButton = () => {
    const deleteButton = (
      <button className="delete-comment">
        <i
          className="fa fa-times"
          onClick={removeComment}
          aria-hidden="true"
        ></i>
      </button>
    );
    if (loggedInUser.id === userId) {
      return deleteButton;
    }
  };

  useEffect(() => {
    dispatch(fetchAllComments(selectedImg.id));
  }, []);

  return (
    <CommentSection>
      <div>
        <div className="comments-section">
          <div className="comment-owner-body">
            {/* <div >
            {loggedInUser.username}
          </div> */}
            <div className="comment-body-and-delete">
              <p>{comment}</p>
              <span>{deleteCommentButton()}</span>
            </div>
          </div>
          {/* <span>{comment.createdAt} ago</span> */}
        </div>
      </div>
    </CommentSection>
  );
}
