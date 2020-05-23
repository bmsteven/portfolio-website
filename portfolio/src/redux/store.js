import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//reducers
import ui from "./reducers/ui";
import auth from "./reducers/auth";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  ui,
  auth
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
