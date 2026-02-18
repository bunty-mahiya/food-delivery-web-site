import { useEffect, useState } from "react";
import RestaurantCard,{Withpromtedlabel} from "./RestaurantCard";
import ShimmerProductCard from "./Shimmer";
import { Link } from "react-router-dom";

//  const API="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
  const [Search, setSearch] = useState([]);
  const Promted = Withpromtedlabel(RestaurantCard)
  const fetchData = async () => {
    const data = await fetch("../json.json");
    const json = await data.json();
    const cards = json?.data?.cards;
    const restaurantCard = cards.find((c) => {
      return c?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    });
    setlistofRestaurant(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => {
              setSearch(e.target.value.trim().replace(/\s+/g, " "));
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filter = listofRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(Search.toLowerCase());
              });
              setFilteredRestaurant(filter);
            }}
          >
            Search
          </button>
        </div>
        <div className="rateRestaurant">
          <button
            onClick={() => {
              const filtered = listofRestaurant.filter((res) => {
                return res.info.avgRating > 4.5;
              });
              setFilteredRestaurant(filtered);
            }}
          >
            top rated restaurant
          </button>
        </div>
        <div className="rateRestaurant">
          <button
            onClick={() => {
              setFilteredRestaurant(listofRestaurant);
            }}
          >
            All
          </button>
        </div>
      </div>
      <div className="res-container">
        {listofRestaurant.length === 0 ? (
          <>
            <ShimmerProductCard />
          </>
        ) : (
          FilteredRestaurant.map((val) => (
            <Link
              key={val.info.id}
              to={`restaurantCard/${val.info.id}`}
              style={{ textDecoration: "none" }}
            >
              {console.log(val)
              }
              {val?.info?.isOpen ?( <Promted resData={val}/>):(<RestaurantCard key={val.info.id} resData={val} />)}
              
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
