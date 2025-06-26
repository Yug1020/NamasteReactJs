import React from "react";
import ReactDOM from "react-dom/client";

//React method
const react_element = React.createElement(
    "h1", 
    { id: "heading1" }, 
    "Namaste ReactJs 🚀"
);


// Following two are Functioncomponent
const Title = () => (<h1>Yugandhar Dhore</h1>)

const Functioncomponent = () => (
    <div> 
        <Title/> 
        {/* {Title()}  another way to call "Title" */}
        {/* <Title></Title> another way to call "Title" */}
        <h1>{200 + 300}</h1>
        {react_element}
        <h1>Namanster React using Function Component</h1>
    </div>
    )

// JSX method
const jsxheader = (<h1 className="heading2" tabIndex = "1">Namaste ReactJs By JSX🚀 <Functioncomponent/></h1>)


const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(jsxheader);

// root.render(jsxheader);
root.render(<Functioncomponent/>);
// root.render(react_element);
