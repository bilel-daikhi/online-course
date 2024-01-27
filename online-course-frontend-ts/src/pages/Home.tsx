import React, { Suspense } from "react";
import { PageContent } from "../components/PageContent";
import { Await, LoaderFunction, defer, json, useLoaderData } from "react-router-dom";
import {   SBSAProject } from "../models/project.model";
import { ProjectsCarousel } from "./Carousel";
 

export const HomePage =()=>{
  const { projects } = useLoaderData() as {projects:SBSAProject[]};
  
 
return (
        <PageContent title="Welcome!" >
          <h1 style={{ textAlign: "center" }} className="mt-3 mb-3">Browse all our amazing courses!</h1>
          <Suspense fallback={<div className="d-flex justify-content-center"><div className="spinner-border text-primary" role="status">
  <span className="sr-only">Loading...</span>
</div></div>}>
        <Await resolve={projects}>
        {(loadedCourses) => (
          <div className="mt-3 mb-3">
          <ProjectsCarousel projects={loadedCourses} />
          </div>
          )}
          
          </Await>
          </Suspense>
        </PageContent>
      );
    }


 async function loadProjects() {
      const response = await fetch(
        "https://bilel-daikhi-portfolio-default-rtdb.europe-west1.firebasedatabase.app/projects.json" 
      );
    
      if (!response.ok) {
        throw json(
          { message: "Could not fetch projects." },
          {
            status: 500,
          }
        );
      }  

        const resData = await response.json();
        let projects:SBSAProject[]=[...resData.map((item:any)=>{
           
          let newProject:SBSAProject;
          newProject=item;
          if(item.images){
          let imageLanding=item.images?.filter(landing=>landing.landing===1)[0];
        
          newProject.landing=imageLanding
            }
          return newProject;
        })]
    
        return projects;
       
    }
   
    
    export  const loader:LoaderFunction=async ()=> {

      return defer({
       
        projects: loadProjects(),
      });
    }
    
    