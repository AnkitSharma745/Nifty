import React from "react";
import './login.css'
import { Link } from "react-router-dom";

function Login(){
  return (
    <>

      <div className="login-page-container">
       <Link to="/" >
          <img className="logo1" src="https://nifty.pm/static/media/nifty-logo.622c3309bcffc8b8f40273706462925f.svg" alt="Server Error" />
       </Link>

     <div className="login-page-left-right">
     
     <div className="login-page-left-container">
         <div className="login-page-left-content">
         <button>COMMING SOON</button> <h4 style={{display:"inline-block",marginLeft:"5px"}}>Reporting Dashboard</h4>
      <p>Powerful reporting to keep you on top of your business <br /> and workload. Customize your dashboard to gain <br /> insights and make informed decisions.</p>
      <img src="https://nifty.pm/static/media/main.9818dcc508e7ef1f7d96.png" alt="error" />
    
         </div>
       </div>
      
      {/*right div having the login part */}
     <div className="login-page-right-container">
      <div className="login-page-right-content">
      <h2>Log in to your account</h2>
      <div className="login-page-email-div">
      <label htmlFor="MyEmail">Email Address <span>*</span> </label>
      <br />
      <input type="email" id="MyEmail" required placeholder="name@company.com"    />
      </div>
      <div className="login-page-pass-div">
        <label htmlFor="MyPassword">Password <span>*</span> </label> <span style={{marginLeft:"164px"}}>Forget password?</span>
        <br />
        <input type="password" required placeholder="password" id="MyPassword" />
      </div>
      <button className="submit">Submit</button>
       <div className="sign-method">
       <img  style={{width:"20px",display:"inline-block",marginTop:"8px"}} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
       <p style={{color:"#f57d2c",display:"inline-block",fontSize:"18px",marginLeft:"5px"}}> Sign in with Google</p>
       <p>Sign in with SSO</p>
       <h4>OR</h4>
       <p>Don't have an account</p>
       <Link style={{color:"#f57d2c",
       border:"none",
       width:"150px",
       height:"26px",
       marginTop:"20px",
       backgroundColor:"white",
       borderRadius:"3px",
       boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
              }
        } to="/signup"  >Sign up for free</Link>

       </div>
      </div>
     </div>

     </div>
     
     </div>
    </>
  )
}
export default Login;
