import React from 'react';
import Form from './Form';
import MusicList from './MusicList';
import { UserDataProvider } from '../contexts/userData';
import { loopMusicData } from '../utils/helpers';

function musicReducer(state, action) {
  if (action.type === 'addFile') {
    return {
      ...state,
      file: action.file,
    };
  } else if (action.type === 'addYear') {
    return {
      ...state,
      year: action.year,
    };
  } else if (action.type === 'addSlice') {
    return {
      ...state,
      sliceValue: parseInt(action.slice),
    };
  } else if (action.type === 'getData') {
    return {
      ...state,
      loading: false,
    };
  }
}

function App() {
  const [state, dispatch] = React.useReducer(musicReducer, {
    loading: true,
    file: [],
    year: '',
    sliceValue: 10,
  });

  const { loading, file, year, sliceValue } = state;

  if (loading) {
    return (
      <UserDataProvider value={{ state, dispatch }}>
        <Form />
      </UserDataProvider>
    );
  }

  const [artistData, songData] = loopMusicData(file, year, sliceValue);

  console.log(JSON.stringify(artistData));

  return (
    <UserDataProvider value={{ state, dispatch }}>
      <MusicList musicData={artistData} />
      <MusicList musicData={songData} />
    </UserDataProvider>
  );
}

export default App;
