import { useEffect, useState } from "react";
import { CND_LOGO } from "./utils/constants";
import { Link } from "react-router-dom";
import useNetStatus from "./utils/useNetStatus";
const Header = () =>{
    const [loginBtn, setloginBtn] = useState("Login")

    useEffect(() => {
        // console.log("useEffect called")
    },[loginBtn])

    // console.log("Header called")
    // (online_status === true) ? "Online" : (online_status === false) ? "offline"

    const online_status = useNetStatus()

    return(
        <div className="flex flex-row justify-between items-center my-2 mx-2 border border-black">
            <Link to="/">
                <div className="mx-6.25 list-none">            
                    <li><img alt="burger-logo" width="50px" src={CND_LOGO} /></li>
                </div>            
            </Link>

            <div>
                <ul className="flex flex-row justify-between w-200 mx-5">
                    <li>
                        Online Status = {online_status ? "Online ✅" : "Offline ❌"}
                    </li>
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
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="border border-black bg-gray-300 rounded-xl px-1.5"><button onClick={()=>{loginBtn === "Login" ? setloginBtn("Logout"): setloginBtn("Login")}}>{loginBtn}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;