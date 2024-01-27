import { NavLink, useRouteLoaderData } from "react-router-dom";

import React from "react";
function CoursesNavigation() {
  const token = useRouteLoaderData("root");

  return (
    <header>
      <ul className="nav nav-tabs justify-content-center mt-5 mb-5">
        <li className="nav-item">
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "nav-link   bg-primary text-white" : "nav-link"
            }
            end
          >
            All Courses
          </NavLink>
        </li>
        {token && (
          <li className="nav-item ml-2">
            <NavLink
              to="/courses/new"
              className={({ isActive }) =>
                isActive ? "nav-link bg-primary text-white" : "nav-link"
              }
            >
              New Course
            </NavLink>
          </li>
        )}
      </ul>
    </header>
  );
}

export default CoursesNavigation;
