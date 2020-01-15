import React from "react";
import { FormItem, FormSelect } from "../styles/FormStyles";

const Select = ({ change, value, data }) => (
  <FormSelect onChange={change} value={value}>
    {data.map(val => (
      <FormItem key={val} value={val}>
        {val}
      </FormItem>
    ))}
  </FormSelect>
);

export default Select;
