import React from "react";

const Dropdown = (props) => {
  const changeHandler = (event) => props.onChange(event.target.value);
  return (
    <div className="dropdown">
      <label className="label" htmlFor="selectList">
        sort by
      </label>
      <select id="selectList" onChange={changeHandler}>
        <option defaultValue value="">
          click to see options
        </option>
        <option defaultValue value="title">
          title
        </option>
        <option value="slug">slug</option>
        <option value="id">id</option>
      </select>
    </div>
  );
};

export default Dropdown;
