import axios from "axios";
import {
  DARK_MODE,
  LIGHT_MODE,
  LOADING_DATA,
  POSTS_LOADED,
  POSTS_NOT_LOADED,
  POST_LOADED,
  POST_NOT_LOADED,
  POST_CREATED,
  POST_CREATION_FAILED
} from "../types";

export const useDarkMode = () => (dispatch) => {
  dispatch({ type: DARK_MODE });
};

export const useLightMode = () => (dispatch) => {
  dispatch({ type: LIGHT_MODE });
};

export const getPosts = () => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/posts")
    .then((res) => {
      dispatch({
        type: POSTS_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: POSTS_NOT_LOADED,
        payload: err.response.data,
      });
    });
};

export const createPost = (post) => async (dispatch) => {
  dispatch({
    type: LOADING_DATA,
  });
  axios
    .post("/create-post", post)
    .then((res) => {
      dispatch({
        type: POST_CREATED,
        payload: res.data,
      });
      dispatch(getPosts())
    })
    .catch((err) => {
      dispatch({
        type: POST_CREATION_FAILED,
        payload: err.response.data,
      });
    });
};

export const getPost = (postId) => async (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/posts/${postId}`)
    .then((res) => {
      dispatch({
        type: POST_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_NOT_LOADED,
        payload: err.response.data,
      });
    });
};
