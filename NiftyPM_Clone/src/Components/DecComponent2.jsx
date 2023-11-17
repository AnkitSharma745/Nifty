import React, { useState } from "react";
import './decComponent2.css'
function DecComponent2(){
     const[heading,setHeading] = useState("Engineering")
     const[content,setContent]  = useState("Let go of fragmented tools. Plan, track, and manage your workflows with award-winning ease — in one collaborative workspace.")
     const[l1,setL1] = useState("Real-time progress reporting with Milestones")
     const[l2,setL2]= useState("Custom development workflows with if/then rules")
     const[l3,setL3] = useState("Manage issues, bugs, and changes directly in one place")
     const[image,setImage] = useState("https://niftypm.com/_nuxt/img/large@1x.c481d6e.webp")
 
     function handleEngineering(){
         setHeading("Engineering")
         setContent("Let go of fragmented tools. Plan, track, and manage your workflows with award-winning ease — in one collaborative workspace.")
         setL1("Real-time progress reporting with Milestones")
        setL2("Custom development workflows with if/then rules") 
        setL3("Manage issues, bugs, and changes directly in one place")    
        setImage("https://niftypm.com/_nuxt/img/large@1x.c481d6e.webp") 
      }

     function handleSales(){
      setHeading("Sales")
      setContent("Empower your sales teams by adding flow to their work with real-time reporting and insights using automated workflows.")
      setL1("Track lead status and values for pipeline visibility")
      setL2("Track lead status and values for pipeline visibility") 
      setL3("Automate the creation of projects upon closing of leads")
      setImage("https://niftypm.com/_nuxt/img/large@1x.a9e1772.webp")
    }

     function handleMarketing(){
      
      setHeading("Marketing")
      setContent("Deliver better results with fewer tools. Manage tasks, campaigns, and marketing content with real-time collaboration in one place.")
      setL1("Deliver better results with fewer tools. Manage tasks, campaigns, and marketing content with real-time collaboration in one place.")
      setL2("Create & track marketing campaigns as Milestones") 
      setL3("Align content schedules using Calendar View for Tasks")
      setImage("https://niftypm.com/_nuxt/img/large@1x.10c81ee.webp")
     }

     function handleProduct(){
       
      setHeading("Product")
      setContent("Build better products with team alignment. Create clear product roadmaps and automate progress reporting as tasks are completed.")
      setL1("Prioritize & track feature sprints as Milestones")
      setL2("Build spec documents using Nifty or Google Docs") 
      setL3("Improve decision-making with custom Project Embeds")
      setImage("https://niftypm.com/_nuxt/img/large@1x.fade5e2.webp")

     }

     function handleClient(){
        
      setHeading("Client Management")
      setContent("Never lose a client due to poor communication again. Real-time collaboration to shorten feedback cycles along with automated progress reporting.")
      setL1("Instant messaging & one-click video meetings")
      setL2("Centralize files & expedite approvals with Proofing") 
      setL3("Sharable project boards for real-time progress reporting")
      setImage("https://niftypm.com/_nuxt/img/large@1x.0c3cfc6.webp")
       
     }
      
     function handleIT(){
        
      setHeading("IT")
      setContent("Streamline, centralize, and modernize your workflows. One app to manage your processes without letting anything fall through the cracks again.")
      setL1("Gather tickets using forms & prioritize resolutions")
      setL2("Automate ticket assignments with status assignees") 
      setL3("Plan project timelines & deployments using Roadmaps")
      setImage("https://niftypm.com/_nuxt/img/large@1x.37d8320.webp")
       
     }
     

  return(
     <>
     <div className="dec2-container">
      
     <div className="dec2-links">
       <ul>
        <li onClick={handleEngineering} >Engineering</li>
        <li onClick={handleSales} >Sales</li>
        <li onClick={handleMarketing} >Marketing</li>
        <li onClick={handleProduct} >Product</li>
        <li onClick={handleClient} >Client Management</li>
        <li onClick={handleIT} >IT</li>
       </ul>
     </div>
      <div className="dec2-content">
        <div className="dec2-content-left">
         <h1>{heading}</h1>
          <div className="h4-content">
          <p>{content}</p>

          </div>
          <div className="dec2-lists">
            <li>✅ {l1}</li>
            <li>✅ {l2}</li>
            <li>✅ {l3}</li>
          </div>
        </div>
        <div className="dec2-content-right">
        <img src={image} alt="Server Error" />

        </div>
      </div>




     </div>
     
     
     </>

  )
}
export default DecComponent2;