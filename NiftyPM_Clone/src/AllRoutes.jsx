import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import BookADemo from "./Pages/BookADemo";
import UseCases from "./Pages/UseCases";
import Resources from "./Pages/Resources";
import Features from "./Pages/Features";
import GotClients from "./Pages/GotClients";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";



function AllRoutes(){


  return(
    <>
     <Routes>
      <Route path="/" element={ <Home/> } />

     <Route path="/features" element={ <Features/> }    />

      <Route path="/useCases" element={  <UseCases/> } />

      <Route path="/resource" element={  <Resources/> } />

      <Route path="/clients" element= { <GotClients/> } />

      <Route path="/pricing" element={ <Pricing/> } />

      <Route path="/book" element={  <BookADemo/> } />

      <Route path="/login" element= { <Login/>  }   />

      <Route path="/signup" element={<SignUp/> } />
    
      </Routes>
    </>
  )
}

export default AllRoutes;