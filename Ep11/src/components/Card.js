import { CLOUD_LINK } from "./utils/constants";


const Card = ({resData}) => {
   const { name, avgRating, slaString, cuisines, areaName, cloudinaryImageId } = resData;
    return(
        <div className="border bg-gray-300 m-px p-1">
            <img width="100%" height="50%" 
            src={
                CLOUD_LINK
                + cloudinaryImageId
                }/>
            <div>
                <h2 className="  block w-56 whitespace-nowrap overflow-hidden text-ellipsis">{name}</h2>  
                <h2 className="">{avgRating} {slaString}</h2>
                <p className="  block w-56 whitespace-nowrap overflow-hidden text-ellipsis">{cuisines.join(", ")}</p> 
                <p className="">{areaName}</p>
                </div>  
          </div>
    )
}

export default Card;