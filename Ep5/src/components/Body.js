import { useState } from "react";
import resObj from "./utils/mock_data";
import Card from "./Card";

const Body = () => {
  const [ListofRes, SetListofRes] = useState( resObj );

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