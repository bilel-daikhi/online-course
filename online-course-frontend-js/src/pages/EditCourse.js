import { useRouteLoaderData } from "react-router-dom";
import React from "react";
import CourseForm from "../components/CourseForm";

function EditCoursePage() {
  const data = useRouteLoaderData("course-detail");
  console.log("data: " + data.course);
  return <CourseForm method="PATCH" course={data.course} />;
}

export default EditCoursePage;
