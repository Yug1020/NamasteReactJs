import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1", 
    { id: "heading1" }, 
    "Namaste ReactJs 🚀"
);

const jsxheader = (<h1 className="heading2" tabIndex = "1">Namaste ReactJs By JSX🚀</h1>)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheader);
// root.render(heading);
