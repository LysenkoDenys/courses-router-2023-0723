import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import courses from "../data/courses";
// import NotFound from "./NotFound";

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.slug === params.courseSlug);
  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course, navigate]);

  // Simply show NotFound component
  // if (!course) {
  //   return <NotFound />;
  // }

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      {/* <Link to="/courses">Back to the courses</Link> */}
      {/* or: */}
      <Link to=".." relative="path">
        Back to the courses
      </Link>
    </>
  );
};

export default SingleCourse;
