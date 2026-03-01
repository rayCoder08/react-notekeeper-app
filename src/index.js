import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./../public/styles.css";

// Uses new React methods, found in React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
