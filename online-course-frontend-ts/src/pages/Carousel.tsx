import React from "react"
import { SBSAProject } from "../models/project.model"
import classes from "./Carousel.module.css";
 
import Carousel from "react-bootstrap/Carousel"; 
//{ projects.map(project=>{return ( <CarouselItem key={project.id} project={project}/>)})}
export const ProjectsCarousel:React.FC<{projects:SBSAProject[]}>=({projects})=>{
   
   
   return (<>

   {  
    <div className="d-flex justify-content-center">
<Carousel style={{width:'700px'}} >
  {projects.map(project=>{return ( 
    project.landing &&   <Carousel.Item key={project.id} className={classes.drk} >
    <img
    style={{width:'700px'}}
      src={project.landing.url}
      alt={project.name}
    />
    <Carousel.Caption >
      <h3>{project.name}</h3>
      <p>{project.subName_en}</p>
    </Carousel.Caption>
  </Carousel.Item>
   
  
  )})}
  
  </Carousel>
  </div>
  }
    </>)
}

/*

       */