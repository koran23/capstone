import { fetch } from "./csrf";

const GET_GALLERY = "profile/GET_GALLERY";
const CREATE_GALLERY = "profile/CREATE_GALLERY";

//Action Creators
const getGallery = (photo) => ({
  type: GET_GALLERY,
  photo: photo,
});
const setGallery = (photo) => ({
  type: CREATE_GALLERY,
  photo: photo,
});

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

const initialState = {
  photo: null,
};

//Reducer
const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GALLERY:
      return { ...state, photo: action.payload };
    default:
      return state;
  }
};

export default galleryReducer;
