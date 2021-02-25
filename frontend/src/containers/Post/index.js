import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAllPosts, createVote } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";


const PostStyle = styled.div`

  .post {
    /* display: flex; */
    background-color: ${(props) => props.theme.white};
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

const Posts = ({ thePost }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((store) => store.session.user);
  const [vote, setVote] = useState(1);

  // const onVote = (e) => {
  //   e.preventDefault();
  //   setVote(thePost.vote + 1);
  //   //  if (vote === 1) setVote((thePost.vote) - 1)

  //   const payload = {
  //     postId: thePost.id,
  //     userId: loggedInUser.id,
  //     vote,
  //   };
  //   dispatch(createVote(payload));
  // };

   const removePost = async (e) => {
    e.preventDefault();
    const payload = {
      id: thePost.id,
    };
    //  dispatch(deleteComment(payload));
    //  dispatch(fetchAllComments(selectedImg.id));
  };

    const deletePostButton = () => {
    const deleteButton = (
      <button className="post__delete" 
      onClick={removePost}
      >delete
      </button>
    );
    if (loggedInUser.id === thePost.userId) {
      return deleteButton;
    }
  };

  //  useEffect(async () => {
  //   // Request to the server.
  //   // const response = await fetch("/api/bands");
  //   // setBands(response.data.bands);
  //   const setVote = () => thePost.vote = thePost.vote + 1;
  //   setVote()
    
  // }, [vote]);


  return (
    <PostStyle>
      <div className="post">
        <div className="post__header">
          <div className="post__headerLeft">
            <img className="post__profilePic" src={thePost.profilePic} />
            <p style={{ marginLeft: "8px" }}>{thePost.username}</p>
          </div>
          {/* {deletePostButton()} */}
        </div>
        <div className="post__center">
          <img className="post__photoUrl" src={thePost.picture} />
        </div>

        <div>
          <p>
            <span style={{ fontWeight: "500", marginRight: "4px" }}>
              {thePost.username}
            </span>
            {thePost.caption}
          </p>
        </div>
        <div className="votes">
          <button
            // onClick={onVote}
            className="votes_count"
            // onClick={() => product.updateCount(product.id)}
          >
            <span className="angle_up">▲</span>
            {thePost.vote}
          </button>
        </div>
      </div>
    </PostStyle>
  );
};

export default function Post() {
  const dispatch = useDispatch();

  const currentPosts = useSelector((fullReduxState) => {
    return fullReduxState.post.post;
  });

  useEffect(async () => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <div>
      <br></br>
      {!currentPosts && <h3>Loading...</h3>}
      {currentPosts &&
        currentPosts.map((post) => {
          return <Posts thePost={post} />;
        })}
    </div>
  );
}
