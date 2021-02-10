import { fetch } from "./csrf";

const GET_POSTS = "profile/GET_POSTS";
const CREATE_POST = "profile/CREATE_POST";
const CREATE_COMMENT = "profile/CREATE_COMMENT";
const CREATE_VOTE = "profile/CREATE_VOTE";
const GET_COMMENTS = "profile/GET_COMMENTS";

//Action Creators
const getPosts = (post) => ({
  type: GET_POSTS,
  post: post,
});
const setPost = (post) => ({
  type: CREATE_POST,
  post: post,
});
const setComment = (comment) => ({
  type: CREATE_COMMENT,
  comment: comment
})
const setVote = (vote) => ({
  type: CREATE_COMMENT,
  vote: vote
})
const getComments = (comment) => ({
  type: GET_COMMENTS,
  comment: comment
})



// Thunks
export const fetchAllPosts = () => async (dispatch) => {
  const res = await fetch(`/api/posts`);
  // const venues = await res.json();
  // console.log(res)
  if (res.ok) {
    
    dispatch(getPosts(res.data.posts));
  }
};

export const createPost = (post) => async (dispatch) => {
  const { image, caption, userId } = post;
  const formData = new FormData();
  formData.append('caption', caption)
  formData.append('userId', userId)

  console.log(userId)
  console.log(caption)
  // for single file
 if (image) formData.append("image", image);

  const res = await fetch(`/api/posts`, {
    method: "POST",
    // headers: {"Content-Type": "multipart/form-data"},
    body: formData,
  });

  dispatch(setPost(res.data.post));
};

export const createComment = (comment) => async (dispatch) => {
  const { comm, userId, postId } = comment;

  const res = await fetch(`/api/posts/comments/${userId}`, {
    method: "POST",
     headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),

  });
  dispatch(setComment(res.data.comment));
};
export const createVote = (upVote) => async (dispatch) => {
  const { vote, userId, postId } = upVote;

  const res = await fetch(`/api/posts/vote/${userId}`, {
    method: "PATCH",
     headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(upVote),

  });
  dispatch(setVote(res.data.upVote));
};

export const fetchAllComments = () => async (dispatch) => {
  const res = await fetch(`/api/posts/comments/`);
  // const venues = await res.json();
  console.log(res.data.comments)

  if (res.ok) {
    dispatch(getComments(res.data.comments));
  }
};

const initialState = {
  post: null,
  comment: null
};

//Reducer
const postReducer = (state = initialState, action) => {
   let newState;
  switch (action.type) {
    case CREATE_POST:
      return { ...state, post: action.payload };
    case CREATE_COMMENT:
      return { ...state, comment: action.payload };
    case CREATE_VOTE:
      return { ...state, vote: action.payload };
    case GET_POSTS:
      newState = action.post;
      return {...initialState,
        post: newState};
    case GET_COMMENTS:
      newState = action.comments;
      return {...initialState,
        comment: newState};
    default:
      return state;
  }
};

export default postReducer;
