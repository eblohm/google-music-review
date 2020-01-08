import React, { useState, useContext } from "react";
import { fetchMusicData } from "../utils/helpers";
import UserDataContext from "../contexts/userData";

export default function Form() {
  const { dispatch, state } = useContext(UserDataContext);
  const min = 2015;
  const max = new Date().getFullYear();
  let years = [];

  for (let i = min; i <= max; i++) {
    years.push(i);
  }

  return (
    <>
      <div className="file-upload">
        <label>Upload Your Google Play Music Activity File</label>
        <input
          type="file"
          className="gpm-file-uploader"
          onChange={e => {
            fetchMusicData(URL.createObjectURL(e.target.files[0]))
              .then(data => dispatch({ type: "addFile", data }))
              .catch(({ message }) =>
                dispatch({ type: "error", error: message })
              );
          }}
        />
      </div>
      <select
        label="Select Year"
        onChange={e => dispatch({ type: "addYear", year: e.target.value })}
        value={state.year}
      >
        <option disabled={true} value="">
          Select A Year
        </option>
        {years.reverse().map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <button type="button" onClick={() => dispatch({ type: "getData" })}>
        Button
      </button>
    </>
  );
}
