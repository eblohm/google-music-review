import React, { useContext } from "react";
import { fetchMusicData } from "../utils/helpers";
import UserDataContext from "../contexts/userData";

export default function Form() {
  const { dispatch, state } = useContext(UserDataContext);
  const min = 2015;
  const max = new Date().getFullYear();
  let years = [];
  let maxData = [];

  for (let i = min; i <= max; i++) {
    years.push(i);
  }

  for (let j = 10; j <= 50; j++) {
    maxData.push(j);
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
              .then(file => dispatch({ type: "addFile", file }))
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
      <select
        label="Most Amount"
        onChange={e => dispatch({ type: "addSlice", slice: e.target.value })}
        value={state.sliceValue}
      >
        {maxData.map(val => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
      {state.year !== "" && state.file !== [] ? (
        <button type="button" onClick={() => dispatch({ type: "getData" })}>
          Show me my data!
        </button>
      ) : (
        <button
          disabled
          type="button"
          onClick={() => dispatch({ type: "getData" })}
        >
          Show me my data!
        </button>
      )}
    </>
  );
}
