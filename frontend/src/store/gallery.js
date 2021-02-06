import { fetch } from "./csrf";

const GET_GALLERY = "profile/GET_GALLERY";
const CREATE_GALLERY = "profile/CREATE_GALLERY";
const CREATE_COMMENT = "profile/CREATE_COMMENT";
const CREATE_LIKE = "profile/CREATE_LIKE";

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
const setLike = (like) => ({
  type: CREATE_LIKE,
  like: like
})


//Thunks
export const fetchAllPhotos = (userId) => async (dispatch) => {
  const res = await fetch(`/api/gallery/${userId}`);
  // const venues = await res.json();
  console.log(res.data.photos)

  if (res.ok) {
    dispatch(getGallery(res.data.photos));
  }
};

export const fetchAllComments = (userId) => async (dispatch) => {
  const res = await fetch(`/api/gallery/${userId}`);
  // const venues = await res.json();
  console.log(res.data.photos)

  if (res.ok) {
    dispatch(getGallery(res.data.photos));
  }
};

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
  const { photoId, edit, userId } = comment;

  const res = await fetch(`/api/gallery/comments/${userId}`, {
    method: "POST",
     headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),

  });
  dispatch(setComment(res.data.comment));
};
export const likePhoto = (liked) => async (dispatch) => {
  const {photoId, like} = liked
  console.log(liked)
  const res = await fetch(`/api/gallery/like/`, {
    method: "PATCH",
     headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(liked),

  });
  dispatch(setLike(res.data.liked));
};

const initialState = {
  photo: null,
  comment: null,
  like: null,
};

//Reducer
const galleryReducer = (state = initialState, action) => {
   let newState;
  switch (action.type) {
    case CREATE_GALLERY:
      return { ...state, photo: action.payload };
     case GET_GALLERY:
      newState = action.photo;
      return {...initialState,
        photo: newState};
    case CREATE_COMMENT:
      return { ...state, comment: action.payload };
    case CREATE_LIKE:
      return { ...state, like: action.payload };
    default:
      return state;
  }
};

export default galleryReducer;
