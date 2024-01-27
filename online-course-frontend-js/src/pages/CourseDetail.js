import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  defer,
  Await,
  redirect,
  useNavigate,
} from "react-router-dom";
import React from "react";
import CourseItem from "../components/CourseItem";
import CoursesList from "../components/CoursesList";
import { getAuthToken } from "../util/auth";

function CourseDetailPage() {
  const { course, courses } = useRouteLoaderData("course-detail");
  const handleClickPage = (selected) => {
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
              clickPage={handleClickPage}
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

async function loadCourse(id) {
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

async function loadCourses(pageSize, pageNumber) {
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

export async function loader({ request, params }) {
  const id = params.courseId;

  return defer({
    course: await loadCourse(id),
    courses: loadCourses(12, 0),
  });
}

export async function action({ params, request }) {
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
