import { fetch } from "./csrf";

const GET_PROFILE = "profile/GET_PROFILE";
const CREATE_PROFILE = "profile/CREATE_PROFILE";
const REMOVE_PROFILE = "profile/REMOVE_PROFILE";


//Action Creators
const getProfile = (profile) => ({
  type: GET_PROFILE,
  profile: profile
});
const setProfile = (profile) => ({
  type: CREATE_PROFILE,
  profile: profile
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
export const editProfile = (userId, payload) => async (dispatch) => {
  const res = await fetch(`/api/profile/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  // const venues = await res.json();

  if (res.ok) {
    const profile = await res.json
    dispatch(setProfile(profile));
    return profile;
  }
};

export const createProfile = (body) => async (dispatch) => {
  const res = await fetch(`/api/profile/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  // const venues = await res.json();

  if (res.ok) {
    dispatch(setProfile(res.data.profile));
  }
};

const initialState = {
  profile: null,
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
      return {
        ...state,
        profile: action.profile,
      };
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
