import React from "react";
import ReactPaginate from "react-paginate";
import { Course } from "../models/course.model";
import CourseCard from "./CourseCard";
import classes from "./Pagination.module.css"
import {  useNavigate } from "react-router-dom";

const CoursesList:React.FC<{isPagination:boolean,title:string,data:{courses:Course[],currentPage:number,totalPages:number}}> =(props)=>{
  const navigate = useNavigate();
  const handlePageClick = (event:any) => {
    
      // props.clickPage.bind(null,event.selected);
       //console.log("selected: " + selected);
       navigate("/courses?pageNumber=" + event.selected);
      };
      //clickPage:(id:string)=>{},
      return (
        <div className="container">
          <h3 className="display-5 mb-5 text-center">{props.title}</h3>
          <div className="row">
            {props.data.courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          {props.isPagination && (
            <div className="row justify-content-center">
              <ReactPaginate
                containerClassName={classes.pagination}
                activeClassName={classes.active}
                pageClassName={classes.pageitem}
                initialPage={props.data.currentPage}
                onPageChange={handlePageClick}
                breakLabel="..."
                pageCount={props.data.totalPages}
                previousLabel={<button className='btn btn-link'>Previous</button>}
                nextLabel={<button className='btn btn-link'>Next</button>}
              
              />
            </div>
          )}
        </div>
      );
    }
    
    export default CoursesList;
    