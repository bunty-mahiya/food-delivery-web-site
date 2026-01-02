
import { CDN_URL } from "./Constants";
const RestaurantCard = ({ resData }) => {
  // console.log(resData);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, } =
    resData?.info;

    const {deliveryTime} = resData?.info?.sla
    
   
      return <div style={{position:"relative"}} className="res-card">
    <img src={CDN_URL+cloudinaryImageId} alt="" />
    <div className="res-card-content">
        <h3>{name}</h3>
        <hr />
        <p>{cuisines.join(", ")}</p>
        <h4>Rating:{avgRating}</h4>
        <h4>Price:{costForTwo}</h4>
        <h4>Minutes:{deliveryTime}</h4>
    </div>
  </div>;
};

export const Withpromtedlabel=(RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label style={{position:"absolute",color:"white", zIndex:1 , background:"black",borderRadius:"6px",padding:"2px"}} className="promted">isOpen</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
