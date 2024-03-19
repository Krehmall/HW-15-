import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/Main.css";
import { AuthProvider } from "./providers/AuthProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);
