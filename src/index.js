import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StateContext } from "./context/state";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("celer"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContext>
        <App />
      </StateContext>
    </BrowserRouter>
  </React.StrictMode>
);
