import React from "react";
import styled from 'styled-components';

const Comments = styled.div`
.comment-like {
  display: flex;

  flex-direction: column;
  width: 310px;
  padding-top: 10px;
  margin-left: 15px;
  margin-right: 10px;

  h2, h3 {
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
  font-family: 'Barlow Semi Condensed';
  // position: absolute;
  // width: 91%;
  // height: 430px;
  // top: 70%;
  // left: 46%;
  // -webkit-transform: translate(-50%, -50%);
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
    border-top: .1px solid lightgray;
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

.comment-username {
  margin-left: 7px;
  color: black;
}

.comment-username:hover {
  opacity: 0.6;
}

.delete-comment {
  font-size: 15px;
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
`

export default function CommentForm() {

    let likeButtonText = <i className="fa fa-heart" aria-hidden="true"></i>;

  return (
      <Comments>
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
        <button className="like-button">{likeButtonText}</button>
        {/* {this.renderLikes()} */}
        <div className="comment-form-container">
          <form className="comment-form">
            {/* {this.renderComments()} */}
            <div className="comment-div">
              <input
                type="text"
                // value={this.state.body}
                // onChange={this.handleInput("body")}
                placeholder="Edit requests..."
              />
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
    </Comments>
  );
}
