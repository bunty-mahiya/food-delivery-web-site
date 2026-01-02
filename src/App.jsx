import Header from "./Header"
import Body from "./Body"
import About from "./About"
import "./App.css"
import { createBrowserRouter, Outlet } from "react-router-dom"
import Footer from "./Footer"
import Cart from "./Cart"
import Contact from "./Contact"
import RouterErrorElement from "./Error"
import RestaurantDetail from "./RestaurantDetail"
import Login from "./Login"

const Applayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export const Approuter=createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement:<RouterErrorElement/>,
    children:[
     { path:"/",
      element:<Body/>},
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/Cart",
        element:<Cart/>
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
         path:"restaurantCard/:id",
         element:<RestaurantDetail/>
      }
   ]
  }
])
