import { useEffect, useState } from "react";
import resObj from "./utils/mock_data";
import Card from "./Card";

const Body = () => {
  const [ListofRes, SetListofRes] = useState( resObj );

  useEffect(() =>{
    fetchData()
    console.log("Hail Supreme Leader")
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9581934&lng=72.8320729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    
    console.log(json)
  }

  console.log("Hello world")
  return (
    <div>
      <p className="Searchbar Nameholder">Search</p>

      <button 
      className="filter-btn"
        onClick={()=>{
            const filter = resObj.filter((res) => 
            (
            res.card.card.info.avgRating >= 4.5
            ))
            SetListofRes(filter)
            console.log("done")
        }}
        >
        Top Rated Restaurants
        
      </button>
      <div className="Cardcontainer">
            {ListofRes.map((res) => (
                <Card key={res.card.card.info.id} resData={res.card.card.info} />
            ))}
        </div>
    </div>
  );
};

export default Body;