import React from "react";
import './footer.css'

function Footer(){

  return (
    <>
    <div className="nifty-login-container">
    <div className="nifty-login-container-top">
    <img src="https://niftypm.com/_nuxt/img/nifty-logo-compact.ab551d5.svg" alt="Server Error" />
      <h1>Get Started Now</h1>
      <p>It takes than 2 mins to sign up and create your first project or import your data from anywhere </p>
       <div className="nifty-login-input-container">
        <input type="email" placeholder="name@company.com" />
        <button style={{marginTop:"5px"}} >Get Started →</button>
        </div  > 
        <div className="inptc" style={{
          
          width:"500px",
          margin:"auto",
          textAlign:"center",
          height:"26px",
          backgroundColor:"white",
          paddingBottom:"18px",
          marginTop:"15px",
          boxShadow:"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          marginBottom:"8px"
          
        }} ><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Server Error" style={{
          width:"20px",marginRight:"8px",marginLeft:"-8px",
        }} /> <p  className="hcb" style={{display:"inline-block",fontSize:"18px",}}>Sign up with Google</p> </div>
        <p  >Free forever. No credit card needed</p>

    </div>
    <div className="nifty-login-container-bottom">
      <img src="https://niftypm.com/_nuxt/img/medal-2651.78561c1.svg" alt="Server Error" />
      <img src="https://niftypm.com/_nuxt/img/medal-2671.abe8328.svg" alt="Server Error" />
      <img src="https://niftypm.com/_nuxt/img/medal-2659.521cffc.svg" alt="Server Error" />
      <img src="https://niftypm.com/_nuxt/img/medal-2696.defc16a.svg" alt="Sever Error" />
      <img src="https://niftypm.com/_nuxt/img/medal-2640.333478a.svg" alt="Server Error" />
      <img src="https://niftypm.com/_nuxt/img/users-love-us.a93e7d7.svg" alt="Server Error" />
    </div>
    </div>
     <div className="footer">
         
          <div className="links-list">
          <ul>
          <li>PRODUCT</li>
          <li>Discussions</li>
          <li>Roadmaps</li>
          <li>Tasks</li>
          <li>Goals</li>
          <li>Forms</li>
          <li>Docs & Files</li>
          <li>Time Tracking</li>
          <li>Reporting</li>
          <li>Project Home</li>
          <li>Project Portfolios</li>
        </ul>
          </div>
          
          <div className="links-list">
          <ul>
        <li>RESOURCES</li>
        <li>Blog</li>
        <li>Change Log</li>
        <li>Integrations</li>
        <li>Apps</li>
        <li>Pricing</li>
        <li>Affiliates</li>
        <li>Consultants</li>
        <li>API</li>
       </ul>
          </div>

          
          <div className="links-list">
          <ul>
        <li>TRUST</li>
        <li>Help Center</li>
        <li>Privacy</li>
        <li>Terms of Use</li>
        <li>Security</li>
        <li>Status</li>
        </ul>
          </div>

          
          <div className="links-list">
          <ul>
         <li>MADE FOR</li>
        <li>Agile Development</li>
        <li>Client Management</li>
        <li>Digital Agencies</li>
        <li>Legal Case Management</li>
        <li>Marketing Teams</li>
        <li>Product Teams</li>
         </ul>
          </div>
          <ul>
          <li>COMPARISIONS</li>
          <li>vs Airtable</li>
          <li>vs Asana</li>
          <li>vs Basecamp</li>
          <li>vs Clarizen</li>
          <li>vs ClickUp</li>
          <li>vs Confluence</li>
          <li>vs Flow</li>
          <li>vs Hiva</li>
          <li>vs Jira</li>
          <li>vs Monday</li>
        </ul>
          
          <div className="links-list">
          <ul>
          <li>BLOG</li>
          <li>Task Management Software</li>
          <li>Free Project Management Software</li>
          <li>Agile Project Management Tools</li>
          <li>Client Management Software</li>
          <li>Daily Checklist Apps</li>
          <li>Resource Management Software</li>
          <li>Enterprise Project Management Software</li>
        </ul>
          </div>
    

     </div>
    
    </>
  )
}
export default Footer;