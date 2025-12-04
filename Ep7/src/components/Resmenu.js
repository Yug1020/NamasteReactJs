import { res_menu } from "./utils/mock_data_res_menu";
import { useState, useEffect } from "react";
import { useParams } from "react-router";


const Resmenu = () => {
    // simple way to directly call local data file
    const { res_id } = useParams();
    const resInfo = res_menu[ res_id ];

    useEffect(()=>{
        console.log(resInfo)
    },[])
    
    const { name, rating, location, menuItems } = resInfo

    // const [ resInfo, setResInfo ] = useState(null)

    // useEffect( ()=> {
    //     fetchdata();
    //     console.log(reslist)
    // },[])

    // const fetchdata = async() => {
    //     reslist = res_menu
    //     setResInfo(reslist);
    // }

    return(
        <div className="menupage_parent_div">
            <div className="menupage_child_div">
                <h1>{name}</h1>
                <h2>{rating}</h2>
                <h2>{location.locality},</h2>
                {location.locality !== location.areaName && <h3>{location.areaName}</h3>}
                <h2>Menu</h2>
                
                {
                    menuItems.map((item) =>
                        (   <ul className="menupage_foodinfo">
                                <li key={item.id} >{item.name}</li>
                                <li key={item.id} >{item.price}</li>
                            </ul>
                            
                        )

                    )
                }
                

                    
            </div>
        </div>
        
    )
}

export default Resmenu;