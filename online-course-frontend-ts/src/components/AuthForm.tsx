import React from "react";
import { Form, Link, useActionData, useNavigation, useSearchParams } from "react-router-dom";
 

export const AuthForm=()=>{
    const data = useActionData() as {errors?:string[],message:string};
    const navigation = useNavigation();
  
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get("mode") === "login";
    const isSubmitting = navigation.state === "submitting";
    return (
        <>
		 <div className="d-flex justify-content-center">
         <div className="col-md-6 col-sm-12">
          <Form method="post">
            <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
            {data && data.errors && (
              <ul>
                {Object.values(data.errors).map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            )}
            {data && data.message && <p>{data.message}</p>}
    
            <div className="form-group form-check">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                className="form-control"
                required
              />
            </div>
    
            <div className="form-group form-check">
              <label htmlFor="image">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                className="form-control"
                required
              />
            </div>
            <div className="center">
              <Link className="ml-5" to={`?mode=${isLogin ? "signup" : "login"}`}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>{" "}
                {isLogin ? "Create new user" : "Login"}
              </Link>
              <button className="btn btn-primary ml-5" disabled={isSubmitting}>
                {isLogin ? (
                  <i className="fa fa-sign-in mr-1" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-user-plus mr-1" aria-hidden="true"></i>
                )}
                {isSubmitting ? "Submitting..." : "Save"}
              </button>
            </div>
          </Form>
		  </div>
      </div>
        </>
      );
    }
    
 
 