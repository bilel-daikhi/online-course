import React from "react";
import { Link, NavLink, useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { PageContent } from "../components/PageContent";

export const ErrorPage=()=>{
    const error:any = useRouteError();

    let title:string = "An error occurred!";
    let message:string = "Something went wrong!";
  
    if (error.status === 500) {
      message = error.data.message;
    }
  
    if (error.status === 404) {
      title = "Not found!";
      message = "Could not find resource or page.";
    }
  
    return (
      <>
        <MainNavigation />
        <PageContent title={title}>
         
          <div className="container">
    <div className="row ">
        <div className="col-md-12">
            <div className="error-template">
                <h1>
                    Oops!</h1>
                <div className="error-details">
                {message}
                </div>
                <div className="error-actions">
                    <Link to="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                        Take Me Home </Link>
                </div>
            </div>
        </div>
    </div>
</div>

        </PageContent>
      </>
    );
  }
  