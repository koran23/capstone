import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../store/gallery";
import { likePhoto, fetchAllComments } from "../../store/gallery";
import CommentFormItem from '../../components/GalleryComments/CommentFormItem'
import { useHistory } from "react-router-dom";
import Button from '../../styles/Button'

const Comments = styled.div`
  .comment-like {
    display: flex;

    flex-direction: column;
    width: 310px;
    padding-top: 10px;
    margin-left: 15px;
    margin-right: 10px;

    h2,
    h3 {
      text-align: center;
      margin: 3px;
    }

    h2 {
      font-size: 25px;
    }

    h3 {
      border-bottom: 1px solid gray;
      // margin-bottom: 7px;
      padding: 5px;
    }
  }

  .comment-form-container {
    display: flex;
    flex-direction: column;
    color: gray;
    font-family: "Barlow Semi Condensed";
     /* position: absolute; */
     /* width: 91%; */
     /* height: 430px; */
     /* top: 70%; */
     /* left: 46%; */
     /* -webkit-transform: translate(-50%, -50%); */
    background-color: white;
    // border: 1px solid gray;
    border-radius: 5px;
  }

  .comments-scroll {
    overflow: auto;
    width: 315px;
    max-height: 130px;
    margin-left: 5px;
  }

  @media only screen and (min-width: 1400px) and (min-height: 800px) {
    .comments-scroll {
      overflow: auto;
      width: 315px;
      max-height: 280px;
      margin-left: 5px;
    }
  }

  .comment-div {
    display: flex;
    flex-direction: column;
    align-items: left;
    // position: fixed;
    top: 10px;
    // padding-top: 15px;
    width: 100%;
    margin-left: 5px;

    input[type="submit"] {
      /* background-color: gray; */
      font-size: 15px;
      // margin-top: 15px;
      border-radius: 5px;
      padding: 6px 6px 6px 6px;
      color: white;
    }

    input[type="text"] {
      background-color: white;
      font-size: 15px;
      // border: 1px solid gray;
      padding: 6px 6px 6px 6px;
      width: 280px;
      border: none;
      border-top: 0.1px solid lightgray;
      margin-top: 5px;
    }

    input[type="submit"]:hover {
      background-color: #a3a4a3;
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

  .like-button {
    text-shadow: 0px 0px 1px red, 0px 0px 1px red;
    font-size: 18px;
    width: 7%;
    margin-top: 10px;
    margin-left: 10px;
    left: 10%;
    border: none;
    color: white;
    background-color: white;
    // color: white;
  }
  .like-button-liked {
    text-shadow: 0px 0px 1px red, 0px 0px 1px red;
    font-size: 18px;
    width: 7%;
    margin-top: 10px;
    margin-left: 10px;
    left: 10%;
    border: none;
    color: red;
    background-color: white;
    // color: white;
  }

  .comment-username {
    margin-left: 7px;
    color: black;
  }

  .comment-username:hover {
    opacity: 0.6;
  }

  .delete-comment {
    font-size: 10px;
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


`;

const Comment = () => {
    const comments = useSelector((store) => store.gallery.comments);
    const loggedInUser = useSelector((store) => store.session.user);
    
    return (
      <div>{comments.length ? (
          comments.map((comment) => {
            if (comment) return (
            <CommentFormItem username={loggedInUser.username} userId={comment.userId} comment={comment.comment} />
          )})
        ) : (
          <></>
        )}</div>     
    )
  }

export default function CommentForm({ selectedImg }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [edit, setEdit] = useState("");
  const [like, setLike] = useState(true);
  const loggedInUser = useSelector((store) => store.session.user);
  let likeButtonText = <i className="fa fa-heart like-button" aria-hidden="true"></i>;

// const currentComments = [selectedImg]

const download = () => {
    const element = document.createElement("a");

    element.click();
  };

  const onSubmit = (e) => {
    e.preventDefault();
  
    const payload = {
      photoId: selectedImg.id,
      userId: loggedInUser.id,
      edit,
    };
    
    dispatch(createComment(payload));
    dispatch(fetchAllComments(selectedImg.id));
    // history.push(`/gallery`);
  };

  const onClick = (e) => {
    e.preventDefault()
    history.push('/create-post')
  }


  const onLike = (e) => {
    e.preventDefault();
    setLike(!like)
    const setLikedImg = () => selectedImg.like = like
    setLikedImg()

     const payload = {
    photoId: selectedImg.id,
    userId: loggedInUser.id,
    like
  };
    dispatch(likePhoto(payload));
  }
  
  useEffect(() => {

  }, [like]);


    useEffect(() => {

    dispatch(fetchAllComments(selectedImg.id));
  }, [dispatch, selectedImg.id]);

  

   if (selectedImg.like == true) {
       likeButtonText = <i className="fa fa-heart like-button-liked" aria-hidden="true"></i>;
    } 

  return (
    <Comments>
      {selectedImg.delivered == false ? 
      <div>
        <div className="comment-like">
          {/* <h2 className="h2-comment"> {photo.title} </h2> */}
          <h3>
            Segen Shoots
            {/* <Link
            to={`/users/${photo.owner_id}/photos`}
            className="comment-username"
          >
            {photo.username}
          </Link> */}
          </h3>
          <button onClick={onLike} value={like} className="like-button">{likeButtonText}</button>
          {/* {this.renderLikes()} */}
          <div className="comment-form-container">
            <form className="comment-form" onSubmit={onSubmit}>
              <div className='comments-scroll'>
                <Comment/>              
                </div>
              <div className="comment-div">
                <input
                  type="text"
                  value={edit}
                  onChange={(e) => setEdit(e.target.value)}
                  // value={this.state.body}
                  // onChange={this.handleInput("body")}
                  placeholder="Edit requests..."
                />
                <br />
              </div>         
            </form>
            {/* <CreatePost selectedImg={selectedImg}/> */}
          </div>
        </div>
      </div>
: <div>
        <div className="comment-like">
          <h3>
            Segen Shoots
          </h3>
          <div className="comment-form-container">
            <form className="comment-form" onSubmit={onSubmit}>
              <div className="comment-div">
                <br />
              </div>         
            </form>
            <Button onClick={onClick}>post this photo</Button>
            <a
        href={selectedImg.url}
        download
        onClick={() => download()}
      >
        <Button >
        download
        </Button>
      </a>
          </div>
        </div>
      </div>}
    </Comments>
  );
}
