import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BookProvider from "./context/Bookcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BookProvider>
);
