import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_UNAUTHENTICATED,
  ADMIN_LOADED,
  AUTH_ERROR,
} from "../types";

const initialState = {
  isAuthenticated: false,
  admin: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
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
    case ADMIN_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        admin: payload,
      };

    case AUTH_ERROR:
      return {
        ...state,
        // isAuthenticated: false,
        admin: null,
      };
    default:
      return state;
  }
}
