import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import './styles/style.scss'

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
root.render(<App/>);
