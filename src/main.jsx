import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import styles from "/home/rex/repos/climate-changed/src/main.module.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router className={styles} />
  </React.StrictMode>
);
