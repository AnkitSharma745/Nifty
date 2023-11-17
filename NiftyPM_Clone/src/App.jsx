import { useState } from 'react'
import './App.css'
import AllRoutes from './AllRoutes'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Components/Login'

function App() {
 
 return(
  <>
  
   <AllRoutes>
    <Home/>
    <Login/>
   </AllRoutes>
  </>
 )
}

export default App
