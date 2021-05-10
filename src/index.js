import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import App from './App';
import "assets/scss/material-kit-react.scss?v=1.9.0";


var hist = createBrowserHistory();

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
