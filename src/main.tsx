import ReactDOM from "react-dom/client";
import { StrictMode, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import UiProvider from "./context/context";
import ModalProvider from "./context/modal";
import Loader from "./components/loader/Loader";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("app")!).render(
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
