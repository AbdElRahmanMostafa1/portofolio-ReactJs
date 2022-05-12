import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
disableReactDevTools();
