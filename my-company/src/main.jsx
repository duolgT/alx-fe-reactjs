import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // ✅ FIXED: removed the dot

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App.jsx />
  </React.StrictMode>
);
