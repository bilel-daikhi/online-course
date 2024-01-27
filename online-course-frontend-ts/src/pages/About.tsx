import React from "react";
import { Link } from "react-router-dom";
export const About:React.FC=()=>{
    return (
        <React.Fragment>
      <section id="contact">
        <div className="container mb-5 mt-5">
          <h3
            className="text-center text-uppercase"
            style={{ color: "#002aff" }}
          >
            About
          </h3>
          <p className="text-center w-75 m-auto">
          This React (Typescript)  and Spring Boot web application combines a secure authentication mechanism using JWT tokens with online course management.
          </p>
          <p className="text-center w-75 m-auto">
            This project offers a brief journey into the react and spring boot capabilities.
          </p>
          <h3>Features:</h3>
          <ul className="list-group">
  <li className="list-group-item">
    <span className="badge bg-primary text-light mr-2">User Authentication:</span>
    The application provides a secure authentication experience. Users can register, log in, and manage courses.
  </li>
  <li className="list-group-item">
    <span className="badge bg-primary text-light mr-2">Protected Routes:</span>
    Certain routes and functionalities are protected and require user authentication. Unauthorized users are redirected to the login page.
     </li>
  <li className="list-group-item">
    <span className="badge bg-primary text-light mr-2">JWT Token Handling:</span>
    Upon successful authentication, the frontend receives a JWT (JSON Web Token) from the backend (Spring boot endpoints).
     This token is securely stored in the browser, and subsequent requests to the backend include this token for authentication.
   </li>
  <li className="list-group-item">
    <span className="badge bg-primary text-light mr-2">Course Listing & pagination:</span>
    Public users can access a dynamic and interactive list of online courses, featuring details such as course title, price and description.
     </li>
  <li className="list-group-item">
    <span className="badge bg-primary text-light mr-2">Course Details:</span>
    Clicking on a specific course provides in-depth details, including course content, and other similar courses.
    </li>
    <li className="list-group-item">
    <span className="badge bg-primary text-light mr-2">Create, Update, and Delete Courses:</span>
    Authorized users, with jwt token, can create new courses, update existing ones, and delete courses. These operations are carried out securely by communicating with the backend. 
    </li>
  
</ul>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <div className="card border-0">
                <div className="card-body text-center">
                  <i className="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                  <h4 className="text-uppercase mb-5">call us</h4>
                  <p>+21622605020</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <div className="card border-0">
                <div className="card-body text-center">
                  <i className="fa fa-github fa-5x mb-3" aria-hidden="true"></i>
                  <h4 className="text-uppercase mb-5">GitHub</h4>
                  <Link to="https://github.com/bilel-daikhi" target="_blank">
                    Go to My GitHub
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <div className="card border-0">
                <div className="card-body text-center">
                  <i
                    className="fa fa fa-linkedin fa-5x mb-3"
                    aria-hidden="true"
                  ></i>
                  <h4 className="text-uppercase mb-5"> LinkedIn</h4>
                  <Link
                    to="https://www.linkedin.com/in/bilel-daikhi"
                    target="_blank"
                  >
                    Go to My LinkedIn{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-5">
              <div className="card border-0">
                <div className="card-body text-center">
                  <i
                    className="fa fa-envelope-o fa-5x mb-3"
                    aria-hidden="true"
                  ></i>
                  <h4 className="text-uppercase mb-5">email</h4>
                  <p>bilel.daikhi@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
      );
    };