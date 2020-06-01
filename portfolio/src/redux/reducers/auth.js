import { LOGIN_SUCCESS, LOGIN_FAIL, SET_UNAUTHENTICATED } from "../types";

const initialState = {
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case SET_UNAUTHENTICATED:
      return {
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
      };
    case LOGIN_FAIL: {
      return {
        isAuthenticated: false,
      };
    }
    default:
      return state;
  }
}
