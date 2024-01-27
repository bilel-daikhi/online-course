import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import { Course } from "../models/course.model";
import CourseForm from "../components/CourseForm";

export const EditCoursePage=()=>{
    const data = useRouteLoaderData("course-detail") as {course:Course};
    console.log("data: " + data.course);
    return <CourseForm method="PATCH" course={data.course} />;
  }
  