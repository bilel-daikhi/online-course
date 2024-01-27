import React from "react";
import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { getTokenDuration } from "../utils/auth";
import MainNavigation from "../components/MainNavigation";
import { Footer } from "./Footer";
 

export const RootLayout =()=>{
    const token = useLoaderData();
    const submit = useSubmit();
    // const navigation = useNavigation();
    useEffect(() => {
      if (!token) {
        return;
      }
  
      if (token === "EXPIRED") {
        submit(null, { action: "/logout", method: "post" });
        return;
      }
  
      const tokenDuration = getTokenDuration();
  
      setTimeout(() => {
        submit(null, { action: "/logout", method: "post" });
      }, tokenDuration);
    }, [token, submit]);
  
    return (
      <>
        <MainNavigation />
        <div className="container-fluid" >
          <div>
             
            <Outlet />
          </div>
        </div>
        <Footer/>
      </>
    );
  }
  
  export default RootLayout;
  