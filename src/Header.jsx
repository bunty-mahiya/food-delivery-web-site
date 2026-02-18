import React from 'react'
import { Link } from 'react-router-dom'
import useOnline from "./OnlineOffline";
const Header = () => {
  const internetstatus = useOnline()
  return (
    <>
    <nav className="container">
        <div className="nav-logo">
               <h1>Cookers</h1>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link style={{textDecoration:"none",color:'black'}} to={"/"}>Home </Link> </li>
                <li><Link style={{textDecoration:"none",color:'black'}} to={"/about"}>About us </Link> </li>
                <li><Link style={{textDecoration:"none",color:'black'}} to={"/contact"}>Contact us </Link> </li>
                <li style={{textDecoration:"none",}}>{internetstatus? <li style={{color:'green'}}>Online</li>:<li style={{color:"red"}}>Offline </li>}</li>
            </ul>
           <Link to={"/Login"}> <button className='login-btn'>Login</button></Link>
        </div>
    </nav>
    
    </>
  )
}

export default Header