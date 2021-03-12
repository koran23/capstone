import React, { useState} from "react";
import styled from "styled-components";
import { createComment } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";

const Comment = styled.div`
  form .commentInput {
    display: flex;
    justify-content: space-between;
  }

  .commentInput__textarea {
    height: 100%;
    width: 100%;
    font-family: "Fira Sans", sans-serif;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    resize: none;
  }

  .commentInput__textarea:focus {
    outline: none;
  }

  .commentInput__btn {
    background-color: white;
    border: none;
  }
`;

export default function CommentInput({postId}) {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((store) => store.session.user);
  const [comm, setComm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    //  window.location.href = '/pic';

    const payload = {
      postId,
      userId: loggedInUser.id,
      comm,
    };
    console.log(payload);

    dispatch(createComment(payload));
    // history.push(`/gallery`);
  };



  return (
    <Comment>
      <div className="commentInput">
          <form onSubmit={onSubmit}>
        <textarea
        value={comm}
        onChange={(e) => setComm(e.target.value)}
          placeholder="Write a comment..."
          className="commentInput__textarea"
          rows="1"
        ></textarea>
        <button className="commentInput__btn">Post</button>
        </form>
      </div>
    </Comment>
  );
}
