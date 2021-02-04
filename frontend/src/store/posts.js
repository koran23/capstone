import { fetch } from "./csrf";

const GET_POSTS = "profile/GET_POSTS";
const CREATE_POST = "profile/CREATE_POST";
const CREATE_COMMENT = "profile/CREATE_COMMENT";

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

export const fetchAllPosts = () => async (dispatch) => {
  const res = await fetch(`/api/posts`);
  // const venues = await res.json();
  console.log(res.data.posts)

  if (res.ok) {
    dispatch(getPosts(res.data.posts));
  }
};

//Thunks
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

const initialState = {
  post: null,
};

//Reducer
const postReducer = (state = initialState, action) => {
   let newState;
  switch (action.type) {
    case CREATE_POST:
      return { ...state, post: action.payload };
    case CREATE_COMMENT:
      return { ...state, comment: action.payload };
    case GET_POSTS:
      newState = action.post;
      return {...initialState,
        post: newState};
    default:
      return state;
  }
};

export default postReducer;
