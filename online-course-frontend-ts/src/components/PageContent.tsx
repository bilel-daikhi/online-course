import React from "react";

export const PageContent:React.FC<{title?:string,name?:string,children:any}> =({ name, children })=>{
    return (
        <React.Fragment>
            
          <h1>{name}</h1>
          <div>
          {children}
          </div>
        </React.Fragment>
      );
    }