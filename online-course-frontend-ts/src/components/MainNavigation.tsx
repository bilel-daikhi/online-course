import React from "react";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import { NewsletterSignup } from "./NewsletterSignup";
import logo from "../assets/icon.png";
const MainNavigation =()=>{
    const token = useRouteLoaderData("root");

    return (
      <header>
        <nav id="navbar" className="navbar navbar-expand-md navbar-dark bg-dark">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " navbar-brand nav-link active"
                : " navbar-brand nav-link"
            }
            end
          >
            <img src={logo} alt="Home" />
          </NavLink>
  
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Courses
                </NavLink>
              </li>
  
              <li className="nav-item">
                <NavLink
                  to="/newsletter"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Newsletter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
  
              {!token && (
                <li className="nav-item">
                  <NavLink
                    to="/auth?mode=login"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <i className="fa fa-fw fa-user"></i> Authentication
                  </NavLink>
                </li>
              )}
              {token && (
                <li className="nav-item">
                  <Form action="/logout" method="post">
                    <button className="btn btn-danger">Logout</button>
                  </Form>
                </li>
              )}
            </ul>
  
            <NewsletterSignup />
          </div>
        </nav>
      </header>
    );
  }
  
  export default MainNavigation;
  