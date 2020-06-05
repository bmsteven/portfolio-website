import {
  POSTS_LOADED,
  POSTS_NOT_LOADED,
  POST_LOADED,
  POST_NOT_LOADED,
  LOADING_DATA,
  POST_CREATED,
  POST_CREATION_FAILED
} from "../types";

const initialState = {
  posts: null,
  post: null,
  loading: null,
  message: null,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case POSTS_LOADED:
      return {
        ...state,
        posts: payload,
        loading: false,
      };

    case POSTS_NOT_LOADED:
      return {
        ...state,
        posts: null,
        loading: false,
        error: payload,
      };
    case POST_LOADED:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case POST_NOT_LOADED:
      return {
        ...state,
        post: null,
        loading: false,
        error: payload,
      };
    case POST_CREATED:
      return {
        ...state,
        loading: false,
        message: payload
      }
    case POST_CREATION_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
