import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

const App = () => {
    return(
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

const router = createBrowserRouter([
    {   
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Body></Body>
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ],
        errorElement:<Error></Error>,
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router}/>);
// root.render(<App></App>);