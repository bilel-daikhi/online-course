import React from "react";
function PageContent({ name, children }) {
  return (
    <React.Fragment>
      <h1>{name}</h1>
      {children}
    </React.Fragment>
  );
}

export default PageContent;
