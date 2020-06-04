import axios from "axios";
import {
  DARK_MODE,
  LIGHT_MODE,
  SET_LOADING,
  STOP_LOADING,
  POSTS_LOADED,
  POSTS_NOT_LOADED,
  SUCCESS_MESSAGE,
} from "../types";

export const useDarkMode = () => (dispatch) => {
  dispatch({ type: DARK_MODE });
};

export const useLightMode = () => (dispatch) => {
  dispatch({ type: LIGHT_MODE });
};

export const createPost = (post) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
  axios
    .post("/create-post", post)
    .then((res) => {
      dispatch({
        type: STOP_LOADING,
      });
      dispatch({
        type: SUCCESS_MESSAGE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: STOP_LOADING,
        payload: err.response.data,
      });
    });
};

export const getPosts = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .get("/posts")
    .then((res) => {
      dispatch({
        type: POSTS_LOADED,
        payload: res.data,
      });
      // console.log(res.data);
      dispatch({
        type: STOP_LOADING,
      });
    })
    .catch((err) => {
      // let errors = err.response.data
      console.log(err);
      dispatch({
        type: POSTS_NOT_LOADED,
      });
      dispatch({
        type: STOP_LOADING,
      });
    });
};
