import React from "react";
import { Outlet } from "react-router-dom";
import CoursesNavigation from "../components/CoursesNavigation";

export const CoursesRootLayout=()=>{
    return (
        <>
          <CoursesNavigation />
          <Outlet />
        </>
      );
    }