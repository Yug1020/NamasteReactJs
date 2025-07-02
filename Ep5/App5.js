import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Cardcontainer from "./src/components/Cardcontainer";

const App = () => {
    return(
        <div>
            <Header></Header>
            <Body></Body>
            <Cardcontainer></Cardcontainer>
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App></App>)