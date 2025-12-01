import { useState, useEffect } from "react";
import Card from "./Card";
import ShimmerUI from "./ShimmerUI.js";

const Body = () => {
    const [allRes, setAllRes] = useState([]);
    const [search, setSearch] = useState("");
    const [copyofall, setCopyofall] = useState([]);

    const searchfunc = ()=>{
        const filterbyname = copyofall.filter((res) =>
          res.info.name.toLowerCase().includes(search.toLowerCase())
        );
        if(filterbyname.length > 0){
          setAllRes(filterbyname);
        }
        else{
          alert("Result not found")
        }
    };
    
    useEffect(() => {
      fetchData();
    },[]);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      // json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants

      // Adjust the path below if the structure is different
      const restaurants = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      // SetListofRes(restaurants);
      setAllRes(restaurants);
      setCopyofall(restaurants);
    };

  return allRes.length === 0 ?<ShimmerUI></ShimmerUI> :(
    <div>
      <div className="Searchcontainer">
            <input 
            className="Searchbar" 
            type="text" 
            placeholder="Search for restaurant, item or more" 
            value={search} 
            onChange={(e)=>{setSearch(e.target.value)}}
            onKeyDown={(e) => {
              if(e.key == "Enter"){
                searchfunc()
              }
            }}
            >
            </input>
            <button className="Search-btn"  onClick={searchfunc}>Search</button>
      </div>

      <button
        className="filter-btn"
        onClick={() => {
          const filter = copyofall.filter(
            (res) => res.info.avgRating >= 4.5
          );
          setAllRes(filter);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="Cardcontainer">
        {allRes.map((res) => (
          <Card key={res.info.id} resData={res.info} />
        ))}

        {/* {copyofall.map((res) => (
          <Card key={res.info.id} resData={res.info} />
        ))} */}

      </div>
    </div>
  );
};

export default Body;