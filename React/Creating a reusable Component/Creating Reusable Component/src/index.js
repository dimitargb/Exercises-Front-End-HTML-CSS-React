import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";

import StarRaiting from "./StarRaiting";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRaiting maxRaiting={5} />
    <StarRaiting size={24} color="green" className="test" />
  </React.StrictMode>
);
