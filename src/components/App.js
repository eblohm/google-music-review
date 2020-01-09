import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Form from "./Form";
import MusicList from "./MusicList";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import {
  SectionStyles,
  SectionHeader,
  SiteHeader,
  theme
} from "../styles/styles";
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
      file: action.file
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
  }
}

function App() {
  const [state, dispatch] = React.useReducer(musicReducer, {
    loading: true,
    file: [],
    year: "",
    sliceValue: 10
  });
  const { isShowing, toggle } = useModal();

  const { loading, file, year, sliceValue } = state;

  if (loading) {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <UserDataProvider value={{ state, dispatch }}>
            <SiteHeader>Google Play Music History In Review</SiteHeader>
            <Form />
            <button onClick={toggle}>How does it work?</button>
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
          <SiteHeader>Google Play Music History In Review</SiteHeader>
          <SectionStyles>
            <SectionHeader>Most Popular Artists</SectionHeader>
            <MusicList musicData={artistData} />
          </SectionStyles>
          <SectionStyles>
            <SectionHeader>Most Popular Songs</SectionHeader>
            <MusicList musicData={songData} />
          </SectionStyles>
        </UserDataProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
