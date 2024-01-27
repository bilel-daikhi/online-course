import React from "react";
import { Await, defer, json, useLoaderData, useNavigate } from "react-router-dom";
import { Course } from "../models/course.model";
import { Suspense } from "react";
import CoursesList from "../components/CoursesList";

export const CoursesPage =()=>{
    const { courses } = useLoaderData() as {courses:Course[]};
  
 
    return (
      <Suspense fallback={<div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>}>
        <Await resolve={courses}>
          {(loadedCourses) => (
            <CoursesList
              data={loadedCourses}
             // clickPage={handleClickPage}
              isPagination={true}
              title="All Courses"
            />
          )}
        </Await>
      </Suspense>
    );
  }
   
  
  async function loadCourses(size = '12', page:string) {
    const response = await fetch(
      "http://localhost:8080/api/v1/courses?" +
        new URLSearchParams({
          page: page,
          size: size,
        }),
      {}
    );
  
    if (!response.ok) {
      throw json(
        { message: "Could not fetch courses." },
        {
          status: 500,
        }
      );
    } else {
      const resData = await response.json();
      return resData;
    }
  }
  
  export function loader({ request }:{request:Request}) {
    const searchParams = new URL(request.url).searchParams;
    const pageNumber = searchParams.get("pageNumber") || '0';
  
    return defer({
      courses: loadCourses('12', pageNumber),
    });
  }
  