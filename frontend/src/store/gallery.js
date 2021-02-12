import { fetch } from "./csrf";

const GET_GALLERY = "profile/GET_GALLERY";
const CREATE_GALLERY = "profile/CREATE_GALLERY";
const CREATE_COMMENT = "profile/CREATE_COMMENT";
const CREATE_LIKE = "profile/CREATE_LIKE";
const GET_COMMENTS = "profile/GET_COMMENTS";
const UNLOAD = "profile/UNLOAD";

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
const getComments = (comments) => ({
  type: GET_COMMENTS,
  comments: comments
})
export const unloadGallery = () => ({
  type: UNLOAD,
})


//Thunks
export const fetchAllPhotos = (id) => async (dispatch) => {
  const {userId} = id
  const res = await fetch(`/api/gallery/${userId}`);
  // const venues = await res.json();
  console.log(res.data.photos)

  if (res.ok) {
    dispatch(getGallery(res.data.photos));
  }
};
export const fetchAllDeliveredPhotos = (id) => async (dispatch) => {
  const {userId} = id
  const res = await fetch(`/api/gallery/delivered/${userId}`);
  // const venues = await res.json();
  console.log(res.data.photos)

  if (res.ok) {
    dispatch(getGallery(res.data.photos));
  }
};


export const fetchAllComments = (photoId) => async (dispatch) => {
  const res = await fetch(`/api/gallery/${photoId}/comments`);
  // const venues = await res.json();
  console.log(res.data.comments)

  if (res.ok) {
    dispatch(getComments(res.data.comments));
  }
};

export const createPhoto = (photo) => async (dispatch) => {
  const { image, userId, delivered } = photo;
  const formData = new FormData();

  // for single file
 if (image) formData.append("image", image);
formData.append("delivered", delivered);
formData.append("userId", userId);

  const res = await fetch(`/api/gallery/${userId}`, {
    method: "POST",
    headers: {"Content-Type": "multipart/form-data"},
    body: formData,
  });

  dispatch(setGallery(res.data.photo));
};

export const createComment = (comment) => async (dispatch) => {
  const { photoId, edit, userId } = comment;

  const res = await fetch(`/api/gallery/comments/${userId}`, {
    method: "POST",
    //  headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify(comment),

  });
  dispatch(setComment(res.data.comment));
};

export const likePhoto = (liked) => async (dispatch) => {
  const {photoId, like} = liked
  console.log(liked)
  const res = await fetch(`/api/gallery/like/`, {
    method: "PATCH",
    //  headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify(liked),

  });
  dispatch(setLike(res.data.liked));
};

const initialState = {
  photo: null,
  comment: null,
  comments: [],
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
     case GET_COMMENTS:
      newState = action.comments;
      return {...state,
        comments: newState};
    case CREATE_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    case CREATE_LIKE:
      return { ...state, like: action.payload };
    case UNLOAD:
      return { ...state, comments: []};
    default:
      return state;
  }
};

export default galleryReducer;
