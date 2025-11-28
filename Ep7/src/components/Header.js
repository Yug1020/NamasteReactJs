import { useEffect, useState } from "react";
import { CND_LOGO } from "./utils/constants";
import { Link } from "react-router-dom"

const Header = () =>{
    const [loginBtn, setloginBtn] = useState("Login")

    useEffect(() => {
        console.log("useEffect called")
    },[loginBtn])

    console.log("Header called")
    return(
        <div className="Navbar">
            <div className="burger-logo">            
                <li><img alt="burger-logo" width="50px" src={CND_LOGO} /></li>
            </div>
            <div>
                <ul className="Navname">
                    <li>
                        <Link to="/">Home</Link> 
                    </li>
                    <li>Cart</li>
                    <li>
                        <Link to="/about">About us</Link> 
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li><button onClick={()=>{loginBtn === "Login" ? setloginBtn("Logout"): setloginBtn("Login")}}>{loginBtn}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;