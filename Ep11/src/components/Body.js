import { useState, useEffect } from "react";
import Card from "./Card";
import ShimmerUI from "./ShimmerUI.js";
import { Link } from "react-router-dom";
import useSwiggyApi from "./hooks/useSwiggyApi.js";
import useFilter from "./hooks/useFilter.js";
import {CardWrapped} from "./Card.js"
// import {WithRecommendedLabel} from "./Card.js"

const Body = () => {
    const Filter = useFilter()
    const swiggyapi = useSwiggyApi()
    const RecoCard = CardWrapped(Card)

    const [allRes, setAllRes] = useState([ ]);
    const [search, setSearch] = useState("");
 
    const searchfunc = ()=>{
        const filterbyname = swiggyapi.filter((res) =>
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
      setAllRes(swiggyapi);
      console.log(swiggyapi)
    },[swiggyapi]);

  return allRes.length === 0 ?<ShimmerUI></ShimmerUI> :(
    <div>
      <div className="Searchcontainer">
            <input 
            className="mr-0.5 my-0.5 px-1 border bg-gray-300 rounded-md w-[94.5%]" 
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
            <button className="border border-black bg-gray-300 rounded-xl px-1.5"  onClick={searchfunc}>Search</button>
      </div>

      <button
        className="my-2 border border-black  bg-gray-300 rounded-md px-1"
        onClick={() => {
          // const filter = swiggyapi.filter(
          //   (res) => res.info.avgRating >= 4.5
          // );
          // setAllRes(filter);
          setAllRes(Filter)
        }}
      >
        Top Rated Restaurants
      </button>
      
      <div className="grid grid-row-4 grid-cols-6 gap-2">
        {allRes.map((res) => (
          <Link  
            key={res.info.id} to={"/restaurant_menu/" + res.info.id}>
            {/* {res.info.avgRating >= 4.5 ? <CardWrapped resData={res.info}></CardWrapped> : <Card resData={res.info} /> } */}
            {res.info.avgRating >= 4.5 ? <RecoCard resData={res.info}/> : <Card resData={res.info} /> }
          </Link>

          // <Card key={res.info.id} resData={res.info} ></Card>
          
        ))}
      </div>
    </div>
  );
};

export default Body;