import React from "react";
import styled from "styled-components";
import CommentInput from "../../components/CommandInput";
import Comment from "../../components/Comment";
import {Spring} from 'react-spring'

const PostStyle = styled.div`

  .post {
    background-color: ${(props) => props.theme.white};;
    max-width: 600px;
    width: 90vw;
    padding: 16px;
    border-radius: 20px;
  }

  .post__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .post__headerLeft {
    display: flex;
  }

  .post__profilePic {
     width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 16px;
  margin-right: 1rem;
  }

  .post__delete {
    border: none;
    background-color: white;
    cursor: pointer;
  }

  .post__delete:focus {
    outline: none;
  }

  .post__photoUrl {
    width: 100%;
    object-fit: cover;
    margin: 16px 0px;
  }
`;

export default function Post() {
  const image = {
    imgSource:
      "https://iso.500px.com/wp-content/uploads/2015/12/bwcover.jpg",
  };

  const User = {
    caption: "Yerrrr!",
    username: "Segen Shoots",
  };

  const Comments = {
    comment: "Hello",
  };

  return (
    <PostStyle>
      <div className="post">
        <div className="post__header">
          <div className="post__headerLeft">
            <img className="post__profilePic" src={image.imgSource} />
            <p style={{ marginLeft: "8px" }}>{User.username}</p>
          </div>
          <button className="post__delete">delete</button>
        </div>
        <div className="post__center">
          <img className="post__photoUrl" src={image.imgSource} />
        </div>

        <div>
          <p>
            <span style={{ fontWeight: "500", marginRight: "4px" }}>
              {User.username}
            </span>
            {User.caption}
          </p>
        </div>
        <div className="votes">
				<span className="angle_up">▲</span>
				<button
					className="votes_count"
					// onClick={() => product.updateCount(product.id)}
				>
					{/* {product.votes_count} */}
				</button>
			</div>
        <CommentInput/>
        {/* {Comments ? (
          Comments.map((comment) => (
            <Comment username={User.username} caption={comment.comment} />
          ))
        ) : (
          <></>
        )} */}
      </div>
    </PostStyle>
  );
}
