import { fetch } from "./csrf";

const GET_POSTS = "profile/GET_POSTS";
const CREATE_POST = "profile/CREATE_POST";

//Action Creators
const getPosts = (post) => ({
  type: GET_POSTS,
  post: post,
});
const setPost = (post) => ({
  type: CREATE_POST,
  post: post,
});

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

const initialState = {
  post: null,
};

//Reducer
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, post: action.payload };
    default:
      return state;
  }
};

export default postReducer;
