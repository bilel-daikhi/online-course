import {
  Link,
  useNavigate,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";

import React from "react";
function CourseItem({ course }) {
  const token = useRouteLoaderData("root");
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <div className="container">
      <div className="card">
        {token && (
          <div className="card-header text-right">
            <Link to="edit" className="mr-5 text-success">
              <i className="fa fa-pencil mr-1" aria-hidden="true"></i> Edit
            </Link>
            <Link onClick={startDeleteHandler} className="text-danger">
              <i className="fa fa-trash-o mr-1 " aria-hidden="true"></i>Delete
            </Link>
          </div>
        )}
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img src={course.image} alt={course.name} />
                </div>
              </div>
              <ul className="preview-thumbnail nav nav-tabs">
                <li className="active">
                  <a data-target="#pic-1" data-toggle="tab">
                    <img src={course.image} alt={course.name} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{course.name}</h3>
              <p className="vote">
                <strong>69%</strong> of buyers enjoyed this course!{" "}
                <strong>({course.votes} votes)</strong>
              </p>
              <div className="rating">
                <div className="stars">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <span className="review-no">41 reviews</span>
              </div>
              <p className="product-description">{course.description}</p>
              <h4 className="price">
                current price: <span>${course.price}</span>
              </h4>

              <h5 className="sizes">
                Technologies:
                <span className="size" data-toggle="tooltip" title="small">
                  Java
                </span>
                <span className="size" data-toggle="tooltip" title="medium">
                  JavaScript
                </span>
                <span className="size" data-toggle="tooltip" title="large">
                  SQL
                </span>
                <span className="size" data-toggle="tooltip" title="xtra large">
                  JSON
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
