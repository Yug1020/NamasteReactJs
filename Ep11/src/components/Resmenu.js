import { Link } from "react-router-dom";
import { useResMenu } from "./hooks/useResMenu";
import { RestaurantMenu } from "./RestaurantMenu";
import { CLOUD_LINK } from "./utils/constants";
import  useSwiggyApi from "./hooks/useSwiggyApi";

const Resmenu = (props) => {
    const resInfo = useResMenu()
    const { resdata } = props;

    if(!resInfo){
            return(
            <div className="flex font-semibold text-3xl justify-center">
                <h1 >restaurant is offline</h1>
            </div>
            )
        }
        
    const { name, rating, location, menuItems, deliveryTime, imageId, cuisines} = resInfo
    // const splitter = () => {}
    return(
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col w-[30%]">
                <div className="flex flex-row border border-zinc-400 rounded-2xl box-border shadow-2xl m-2 p-3 justify-between">
                    <div>
                        <span className="text-3xl font-semibold my-5">{name}</span>
                        <p className="text-gray-400">{cuisines.join(", ")}</p>
                    </div>
                    <img className="w-20 h-20 rounded-lg object-cover" src={ CLOUD_LINK + imageId }></img>
                </div>
                <div className="border border-zinc-400 rounded-2xl box-border shadow-2xl m-2 p-5">
                    <h2 className="text-xl font-semibold ">⭐{rating}</h2>
                    <h2 className="text-xs font-semibold ">{location.locality},{location.locality !== location.areaName && location.areaName}</h2>
                    <h3 className="text-lg">{deliveryTime}</h3>
                </div>
                
                
                <h2 className="text-3xl font-semibold">Menu</h2>
                {
                    menuItems.map((item) =>
                        (   <ul key={item.id} className="flex flex-row justify-between ml-10">
                                <li className="my-5">{item.name}</li>
                                <li className="my-5">{item.price}</li>
                            </ul>
                        )
                    )
                }
                {/* <RestaurantMenu></RestaurantMenu> */}
                <Link to="/" className="my-5"> <h3> ⬅  back to the home page </h3> </Link>    
            </div>
        </div>
        
    )
}

export default Resmenu;