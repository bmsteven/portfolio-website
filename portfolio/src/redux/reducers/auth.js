// import { DARK_MODE, LIGHT_MODE } from "../types";

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
