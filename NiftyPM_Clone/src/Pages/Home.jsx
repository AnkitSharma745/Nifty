import React from "react";
import './home.css'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DecComponent from "../Components/DecComponent";
import DecComponent2 from "../Components/DecComponent2";


function Home(){

  return (

   <>
    <Navbar/>
   <div className="home-first-content">
      <div className="video-image-container">        
           <img src="https://niftypm.com/_nuxt/img/large@2x.faea757.webp" alt="Server Error" />
      </div>
   <div className="home-first-text-content">
    <h1>The ultimate project management </h1>
    <img style={{width:"35px",marginLeft:"6px"}} src="https://niftypm.com/_nuxt/img/large@2x.f9497bf.webp" alt="Server Error" />
    <p>Stop switching between Roadmaps, Tasks, Docs, Chats, & other tools. <br />
         Nifty is one app to unite your teams, goals, and processes.
    </p>
   </div>
    <div className="home-input-email">
      
      <input type="email" placeholder="name@company.com" />
       <button >Get Started</button>
       
      </div>
       <div className="home-input" >
       <button className="home-sign-with-google" ><img style={{width:"18px",}} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" /> Sign up with Google</button>
       <p>Free forever. No credit card needed</p>
    </div>


   </div>
    <div className="home-second-container">
      <p>JOIN OVER 20,000 HIGHLY PRODUCTIVE TEAMS</p>
      <div className="home-company-logo">
        <img src="https://niftypm.com/_nuxt/img/logo-verizon.b7c8a9c.svg" alt="Server Error" />
        <img src="https://niftypm.com/_nuxt/img/logo-pd.e35bded.svg" alt="Server Error" />
        <img src="https://niftypm.com/_nuxt/img/logo-emovis.895c86e.svg" alt="Server Error" />
        <img src="https://niftypm.com/_nuxt/img/logo-vmware.b3363fd.svg" alt="Server Error" />
        <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI0MDAiPgogIDxjbGlwUGF0aCBpZD0iYiI+CiAgICA8cGF0aCBkPSJNMC0xdjgzaDU1LjkzN3YyMzZIMS41MjN2ODJoMTk0LjY1di04MmgtNTUuOTM4VjgyaDU0LjQxNFYtMXptNTU0LjAyIDF2ODJoNTUuOTM4djIzNmgtNTQuNDE0djgyaDEzOC43MVYxNzEuODRsODIuNjU2IDIyOC4wOCAxLjY4LjA0IDgxLjE3Mi0yMjguMTJWNDAwaDE0MC4yM3YtODJoLTU1LjkzOFY4Mmg1NC40MTVWMGgtMTU2LjMzbC02NC43MjYgMTgyLjg5TDcxMS44NjYgMHoiLz4KICAgIDxwYXRoIGlkPSJhIiBkPSJNMjIyLjIzIDB2ODJoNTUuOTM3djEzMGgyMTUuMzF2LTI0LjkyOHMxOC4wMTEtMTQuMDQyIDIzLjc1LTI3LjM2N2wxMS41MjMtMjUuODU1czUuMzUyLTE0LjQ3MiA1LjM1Mi0yNy40MDVsLTIuMzA1LTI1Ljg1NXMtMy42MTYtMjEuMDYzLTkuOTIyLTI3LjMyOGwtMjIuMjY2LTI1Ljg5NVM0NzEuMjc2IDAgNDMzLjc1IDB6bTE0MC4yMyA4Mmg4MS45OTJ2NzZIMzYyLjQ2eiIvPgogICAgPHVzZSB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDQwMCkiIHhsaW5rOmhyZWY9IiNhIi8+CiAgPC9jbGlwUGF0aD4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNhY2JhZDAiIHN0cm9rZS13aWR0aD0iMjcuMzciIGQ9Ik0wIDEzLjY4M2gxMDMwdjUzLjIzMkgwbTAgNTMuMjMyaDk3NXY1My4yNDJIMHY1My4yMjJoOTc1djUzLjIyMkgwbTAgNTMuMjQyaDEwMzB2NTMuMjQySDAiIGNsaXAtcGF0aD0idXJsKCNiKSIvPgo8L3N2Zz4K" alt="Server Error" />
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OC4yIDMwLjEiPgogIDxwYXRoIGZpbGw9IiNhY2JhZDAiIGQ9Ik0zNy45IDYuN2gzLjVsOCAxMC41VjYuN2gzLjd2MTdoLTMuMmwtOC4zLTEwLjh2MTAuOGgtMy43di0xN3pNNjEuNSAxN0w1NC45IDYuN2g0LjRsNC4xIDYuOCA0LjEtNi44aDQuM2wtNi41IDEwLjJ2Ni44aC0zLjdWMTd6bTExLjktLjZWNi43aDMuN3Y5LjZjMCAyLjggMS40IDQuMiAzLjcgNC4yIDIuMyAwIDMuNy0xLjQgMy43LTQuMVY2LjdoMy43djkuNmMwIDUuMi0yLjkgNy43LTcuNSA3LjdzLTcuMy0yLjYtNy4zLTcuNm0tNjAtLjdjLTMuMS0xLjgtMi44LTQuNS0xLjUtNi40di0uMmMtLjEtLjUtLjYtMS42LS44LTEuOS0uMS0uMS0uMS0uMS0uMSAwIDAgLjUtLjYgMS44LTEuNSAzLjMtMSAxLjctMSA1LjIgMy45IDUuMiAwIC4xIDAgMCAwIDBtLjgtLjFjLTEuOC0zLjkgMS44LTYuNSAyLjQtNyAuMS0uMS4xLS4xLjEtLjIgMC0xLjItLjctMy4yLS45LTMuNWgtLjFjLS4zIDEuMi0yIDMtMi4zIDMuNC0yLjkgMy4zLTIuMiA1LjQuOCA3LjMgMCAuMSAwIDAgMCAwbS42LS4yYy45LTQuMiA0LjMtNC4zIDQuNi01LjEuNS0xLjItLjQtMy40LS42LTMuN2gtLjFjLS41IDEtMS4yIDItMS44IDIuNC0uNy43LTMuNyAyLjktMi4xIDYuNC0uMS4xIDAgLjEgMCAwbS42LjRjNS41LjIgNS45LTQuOCA1LjktNi43IDAtLjEtLjEtLjEtLjEgMC0uMi40LS45IDEuOC0yLjkgMi42LTEuNy44LTIuOCAyLjUtMi45IDQuMS0uMSAwIDAgMCAwIDBtMS4yLjZoLTQuM3YxLjNoNC4zdi0xLjN6bS0yLjUgMTAuMmMwIC4yLjUuMy42IDBsMS04LjNoLTIuNWwuOSA4LjN6bTE2IDMuNUguMVYuMWgzMHYzMHoiLz4KPC9zdmc+Cg==" alt="Server Error" /><img src="" alt="" />
      </div>
      <p style={{marginTop:"100px",fontSize:"23px"}} >SAY GOODBYE TO STATUS MEETINGS</p>
    </div>


      <DecComponent/>
     <div className="home-team">
      <p style={{fontSize:"23px"}} >BUILT FOR EVERY TEAM</p>
     </div>
     <DecComponent2/>

     <div className="home-product-hunt">
      <div>
        <div><p style={{fontSize:"17px"}} >DON'T TAKE OUR WORD FOR IT </p></div>
        <h1>Nifty is acclaimed for its <br /> design and performance ✨ </h1>
      </div>
      <div><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=330952&theme=light" alt="Server Error" /></div>
     </div>
     

 
    <Footer/>
<div className="home-down-footer">
  <div className="hdf-left">
  <img src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg" alt="Server Error" />
   <p>2023 &copy; Nifty Technologies, Inc . All rights reserved .  </p>
  </div>
   <div className="hdf-right">
    <img src="src\assets\linkedin.svg" alt="Sever Error " />
    <img src="src\assets\facebook.svg" alt="Sever Error " />
    <img src="src\assets\twitter.svg" alt="Sever Error " />
   </div>
</div>
   </>
  )
}
export default Home;