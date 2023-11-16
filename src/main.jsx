import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ElectionProvider } from "./context/election.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ElectionProvider>
      <App />
    </ElectionProvider>
  </React.StrictMode>,
);
