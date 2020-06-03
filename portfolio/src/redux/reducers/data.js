import { POSTS_LOADED, POSTS_NOT_LOADED } from "../types";

const initialState = {
  posts: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case POSTS_LOADED:
      return {
        posts: payload,
      };

    case POSTS_NOT_LOADED:
      return {
        posts: null,
      };
    default:
      return state;
  }
}
