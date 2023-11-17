import React from "react";
import './SignUp.css'

function SignUp(){


  return(

    <>
      <div className="forget-password">
       <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",height:"210px"}} >
       <img src="https://nifty.pm/static/media/nifty-logo.622c3309bcffc8b8f40273706462925f.svg" alt="Server Error" />
       <h1>Get Started width Nifty</h1>
       <p>Over 20,000 teams trust Nifty to empower their project management</p>
     
       </div>
       
         <div className="two-method-for-sign">
        <div className="method-left-side">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Server Error" />
          <p>Sign up with Google</p>
        </div>
        <div className="method-right-side">
          <img src="https://upload.wikimedia.org/wikipedia/commons/archive/4/44/20210729021048%21Microsoft_logo.svg" alt="Sever Error" />
          <p>Sign up with Office 365</p>

        </div>

       </div>
        <p className="forget-login-option" >OR</p>
    
       <div className="email-for-forget" >
       <input type="email" placeholder="Enter email..." />
       <button>Get Started</button>
       <p>Free Forever. No credit card Required </p>
      
       </div>
         <div className="forget-logos">
          <img src="https://images.g2crowd.com/uploads/report_medal/image/2651/medal.svg" alt="Sever Error" />
          <img src="https://images.g2crowd.com/uploads/report_medal/image/2671/medal.svg" alt="" />
          <img src="https://images.g2crowd.com/uploads/report_medal/image/2659/medal.svg" alt="" />
          <img src="https://images.g2crowd.com/uploads/report_medal/image/2696/medal.svg" alt="" />
          <img src="https://images.g2crowd.com/uploads/report_medal/image/2640/medal.svg" alt="" />
          <img src="https://my.g2.com/assets/product-badges/users-love-us-2008b519df49af90dcfa7db4b5fe13c8ec24ced0348f0a6bd039711ad8bbffc7.svg" alt="" />
         </div>
      <div style={{display:"flex",margin:"auto",width:"500px",alignItems:"center"}} >
        <img style={{display:"inline-block",width:"30px",marginRight:"10px"}} src="https://nifty.pm/images/nifty-logo-compact.svg" alt="" />
       <p>Logo2023 © Nifty Technologies, Inc. All rights reserved.</p>

      </div>

      </div>
    
  
  </>
  )


}
export default SignUp;