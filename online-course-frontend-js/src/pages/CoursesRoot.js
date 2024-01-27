import { Outlet } from "react-router-dom";

import CoursesNavigation from "../components/CoursesNavigation";
import React from "react";
function CoursesRootLayout() {
  return (
    <>
      <CoursesNavigation />
      <Outlet />
    </>
  );
}

export default CoursesRootLayout;
