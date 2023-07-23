import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import courses from "../data/courses";
import Dropdown from "./Dropdown";

// const SORT_KEYS = ["title", "slug", "id"];

// dynamic keys of the array of objects (courses)=============================================
const arrNew = courses.map((element) => {
  return Object.keys(element);
});
const arr1d = [].concat(...arrNew);
const SORT_KEYS = [...new Set(arr1d)];
// ===========================================================================================

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = queryString.parse(location.search);

  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );
  // const [optionValue, setOptionValue] = useState("");

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(".");
      setSortKey(undefined);
      setSortedCourses([...courses]);
    }
  }, [sortKey, navigate]);

  const handleChange = (event) => {
    navigate({
      search: `sort=${event}`,
    });
    setSortKey(event);
    setSortedCourses(sortCourses(courses, event));
  };

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : "Courses"}</h1>
      <Dropdown onChange={handleChange} />
      {sortedCourses.map((course) => {
        return (
          <div key={course.id}>
            <Link to={course.slug} className="courseLink">
              {course.title}
            </Link>
          </div>
        );
      })}

      <Outlet />
    </>
  );
};

export default Courses;
