import { useParams } from "react-router-dom";
import { useRastaurantMenu } from "./Constants";
import ShimmerProductCard from "./Shimmer";
import { useEffect, useState } from "react";
import { CDN_URL } from "./Constants";
const RestaurantDetail = () => {
  const { id } = useParams();
  const [menucard, setmenucard] = useState([]);
  const [restInfoMenu, setrestInfoMenu] = useState([]);
  const restInfo = useRastaurantMenu(id);
  console.log(restInfo);

  console.log(restInfoMenu);

  useEffect(() => {
    if (restInfo?.data?.cards) {
      const MenuData = restInfo.data.cards;
      setmenucard(MenuData);
      setrestInfoMenu(MenuData);
    }
  }, [restInfo]);
  const menuCardData = menucard.find((c) => {
    return c?.card?.card?.info;
  });
  const groupCard = restInfoMenu.find((c) => {
    return c?.groupedCard;
  });
  const itemCards = groupCard?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
    (c) => {
      return c?.card?.card?.itemCards;
    }
  );

  const allItemCards = itemCards?.card?.card?.itemCards || [];
  console.log(allItemCards);
  console.log(itemCards);

  const restaurantInfo = menuCardData?.card?.card?.info;
  console.log(restaurantInfo);
  const deliveryTime = restaurantInfo?.sla?.deliveryTime;

  const {
    name,
    cuisines,
    costForTwo,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
  } = restaurantInfo || {};
  console.log(name);
  // const {deliveryTime} = restaurantInfo?.sla

  if (!restInfo) {
    return <ShimmerProductCard />;
  } else {
    return (
      <>
        <div className="container-menuCard">
          <div className="mainCard">
            <img src={CDN_URL + cloudinaryImageId} alt="" />
            <div className="ChildCard">
              <h3>{name}</h3>
              <hr />
              <p>{cuisines}</p>
              <h4>Rating:{avgRating}</h4>
              <h4>Price:{costForTwo}</h4>
              <h4>Discount:{costForTwoMessage}</h4>
              <h4>Minutes:{deliveryTime}</h4>
            </div>
          </div>
          <div className="menu-main">
            <h2>menu</h2>
            <h3 className="items">{allItemCards.length} items</h3>
            <div className="menu-main-card-container">
              {allItemCards.map((item) => (
                <div className="menu-card" key={item.card.info.id}>
                  <div className="menu-card-left">
                    <h2 className="menu-name">{item.card.info.name}</h2>
                    <h3 className="menu-price">
                      ₹
                      {item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100}
                    </h3>
                    <h4 className="menu-description">
                      {item.card.info.description}
                    </h4>
                  </div>
                  <div className="menu-card-right">
                    <img
                      src={CDN_URL + item.card.info.imageId}
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
