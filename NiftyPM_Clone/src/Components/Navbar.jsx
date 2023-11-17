import React from "react";
import './navbar.css'
import { Link } from "react-router-dom";

function Navbar(){
  return (
   <>
   <div className="navbar">
      <div className="nav-logo-container">
        <img src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" alt="Server Error" />
          
      </div>
      <div className="nav-links">
      <ul>
         <Link  className="nav-links-jsx"  to="/features" >Features</Link> 
         <Link  className="nav-links-jsx" to="/useCases" >Use cases</Link>
         <Link  className="nav-links-jsx" to="/resource" >Resources</Link>
         <Link  className="nav-links-jsx" to="/clients" >Got Clients ?</Link>
          <Link className="nav-links-jsx"  to="/pricing" >Pricing</Link>     
          <Link  className="nav-links-jsx" to="/book"> Book a demo </Link> 
          </ul>
      </div>
        <div className="login-container">
         <div className="login-btn-container" >

          <Link className="login-btn" to="/login" >Login</Link>
         
         </div>
         <div className="get-started-container">
          <button className="get-started">Get Started → </button>
         </div>
        </div>
   </div>
   
   
   </>


  )
}
export default Navbar;