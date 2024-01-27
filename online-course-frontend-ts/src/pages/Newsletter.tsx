import React from "react";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { PageContent } from "../components/PageContent";

 const NewsletterPage=()=>{
    return (
        <PageContent title="Join our awesome newsletter!">
          <NewsletterSignup />
        </PageContent>
      );
    }
     
    
    export async function action({ request }:{request:Request}) {
      const data = await request.formData();
      const email = data.get("email");
    
      // send to backend newsletter server ...
    
      return { message: "Signup successful!" };
    }

    export default NewsletterPage;