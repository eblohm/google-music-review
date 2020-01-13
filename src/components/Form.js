import React, { useContext } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { FormButton, FormStyles } from "../styles/styles";
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

  years.push("All Time");

  for (let j = 10; j <= 50; j++) {
    maxData.push(j);
  }

  return (
    <FormStyles>
      <div className="file-upload">
        <label>Select your Google Play Activity File</label>
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
      <div className="data-selector">
        <div className="slice-select">
          <label>Show My Top </label>
          <select
            onChange={e =>
              dispatch({ type: "addSlice", slice: e.target.value })
            }
            value={state.sliceValue}
          >
            {maxData.map(val => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
          <p> Artists and Songs from </p>
        </div>
        <div className="year-select">
          <select
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
        </div>
      </div>
      {state.year !== "" && state.file !== [] ? (
        <StylesProvider injectFirst>
          <FormButton onClick={() => dispatch({ type: "getData" })}>
            Show me my data!
          </FormButton>
        </StylesProvider>
      ) : (
        <StylesProvider injectFirst>
          <FormButton disabled>Show me my data!</FormButton>
        </StylesProvider>
      )}
    </FormStyles>
  );
}
