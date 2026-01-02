import { useEffect, useState } from "react";

export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const Menu_api =
  "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6291344&lng=77.12047129999999&restaurantId=";

export const useRastaurantMenu = (restId) => {
  const [restaurantmenu, setrestaurantmenu] = useState(null);
   
  async function fetchData() {
   try {
    const Data= await fetch(Menu_api + restId)
    const json = await Data.json()
    setrestaurantmenu(json)  
   } catch (error) {
     console.log(error);
     
   }

  }
  useEffect(() => {
    fetchData();
  }, []);

  return restaurantmenu;
};

