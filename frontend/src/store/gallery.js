import { fetch } from "./csrf";

const GET_GALLERY = "profile/GET_GALLERY";
const CREATE_GALLERY = "profile/CREATE_GALLERY";
const CREATE_COMMENT = "profile/CREATE_COMMENT";

//Action Creators
const getGallery = (photo) => ({
  type: GET_GALLERY,
  photo: photo,
});
const setGallery = (photo) => ({
  type: CREATE_GALLERY,
  photo: photo,
});
const setComment = (comment) => ({
  type: CREATE_COMMENT,
  comment: comment
})

//Thunks
export const createPhoto = (photo) => async (dispatch) => {
  const { image, userId } = photo;
  const formData = new FormData();

  // for single file
 if (image) formData.append("image", image);

  const res = await fetch(`/api/gallery/${userId}`, {
    method: "POST",
    // headers: {"Content-Type": "multipart/form-data"},
    body: formData,
  });

  dispatch(setGallery(res.data.photo));
};

export const createComment = (comment) => async (dispatch) => {
  const { edit, userId } = comment;

  const res = await fetch(`/api/gallery/comments/${userId}`, {
    method: "POST",
     headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),

  });
  dispatch(setComment(res.data.comment));
};

const initialState = {
  photo: null,
  comment: null,
};

//Reducer
const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GALLERY:
      return { ...state, photo: action.payload };
    case CREATE_COMMENT:
      return { ...state, comment: action.payload };
    default:
      return state;
  }
};

export default galleryReducer;
