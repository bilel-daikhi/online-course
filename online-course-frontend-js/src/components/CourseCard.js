import { Link } from "react-router-dom";
import React from "react";
const CourseCard = ({ course }) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-grid4">
        <div className="product-image4">
          <Link to={`/courses/${course.id}`}>
            <img className="pic-1" src={course.image} alt={course.name} />
            <img className="pic-2" src={course.image} alt={course.name} />
          </Link>
          <ul className="social">
            <li>
              <Link to={`/courses/${course.id}`} data-tip="  View">
                <i className="fa fa-eye"></i>
              </Link>
            </li>
          </ul>

          {course.new && <span className="product-new-label">New</span>}

          {course.new == false && (
            <span className="product-discount-label">-{course.reduction}%</span>
          )}
        </div>
        <div className="product-content">
          <h3 className="title">
            <Link to={`/courses/${course.id}`}>{course.name}</Link>
          </h3>
          <div className="price">${course.price}</div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
