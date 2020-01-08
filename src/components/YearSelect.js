import React, { useContext } from "react";
import UserDataContext from "../contexts/userData";

export default function YearSelect(setYear, year) {
  const { dispatch } = useContext(UserDataContext);
  const min = 2015;
  const max = new Date().getFullYear();
  let years = [];

  for (let i = min; i <= max; i++) {
    years.push(i);
  }

  console.log(years);

  return (
    <select
      label="Select Year"
      onChange={e => setYear(e.target.value)}
      value={year}
    >
      {years.reverse().map(year => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}
