// import { LOGIN_SUCCESS, LOGIN_FAIL } from "../types";

const initialState = {
  isAuthenticated: false
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}
