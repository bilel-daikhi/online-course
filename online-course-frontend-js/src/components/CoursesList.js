// import { useLoaderData } from 'react-router-dom';
import "./PaginationWithLibrary.css";
import React from "react";
import CourseCard from "./CourseCard";
import ReactPaginate from "react-paginate";
function CoursesList(props) {
  const handlePageClick = (event) => {
    props.clickPage(event.selected);
  };
  return (
    <div className="container">
      <h3 className="display-5 mb-5 text-center">{props.title}</h3>
      <div className="row">
        {props.data.courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      {props.isPagination && (
        <div className="row justify-content-center">
          <ReactPaginate
            containerClassName="pagination"
            activeClassName="activeLink text-light"
            pageClassName="page-item"
            initialPage={props.data.currentPage}
            onPageChange={handlePageClick}
            breakLabel="..."
            pageCount={props.data.totalPages}
            previousLabel={
              <button className="btn btn-primary">Previous</button>
            }
            nextLabel={<button className="btn btn-primary">Next</button>}
          />
        </div>
      )}
    </div>
  );
}

export default CoursesList;
