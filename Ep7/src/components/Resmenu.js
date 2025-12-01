import { CND_LOGO } from "./utils/constants";
import { useEffect, useState } from "react";

const Resmenu = () => {
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=830418&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json()
        console.log(json);
        // console.log(data.status)
        // console.log(json)


    }
    return (
        <div className="menupage_parent_div">
            <div className="menupage_child_div">
                <h1>Restaurant Name</h1>
                <div className="menupage_foodinfo" >
                    <h2>Your Choice</h2>
                    <img width="50px" src={CND_LOGO}/>
                </div>
                <h3>Menu</h3>
            </div>
        </div>
    )
}

export default Resmenu;