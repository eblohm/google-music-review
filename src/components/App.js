import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Form from "./Form";
import MusicList from "./MusicList";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import { SiteHeader, theme } from "../styles/styles";
import { FormButton } from "../styles/FormStyles";
import { ModalActivator } from "../styles/ModalStyles";
import ResultsStyles, {
  ResultsHeader,
  ResultsSection
} from "../styles/ResultsStyles";
import { UserDataProvider } from "../contexts/userData";
import { loopMusicData } from "../utils/helpers";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  body {
    background-color: hsl(120, 2%, 88%);
    font-family: 'Muli', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
`;

function musicReducer(state, action) {
  if (action.type === "addFile") {
    return {
      ...state,
      file: action.file,
      error: null
    };
  } else if (action.type === "addYear") {
    return {
      ...state,
      year: action.year
    };
  } else if (action.type === "addSlice") {
    return {
      ...state,
      sliceValue: parseInt(action.slice)
    };
  } else if (action.type === "getData") {
    return {
      ...state,
      loading: false
    };
  } else if (action.type === "reset") {
    return {
      loading: true,
      file: [],
      year: "All Time",
      sliceValue: 10
    };
  } else if (action.type === "error") {
    return {
      ...state,
      error: action.error
    };
  }
}

function App() {
  const [state, dispatch] = React.useReducer(musicReducer, {
    loading: true,
    file: [],
    year: "All Time",
    sliceValue: 10,
    error: null
  });
  const { isShowing, toggle } = useModal();

  const { loading, file, year, sliceValue } = state;

  if (loading) {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <UserDataProvider value={{ state, dispatch }}>
            <SiteHeader>Google Play Music History</SiteHeader>
            <Form />
            <ModalActivator onClick={toggle}>How does it work?</ModalActivator>
            <Modal isShowing={isShowing} hide={toggle} />
          </UserDataProvider>
        </ThemeProvider>
      </>
    );
  }

  const [artistData, songData] = loopMusicData(file, year, sliceValue);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <UserDataProvider value={{ state, dispatch }}>
          <SiteHeader>Google Play Music History</SiteHeader>
          <ResultsStyles>
            <ResultsSection>
              <ResultsHeader>Most Popular Artists</ResultsHeader>
              <MusicList musicData={artistData} />
            </ResultsSection>
            <ResultsSection>
              <ResultsHeader>Most Popular Songs</ResultsHeader>
              <MusicList musicData={songData} />
            </ResultsSection>
          </ResultsStyles>
          <FormButton
            className="reset-button"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </FormButton>
        </UserDataProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
