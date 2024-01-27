import { Suspense } from "react";
import {
  useLoaderData,
  json,
  defer,
  Await,
  useNavigate,
  redirect,
} from "react-router-dom";
import React from "react";
import CoursesList from "../components/CoursesList";

function CoursesPage() {
  const { courses, setCourses } = useLoaderData();
  const navigate = useNavigate();

  const handleClickPage = (selected) => {
    console.log("selected: " + selected);
    navigate("/courses?pageNumber=" + selected);
  };

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={courses}>
        {(loadedCourses) => (
          <CoursesList
            data={loadedCourses}
            clickPage={handleClickPage}
            isPagination={true}
            title="All Courses"
          />
        )}
      </Await>
    </Suspense>
  );
}

export default CoursesPage;

async function loadCourses(size = 12, page) {
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

export function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const pageNumber = searchParams.get("pageNumber") || 0;

  return defer({
    courses: loadCourses(12, pageNumber),
  });
}
