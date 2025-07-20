import { useState } from "react";
import { CND_LOGO } from "./utils/constants";

const Header = () =>{
    const [loginBtn, setloginBtn] = useState("Login")

    return(
        <div className="Navbar">
            <div className="burger-logo">            
                <li><img alt="burger-logo" width="50px" src={CND_LOGO} /></li>
            </div>
            <div>
                <ul className="Navname">
                    <li>Home</li>
                    <li>Shopping</li>
                    <li>About us</li>
                    <li>Cart</li>
                    <li><button onClick={loginBtn === "Login" ? setloginBtn("Logout"): setloginBtn("Login")}>{loginBtn}</button></li>
                </ul>
            </div>
        </div>

    )
}

export default Header;