import React from "react";

const Select = ({ change, value, data }) => (
  <select onChange={change} value={value}>
    {data.map(val => (
      <option key={val} value={val}>
        {val}
      </option>
    ))}
  </select>
);

export default Select;
