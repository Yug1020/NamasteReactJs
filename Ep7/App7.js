import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const App = () => {
    return(
        <div>
            <Header></Header>
            <Body></Body>
        </div>
        
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement:<Error></Error>
    },
    {
        path: "/about",
        element: <About></About>,
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router}/>);