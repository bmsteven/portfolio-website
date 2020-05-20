import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";

const hist = createBrowserHistory();
const rootElement = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  rootElement
);
