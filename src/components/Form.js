import React, { useContext } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import FormStyles, { FormUpload, FormButton } from "../styles/FormStyles";
import { fetchMusicData, selectGenerator } from "../utils/helpers";
import UserDataContext from "../contexts/userData";
import Select from "./Select";

export default function Form() {
  const { dispatch, state } = useContext(UserDataContext);
  let years = [];
  let maxData = [];

  years = selectGenerator(2013, new Date().getFullYear());
  years.push("All Time");

  maxData = selectGenerator(10, 50);

  return (
    <FormStyles>
      <div className="file-upload">
        {state.error ? <p className="form-error">{state.error}</p> : ""}
        <label>Select your Google Play Activity File</label>
        <FormUpload
          type="file"
          className={`gpm-file-uploader ${state.error ? "file-error" : ""}`}
          onChange={e => {
            fetchMusicData(URL.createObjectURL(e.target.files[0]))
              .then(file => dispatch({ type: "addFile", file }))
              .catch(error =>
                dispatch({
                  type: "error",
                  error: "You must select a JSON file!"
                })
              );
          }}
        />
      </div>
      <div className="data-selector">
        <div className="slice-select">
          <label>Show My Top</label>
          <Select
            change={e => dispatch({ type: "addSlice", slice: e.target.value })}
            value={state.sliceValue}
            data={maxData}
          />
        </div>
        <div className="year-select">
          <label>Artists and Songs from</label>
          <Select
            change={e => dispatch({ type: "addYear", year: e.target.value })}
            value={state.year}
            data={years.reverse()}
          />
        </div>
      </div>
      {state.file.length !== 0 ? (
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
