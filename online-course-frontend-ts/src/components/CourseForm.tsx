import React from "react";
import {     ActionFunction, Form, json, redirect, useActionData, useNavigate, useNavigation } from "react-router-dom";
import { Course } from "../models/course.model";
import { getAuthToken } from "../utils/auth";

const CourseForm:React.FC<{ method:string, course?:Course }> = ({ method, course }) =>{
    const data = useActionData() as {errors:string[],};
    const navigate = useNavigate();
    const navigation = useNavigation();
  
    const isSubmitting = navigation.state === "submitting";
  
    function cancelHandler() {
      navigate("..");
    }
  
    return (
      <Form  method={method==='POST'? 'POST' : 'PATCH' }>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            name="name"
            required
            defaultValue={course ? course.name : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="url"
            className="form-control"
            name="image"
            required
            defaultValue={course ? course.image : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            className="form-control"
            type="date"
            name="date"
            required
            defaultValue={course ? course.date : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"

            rows={5}
            required
            defaultValue={course ? course.description : ""}
          />
        </div>
        <div>
          <button
            className="btn btn-danger mr-3"
            type="button"
            onClick={cancelHandler}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
        </div>
      </Form>
    );
  }
  
  export default CourseForm;
  type RequestParams = {
    courseId: string;
  }
  export  const action:ActionFunction<{ request: Request; params: RequestParams; }>  = async ({ request, params })=> {
    const method = request.method;
    const data = await request.formData();
  
    const courseData = {
      name: data.get("name"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description"),
      price: 100,
    };
  
    let url = "http://localhost:8080/api/v1/courses";
  
    if (method === "PATCH") {
      const courseId = params.courseId;
  
      url = "http://localhost:8080/api/v1/courses/" + courseId;
    }
  
    const token = getAuthToken();
    console.log(
      "method: " +
        method +
        "  url: " +
        url +
        " token: " +
        token +
        "data: " +
        JSON.stringify(courseData)
    );
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(courseData),
    });
  
    /* if (response.ok) {
      return response;
    }*/
  
    if (!response.ok) {
      throw json({ message: "Could not save course." }, { status: 500 });
    }
  
    return redirect("/courses");
  }
  