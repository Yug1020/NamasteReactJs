import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";


const App = () => {
    return(
        <div>
            <Header></Header>
            <Body></Body>
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App></App>)