import { DARK_MODE, LIGHT_MODE } from "../types";

const initialState = {
  darkMode: localStorage.getItem("darkMode")
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case LIGHT_MODE:
      localStorage.setItem("darkMode", false);
      return {
        darkMode: false
      };
    case DARK_MODE:
      localStorage.setItem("darkMode", true);
      return {
        darkMode: true
      };
    default:
      return state;
  }
}
