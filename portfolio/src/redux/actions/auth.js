import axios from "axios";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_LOADING,
  STOP_LOADING,
  SET_ERRORS,
  ClEAR_ERRORS,
  SET_UNAUTHENTICATED,
} from "../types";

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
      dispatch({ type: STOP_LOADING });
      history.push(`/admin`);
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data,
      });
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
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
