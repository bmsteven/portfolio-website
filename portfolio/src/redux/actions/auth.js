import axios from "axios";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_LOADING,
  STOP_LOADING,
  SET_ERRORS,
  ClEAR_ERRORS,
  SET_UNAUTHENTICATED,
  LOADING_ADMIN,
  ADMIN_LOADED,
  AUTH_ERROR,
} from "../types";

export const getAdminDetails = () => (dispatch) => {
  dispatch({ type: LOADING_ADMIN });
  axios
    .get("/admin")
    .then((res) => {
      dispatch({
        type: ADMIN_LOADED,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
      });
      console.log(err);
    });
};

export const login = (user, history) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
  axios
    .post("/login", user)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch({
        type: ClEAR_ERRORS,
      });
      dispatch(getAdminDetails());
      dispatch({ type: STOP_LOADING });
      history.push(`/admin`);
    })
    .catch((err) => {
    let errors
    if(err) {
      errors = err.response.data
    } else {
      errors = "Unable to process, please check your internet connection and try again"
    }
      dispatch({
        type: LOGIN_FAIL,
        payload: errors,
      });
      dispatch({
        type: SET_ERRORS,
        payload: errors,
      });
      dispatch({ type: STOP_LOADING });
    });
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
