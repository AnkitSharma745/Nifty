import React, { useState } from "react";


import './decComponent.css'


function DecComponent(){
 
    const[heading,setHeading] = useState("Set Goals & Timelines");
    const[para,setPara] = useState("Set a visual timeline for your big-picture goals and build team alignment by automating progress as tasks are completed.")
    const[image,setImage] = useState("https://niftypm.com/_nuxt/img/large@1x.45b9301.webp")
    const[img_Error,setImg_Error] = useState("Error")

        function handleRoadmaps(){
          setHeading("Set Goals & Timelines")
          setPara("Set a visual timeline for your big-picture goals and build team alignment by automating progress as tasks are completed. ")
          setImage("https://niftypm.com/_nuxt/img/large@1x.45b9301.webp")
           setImg_Error("Failed to load Image")
        }
        function handleTasks(){
          setHeading("Collaborate on Tasks")
          setPara("Flexibly organize, prioritize, and track daily work with a high level of detail using Kanban, List, Timeline, Calendar, and Swimlane views. ")
          setImage("https://niftypm.com/_nuxt/img/large@1x.6d97d38.webp")
          setImg_Error("Failed to load Image")
        }
        function handleDiscussions(){
            setHeading("Establish Knowledge Hub")
            setPara("Empower all members to share ideas, finalize specifications, & gather feedback in real-time with chat and one-click video calls. ")
              setImage("https://niftypm.com/_nuxt/img/large@1x.570191a.webp")
            setImg_Error("Failed to load Image")
        }
        function handleDocs(){
          setHeading("Create Docs & Wikis")
          setPara("Create beautiful docs, notes, and wikis for your projects and share with anyone. Nifty even integrates natively with Google Docs")
          setImage("https://niftypm.com/_nuxt/img/large@1x.e2a66e9.webp")
          setImg_Error("Failed to load Image")
        }
       function handleForms(){
          setHeading("Build Native Forms")
          setPara("Build beautiful forms to capture the data you need while automating submissions as tasks, docs, or project messages. ")
          setImage("https://niftypm.com/_nuxt/img/large@1x.5606171.webp")

          setImg_Error("Failed to load Image")
        }
        function handleReporting(){
          setHeading("Automate Reporting")
          setPara("Access automated progress reporting across all your projects and team activities to ensure operational clarity.")
          setImage("https://niftypm.com/_nuxt/img/large@1x.873068d.webp")

          setImg_Error("Failed to load Image")
        }

  return (
      <>
      
      <div className="container">
       <div className="dec-content">
        
       <div className="dec-links">
         <ul>
          <li onClick={handleRoadmaps} >Roadmaps</li>
          <li onClick={handleTasks} >Tasks</li>
          <li onClick={handleDiscussions}>Discussions</li>
          <li onClick={handleDocs} >Docs</li>
          <li onClick={handleForms}>Forms</li>
          <li onClick={handleReporting} >Reporting</li>
         </ul>

       </div>
        <div className="dec-heading">
          <h1>{heading}</h1>
        </div>
       <div className="dec-paragraph">
           <p style={{fontSize:"20px",marginTop:"-9px"}}>{para} <span style={{color:"#00b8a9",fontSize:"20px"}}>Learn more  </span> </p>
       </div> 
       
         <div className="dec-img">
          <img src={image} alt= {img_Error} />
         </div>
       </div>
      </div>
      
      
      
      </>

  )  
}

export default DecComponent;