// PART 1
// const Heading = React.createElement("h1", {}, "Hello World by React.js");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(Heading) // you will see here that heading is an object

// root.render(Heading);



//either run above code or below code can not run both at a same time
//************************************************************************************************************************************* */



// PART 2

// make following structure using react

// div = parent
//     div = child1
//         h1
//         h2
//     div
//     div = child2
//         h1
//         h2
//     div
// div


import React from "react";
import ReactDOM from "react-dom/client";

import React from "react";
import ReactDOM from "react-dom/client";

const child1 = React.createElement("div", { id: "child1", key: "child1" }, [
  React.createElement("h1", { key: "h1-1" }, "I am h1 tag"),
  React.createElement("h2", { key: "h2-1" }, "I am h2 tag")
]);

const child2 = React.createElement("div", { id: "child2", key: "child2" }, [
  React.createElement("h1", { key: "h1-2" }, "I am h1 tag"),
  React.createElement("h2", { key: "h2-2" }, "I am h2 tag")
]);

const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



// import React from "react";
// import ReactDOM from "react-dom/client";

// const div = React.createElement(
//   "div", { id: "parent" }, [
//     React.createElement("div", { id: "child1" }, [
//       React.createElement("h1", {}, "I am h1 tag"),
//       React.createElement("h2", {}, "I am h2 tag")
//     ]),
//     React.createElement("div", { id: "child2" }, [
//       React.createElement("h1", {}, "I am h1 tag"),
//       React.createElement("h2", {}, "I am h2 tag")
//     ])
//   ]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(div);
