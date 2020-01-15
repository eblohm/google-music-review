import React from 'react';
import { SelectStyles } from '../styles/styles';

const Select = ({ change, value, data }) => (
  <SelectStyles onChange={change} value={value}>
    {data.map(val => (
      <option key={val} value={val}>
        {val}
      </option>
    ))}
  </SelectStyles>
);

export default Select;
