import { useParams } from "react-router-dom";
import { useRastaurantMenu } from "./Constants";
import ShimmerProductCard from "./Shimmer";
import { useEffect, useState } from "react";
import { CDN_URL } from "./Constants";
const RestaurantDetail = () => {
  const [allMenuCard,setallMenuCard]=useState([])
  const { id } = useParams();
  console.log(id);
  const Data = useRastaurantMenu();
  function hendleData() {
    const findData = Data?.data?.restaurants.find(
    (item) => item.id == Number(id), );
    setallMenuCard(findData)
  }
  useEffect(()=>{
    hendleData()
  },[Data])
 
 console.log(allMenuCard);
 
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    imageId,
  } = allMenuCard || {};

  if (!Data) {
    return <ShimmerProductCard />;
  } else {
    return (
      <>
        <div className="container-menuCard">
          <div className="mainCard">
            <img src={imageId} alt="" />
            <div className="ChildCard">
              <h3>{name}</h3>
              <hr />
              <p>{cuisines}</p>
              <h4>Rating:{avgRating}</h4>
              <h4>Price:{costForTwo}</h4>
              <h4>Minutes:{deliveryTime}</h4>
            </div>
          </div>
          <div className="menu-main">
            <h2>menu</h2>
            <h3 className="items">{allMenuCard?.menu.length} items</h3>
            <div className="menu-main-card-container">
              {allMenuCard?.menu.map((item) => (
                <div className="menu-card" key={item.id}>
                  <div className="menu-card-left">
                    <h2 className="menu-name">{item.name}</h2>
                    <h3 className="menu-price">
                      ₹
                      {item.price ||
                        item.defaultPrice}
                    </h3>
                    <h4 className="menu-description">
                      {item.description}
                    </h4>
                  </div>
                  <div className="menu-card-right">
                    <img
                      src={item.imageId}
                      alt="Menu Info"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default RestaurantDetail;
