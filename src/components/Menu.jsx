import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "lightyellow", textDecoration: "none" } : {}
        }
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
      >
        About
      </NavLink>
      <NavLink
        to="contacts"
        className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
      >
        Contacts
      </NavLink>
      <NavLink
        to="courses"
        className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
      >
        Courses
      </NavLink>
    </nav>
  );
};

export default Menu;
