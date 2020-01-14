import React, { useContext } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { FormButton, FormStyles } from "../styles/styles";
import { fetchMusicData, selectGenerator } from "../utils/helpers";
import UserDataContext from "../contexts/userData";
import Select from "./Select";

export default function Form() {
  const { dispatch, state } = useContext(UserDataContext);
  let years = [];
  let maxData = [];

  years = selectGenerator(2015, new Date().getFullYear());
  years.push("All Time");

  maxData = selectGenerator(10, 50);

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
          <Select
            change={e => dispatch({ type: "addSlice", slice: e.target.value })}
            value={state.sliceValue}
            data={maxData}
          />
          <p> Artists and Songs from </p>
        </div>
        <div className="year-select">
          <Select
            change={e => dispatch({ type: "addYear", year: e.target.value })}
            value={state.year}
            data={years.reverse()}
          />
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
          <FormButton disabled>Show me my data</FormButton>
        </StylesProvider>
      )}
    </FormStyles>
  );
}
