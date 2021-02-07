import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommentInput from "../../components/CommandInput";
import { fetchAllPosts } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";
import Comment from '../../components/Comment/index'

const PostStyle = styled.div`

  .post {
    /* display: flex; */
    background-color: ${(props) => props.theme.white};;
    max-width: 400px;
    margin-bottom: 40px;
    width: 100vw;
    padding: 16px;
    border-radius: 30px;
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
    /* position: absolute; */
    width: 100%;
    object-fit: cover;
    margin: 16px 0px;
    border-radius: 30px;
  }
  .votes_count {
    border: none;
    background-color: white;
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
				<button
					className="votes_count"
					// onClick={() => product.updateCount(product.id)}
				>
          <span className="angle_up">▲</span>
					{/* {product.votes_count} */}
				</button>
			</div>
        <CommentInput postId={thePost.id}/>
        {thePost.Comments ? (
          thePost.Comments.map((comment) => (
            <Comment username={User.username} id={comment.userId} caption={comment.comment} />
          ))
        ) : (
          <></>
        )}
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


  const User = {
    caption: "Yerrrr!",
    username: "Segen Shoots",
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
