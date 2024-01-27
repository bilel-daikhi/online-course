import React from "react";
import { ActionFunction, Await, LoaderFunction, defer, json, redirect, useRouteLoaderData } from "react-router-dom";
import { Course } from "../models/course.model";
import { Suspense } from "react";
import CourseItem from "../components/CourseItem";
import CoursesList from "../components/CoursesList";
import { getAuthToken } from "../utils/auth";

export const CourseDetailPage =()=>{
    const { course, courses } = useRouteLoaderData("course-detail") as {course:Course,courses:Course[]};
    const handleClickPage = (selected:string) => {
      console.log("selected: " + selected);
    };
  
    return (
      <>
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
          <Await resolve={course}>
            {(loadedCourse) => <CourseItem course={loadedCourse} />}
          </Await>
        </Suspense>
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
          <Await resolve={courses}>
            {(loadedCourses) => (
              <CoursesList
                data={loadedCourses}
               // clickPage={handleClickPage.bind(null, event.selected)}
                isPagination={false}
                title="Other Courses"
              />
            )}
          </Await>
        </Suspense>
      </>
    );
  }
  
  export default CourseDetailPage;
  
  async function loadCourse(id:string) {
    const response = await fetch("http://localhost:8080/api/v1/courses/" + id);
  
    if (!response.ok) {
      throw json(
        { message: "Could not fetch details for selected course." },
        {
          status: 500,
        }
      );
    } else {
      const resData = await response.json();
  
      return resData;
    }
  }
  
  async function loadCourses(pageSize:string, pageNumber:string) {
    const response = await fetch(
      "http://localhost:8080/api/v1/courses?" +
        new URLSearchParams({
          page: pageNumber,
          size: pageSize,
        })
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
 
  type RequestParams = {
    courseId: string;
  }
  export  const loader:LoaderFunction<{request:Request,params:RequestParams}>=async ({ request, params })=> {
    const id = params.courseId;
    const pageSize:string ='12';
    return defer({
      course: await loadCourse(id),
      courses: loadCourses(pageSize, '0'),
    });
  }
  
  export  const action:ActionFunction<{ request: Request; params: RequestParams; }> = async ({ params, request })=> {
    const courseId = params.courseId;
  
    const token = getAuthToken();
    const response = await fetch(
      "http://localhost:8080/api/v1/courses/" + courseId,
      {
        method: request.method,
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log("response.ok: " + response.ok);
    if (!response.ok) {
      throw json(
        { message: "Could not delete course." },
        {
          status: 500,
        }
      );
    }
  
    console.log("delete finished!");
    return redirect("/courses");
  }
  