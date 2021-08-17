import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history"
import UiProvider from "context/context"
import Loader from "./components/loader/Loader"

import App from "./App"

const hist = createBrowserHistory()
const rootElement = document.getElementById("app")

ReactDOM.render(
  <UiProvider>
    <Suspense fallback={<Loader />}>
      <Router history={hist}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </Suspense>
  </UiProvider>,
  rootElement
)
