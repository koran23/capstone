import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

const CommSec = styled.div`
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

.delete-comment {
  font-size: 15px;
  border: none;
}

.delete-comment:hover {
  opacity: 0.6;
}

.comment-body-and-delete {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 210px;
  /* background-color: white; */

  span {
    margin-right: 5px;
  }

  p {
    max-width: 180px;
  }
}
`





export default function Comment({ id, username, caption }) {
  const loggedInUser = useSelector((store) => store.session.user);
  console.log(id);

  const deleteCommentButton = () => {
    const deleteButton = (
      <button className="delete-comment">
        <i
          className="fa fa-times"
          // onClick={deleteComment()}
          aria-hidden="true"
        ></i>
      </button>
    );
    if (loggedInUser.id === id) {
      return deleteButton;
    }
  };

  return (
    <CommSec>
    <div className="comment-owner-body">
      <div className="comment-body-and-delete">
      <p>
        <span style={{ fontWeight: "bold", marginRight: "4px" }}>
          {username}
        </span>
        {caption}
      </p>
      
      
        <span>{deleteCommentButton()}</span>
        </div>

    </div>
    </CommSec>
  );
}
