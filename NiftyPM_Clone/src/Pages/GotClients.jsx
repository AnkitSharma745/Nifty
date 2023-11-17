import React from "react";
import Navbar from "../Components/Navbar";
import './gotClients.css'
import DecComponent from "../Components/DecComponent";
import Footer from "../Components/Footer";
function GotClients(){


  return(
      <>
      <Navbar/>
      <br />
      <div className="client-container">
      <button>CLIENT PROJECT MANAGEMENT </button>
      <h1>Nifty automates reporting for your clients.</h1>
      <p>Never lose a client due to poor communication again. Manage client projects, 
        <br />deliveries, and communications  in one place.</p>
      
      <div className="home-input-email">
      
      <input type="email" placeholder="name@company.com" />
       <button >Get Started</button>
       
      </div>
       <div className="home-input" >
       <button className="home-sign-with-google" ><img style={{width:"18px",}} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" /> Sign up with Google</button>
       <p>Free forever. No credit card needed</p>
    </div>
     <br />


 </div> 
     <div className="client-dec">
   <DecComponent/>

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
     
    </div>
      
      <img style={{width:"70px",marginBlock:"-40px"}} src="src\assets\checked.png" alt="" />
       <div style={{marginTop:"70px"}}>
        <h1 style={{fontSize:"42px",letterSpacing:"1px"}}>Client Project Management Made Easy </h1>
        <p style={{fontSize:"22px"}}>Enhance your client management process and build stronger <br /> client relationships.</p>
       </div>
      
       <div className="client-second-container">

        <div className="client-second-content-first"> 
         <div className="client-second-content-first-left">
          <h2>Stay in Control</h2>
          <p>  Hide specific internal conversations, tasks, and milestones from your clients to ensure they only see what you want them to see.</p>
         </div>
         <div className="client-second-content-first-right">
          <img src="https://niftypm.com/_nuxt/img/large@1x.e11831f.webp" alt="Server Error" />
         </div>
          </div>
        <div className="client-second-content-second" style={{display:"flex",
         marginTop:"80px",
         width:"950px",
         justifyContent:"space-between",
         
         margin:"auto"
      }}> 
         <div className="client-container-second-left">
          <img style={{width:"500px",height:"250px"}} src="https://niftypm.com/_nuxt/img/large@1x.e6ff289.webp" alt="Server Error" />
         </div>
         <div className="client-container-second-right" style={{width:"300px"}}>
          <h2 style={{textAlign:"left",fontSize:"30px"}}>Automate Progress Tracking </h2>
          <p style={{textAlign:"left",fontSize:"20px"}}> Automate your project's progress for clients to see based on the completion of connected tasks.</p>
         </div>
          </div>
        {/* <div className="client-second-content-third"> 
         <div className="client-content-third-left">
          <h2> Track Billable Hours</h2>
          <p> Record and export time spent on case efforts to easily stay on top of the managerial aspects of the case. </p>
         </div>
         <div className="client-content-third-right">
          <img src="https://niftypm.com/_nuxt/img/large@1x.55917e8.webp" alt="Server Error" />
         </div>
          </div>
        <div className="client-second-content-fouth"> 
         <div className="client-content-fouth-left">
          <img src="https://niftypm.com/_nuxt/img/large@1x.8caa310.webp" alt="Server Error" />
         </div>
         <div className="client-content-fouth-right">
          <h2> Keep a Record</h2>
          <p> Keep track of all your interactions and deliverables with timestamps and activity logs on tasks to avoid any miscommunications. </p>
         </div>
          </div>
        <div className="client-second-content-five"> 
         <div className="client-container-fiv-left">
          <h2>Streamline <br /> Responsibilities </h2>
          <p>Assign tasks to your clients to notify them about what's needed and by when to reduce uncecessary meetings and naggings.  </p>
         </div>
         <div className="client-container-five-right">
          <img src="https://niftypm.com/_nuxt/img/large@1x.37ccc78.webp" alt="Server Error" />
         </div>
          </div>
        <div className="client-second-content-six"> 
         <div className="client-container-six-left">
          <img src="https://niftypm.com/_nuxt/img/large@1x.292aea2.webp" alt="Server Error" />
         </div>
         <div className="client-container-six-right">
          <h2>Expedite Feedback <br /> Gathering  </h2>
          <p> Engage in real-time discussions that travel with you on our mobile apps to speed up discussions and feedback gathering. </p>
         </div>
          </div> */}
       </div>
        <br />

        <br />


        <br />
        <Footer/>
      </>
    
  )
}

export default GotClients;