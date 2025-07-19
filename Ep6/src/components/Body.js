import { useState, useEffect } from "react";
import Card from "./Card";
import ShimmerUI from "./ShimmerUI.js";

const Body = () => {
    const [allRes, setAllRes] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9581934&lng=72.8320729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();

      // Adjust the path below if the structure is different
      const restaurants = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      // SetListofRes(restaurants);
      setAllRes(restaurants);
    };

  return allRes.length === 0 ?<ShimmerUI></ShimmerUI> :(
    <div>
      <p className="Searchbar Nameholder">Search</p>
      <button
        className="filter-btn"
        onClick={() => {
          const filter = allRes.filter(
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
      </div>
    </div>
  );
};

export default Body;