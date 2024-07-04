import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RifasApp } from "./RifasApp";
import { AuthProvider } from "./config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <RifasApp />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
