import PageContent from "../components/PageContent";
import React, { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import ProjectsCarousel from "./Carousel";
function HomePage() {
  const { projects } = useLoaderData();
  return (
    <PageContent title="Welcome!">
      <h1 style={{ textAlign: "center" }} className="mt-5 mb-5">
        Browse all our amazing courses!
      </h1>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center mt-5 mb-5">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
      >
        <Await resolve={projects}>
          {(loadedCourses) => <ProjectsCarousel projects={loadedCourses} />}
        </Await>
      </Suspense>
    </PageContent>
  );
}

export default HomePage;

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
  let projects = [
    ...resData.map((item) => {
      let newProject = item;

      if (item.images) {
        let imageLanding = item.images?.filter(
          (landing) => landing.landing === 1
        )[0];
        newProject.landing = imageLanding;
      }
      return newProject;
    }),
  ];

  return projects;
}

export const loader = async () => {
  return defer({
    projects: loadProjects(),
  });
};
