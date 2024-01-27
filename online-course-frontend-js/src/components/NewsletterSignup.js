import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

import React from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className="form-inline my-2 my-lg-0"
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        className="form-control mr-sm-2"
      />
      <button className="btn btn-outline-success my-2 my-sm-0">Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
