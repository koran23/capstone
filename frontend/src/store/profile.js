import { fetch } from "./csrf";

const GET_PROFILE = "profile/GET_PROFILE";
const CREATE_PROFILE = "profile/CREATE_PROFILE";
const CREATE_SOCIAL = "profile/CREATE_SOCIAL";
const REMOVE_PROFILE = "profile/REMOVE_PROFILE";


//Action Creators
const getProfile = (profile) => ({
  type: GET_PROFILE,
  profile: profile
});
const setProfile = (profilePic) => ({
  type: CREATE_PROFILE,
  profilePic: profilePic
});
const setSocial = (social) => ({
  type: CREATE_SOCIAL,
  social: social
});
const removeProfile = (profile) => ({
  type: REMOVE_PROFILE,
  profile: profile
});

//Thunk Action Crreators

export const getCurrentProfile = (userId) => async (dispatch) => {
  const res = await fetch(`/api/profile/me/${userId}`);
  // const venues = await res.json();
// debugger
  if (!res.data.profile) {
    dispatch(removeProfile());
  } 
    dispatch(getProfile(res.data.profile));
  
};
export const deleteCurrentProfile = (userId) => async (dispatch) => {
  const res = await fetch(`/api/profile/me/${userId}`);
  // const venues = await res.json();
// debugger
    dispatch(removeProfile());
  
  
};
export const editProfile = (profilePic) => async (dispatch) => {
    const { image, userId, twitter, linkedin, facebook, instagram } = profilePic;
  const formData = new FormData();

  // for single file
 if (image) formData.append("image", image);
 formData.append("twitter", twitter);
 formData.append("linkedin", linkedin);
 formData.append("facebook", facebook);
 formData.append("instagram", instagram);

  const res = await fetch(`/api/profile/${userId}`, {
    method: "PUT",
    headers: {"Content-Type": "multipart/form-data"},
    body: formData,
  });

  dispatch(setProfile(res.data.profilePic));
};

// export const editSocial = (social) => async (dispatch) => {
//     const { facebook, twitter, linkden, instagram, userId } = social;

//   // for single file

//   const res = await fetch(`/api/profile/social/${userId}`, {
//     method: "PUT",
//     //  headers: {
//     //   "Content-Type": "application/json",
//     // },
//     body: JSON.stringify(social),
//   });

//   dispatch(setSocial(res.data.social));
// };

export const createProfile = (body) => async (dispatch) => {
  const res = await fetch(`/api/profile/`, {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify(body),
  });
  // const venues = await res.json();

  if (res.ok) {
    dispatch(setProfile(res.data.profile));
  }
};

const initialState = {
  profile: null,
  profilePic: null,
  social: null
};

//Reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case CREATE_PROFILE:
      return { ...state, profilePic: action.payload };
    case CREATE_SOCIAL:
      return { ...state, social: action.payload };
    case REMOVE_PROFILE:
      return {
        ...state,
        profile: null
      };
      default:
        return state;
    }
};

export default profileReducer;
