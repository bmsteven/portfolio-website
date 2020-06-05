import {
  POSTS_LOADED,
  POSTS_NOT_LOADED,
  POST_LOADED,
  POST_NOT_LOADED,
} from "../types";

const initialState = {
  posts: null,
  post: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case POSTS_LOADED:
      return {
        ...state,
        posts: payload,
      };

    case POSTS_NOT_LOADED:
      return {
        ...state,
        posts: null,
      };
    case POST_LOADED:
      return {
        ...state,
        post: payload,
      };
    case POST_NOT_LOADED:
      return {
        ...state,
        post: null,
      };
    default:
      return state;
  }
}
