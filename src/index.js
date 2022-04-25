import React from "react";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./store/AuthContext";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
