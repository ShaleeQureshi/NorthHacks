import React from "react";
import "./scripts/firebase/config";
import ReactDOM from "react-dom";
import App from "./scripts/App";

// Importing styles
import "./styles/fonts.css";
import "./styles/text.scss";
import "./styles/spacing.css";
import "./styles/main.scss";
import "./styles/responsive.scss";

ReactDOM.render(<App />, document.getElementById("root"));
