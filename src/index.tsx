import { Suspense, StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import UiProvider from "./context/context";
import ModalProvider from "./context/modal";
import Loader from "./components/loader/Loader";

import App from "./App";

// @ts-ignore
ReactDOM.createRoot(document.getElementById("app")).render(
  <StrictMode>
    <UiProvider>
      <ModalProvider>
        <Suspense fallback={<Loader />}>
          <Router>
            <StrictMode>
              <App />
            </StrictMode>
          </Router>
        </Suspense>
      </ModalProvider>
    </UiProvider>
  </StrictMode>
);
