// Navbar
// search
// Card
// footer

import React from "react";
import ReactDOM from "react-dom/client";

const Navbar = () =>{
    return(
        <div className="Navbar">
            <div className="burger-logo">            
                <li><img alt="burger-logo" width="50px" src="https://static.vecteezy.com/system/resources/previews/026/174/585/non_2x/cheese-burger-cartoon-vector.jpg" /></li>
            </div>
            <div>
                <ul className="Navname">
                    <li>Home</li>
                    <li>Shopping</li>
                    <li>About us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    
    )
}


const App = () => {
    return(
        <Navbar></Navbar>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App></App>)