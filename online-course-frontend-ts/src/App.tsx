 
 import React from "react";
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import { ErrorPage } from './pages/Error';
import { checkAuthLoader, tokenLoader } from './utils/auth';
import { HomePage,loader as loadProjects } from './pages/Home';
import { action as manipulateCourseAction } from "./components/CourseForm";
import { CoursesRootLayout } from './pages/CoursesRoot';
import { 
  loader as coursesLoader,CoursesPage } from './pages/Courses';
  import CourseDetailPage, {
    loader as courseDetailLoader,
    action as deleteCourseAction,
  } from "./pages/CourseDetail";
import { EditCoursePage } from './pages/EditCourse';
import { NewCoursePage } from './pages/NewCourse';
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import { action as logoutAction } from "./pages/Logout";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import { About } from './pages/About';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "font-awesome/css/font-awesome.min.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage />,  loader:loadProjects},
      {
        path: "courses",
        element: <CoursesRootLayout />,
        children: [
          {
            index: true,

            element: <CoursesPage />,
            loader: coursesLoader,
          },
          {
            path: ":courseId",
            id: "course-detail",
            loader: courseDetailLoader,
            children: [
              {
                index: true,
                element: <CourseDetailPage />,
                action: deleteCourseAction,
              },

              {
                path: "edit",
                element: <EditCoursePage />,
                action: manipulateCourseAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <NewCoursePage />,
            action: manipulateCourseAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return  <RouterProvider router={router} />;
}

export default App;
