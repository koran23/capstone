import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommentInput from "../../components/CommandInput";
import { fetchAllPosts } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";

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

const dispatch = useDispatch();

 const currentPosts = useSelector((fullReduxState) => {
    return fullReduxState.post.post
  });

  console.log(currentPosts)

  const loggedInUser = useSelector((store) => store.session.user);

  

  const Post = ({thePost}) => {
    return (
      <PostStyle>
      <div className="post">
        <div className="post__header">
          <div className="post__headerLeft">
            <img className="post__profilePic" src={thePost.picture} />
            <p style={{ marginLeft: "8px" }}>{User.username}</p>
          </div>
          <button className="post__delete">delete</button>
        </div>
        <div className="post__center">
          <img className="post__photoUrl" src={thePost.picture} />
        </div>

        <div>
          <p>
            <span style={{ fontWeight: "500", marginRight: "4px" }}>
              {User.username}
            </span>
            {thePost.caption}
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
        <CommentInput postId={thePost.id}/>
        {/* {Comments ? (
          Comments.map((comment) => (
            <Comment username={User.username} caption={comment.comment} />
          ))
        ) : (
          <></>
        )} */}
      </div>
    </PostStyle>
    )
  }
 
  useEffect(async () => {
    // Request to the server.
    // const response = await fetch("/api/bands");
    // setBands(response.data.bands);
    dispatch(fetchAllPosts());
  }, []);

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
     <div>
      <br></br>
      {!currentPosts && <h3>Loading...</h3>}
      {currentPosts &&
        currentPosts.map((post) => {
          return <Post thePost={post} />
        })}
    </div>
  );
}
