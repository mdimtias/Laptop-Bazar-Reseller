import React, { useEffect, useState } from "react";
import "./Course.css";
import { Link, useParams } from "react-router-dom";
const Course = (props) => {
  const [course, setCourse] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch("https://mocki.io/v1/70b86bb6-97ce-4dc1-8d33-c13471fa98d5")
      .then((res) => res.json())
      .then((data) => {
        const findById = data.courses.find(
          (blogData) => parseInt(blogData.id) === parseInt(id)
        );
        setCourse(findById);
      });
  }, [id]);
  return (
	<>
	<div className="section-course">
    <div className="container">
      <div className="course-info d-flex">
        <div className="service-text flex justify-content-center flex-col">
          <h2>{course?.title}</h2>
          <p>{course?.short_description}</p>
          <div className="owner-info d-flex align-items-center gap-2 p-2">
            <img className="w-25 rounded" src={course?.author.profile_img} alt="" />
            <h3>
              <span className="text-sm text-slate-300">Created By </span> <br />
              {course?.author.name}
            </h3>
          </div>
		  <p className="fw-bold p-2">Course Price: {course?.price}</p>
        </div>
        <div className="service-img flex align-items-center justify-center-center">
          <img
            src={course?.img}
            alt=""
          />
        </div>
      </div>
    </div>
	</div>
	<div className="container">
		<div className="long-description p-5">
			<p>{course?.long_description}</p>
		</div>
	</div>
	</>
  );
};

export default Course;
