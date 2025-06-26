import React from "react";
import ReactDOM from "react-dom/client";

//React method
const heading = React.createElement(
    "h1", 
    { id: "heading1" }, 
    "Namaste ReactJs 🚀"
);

// JSX method
const jsxheader = (<h1 className="heading2" tabIndex = "1">Namaste ReactJs By JSX🚀</h1>)

// Following two are Functioncomponent
const Title = () => (<h1>Yugandhar Dhore</h1>)

const Functioncomponent = () => (
    <div> 
        <Title/> 
        <h1>Namanster React using Function Component</h1>
    </div>
    )

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(jsxheader);

// root.render(jsxheader);
root.render(<Functioncomponent/>);
// root.render(heading);
