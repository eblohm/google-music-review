import React, { useState, useEffect } from "react";
import Form from "./Form";
import YearSelect from "./YearSelect";
import { UserDataProvider } from "../contexts/userData";

const countInfo = (originalArray, dataType) => {
  let returnData = [];

  // First, create an array with no duplicate info
  let uniqueArray = originalArray.reduce((acc, current) => {
    let x = "";
    if (dataType === "artists") {
      x = acc.find(item => item.artist === current.artist);
    } else if (dataType === "songs") {
      x = acc.find(item => item.songTitle === current.songTitle);
    }
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  // Then, loop over that array using the data inside each object
  // to reduce the amount of times that info appears in the
  // non-unique array
  uniqueArray.forEach(item => {
    let itemCount = originalArray.reduce((count, val) => {
      if (dataType === "artists") {
        return count + (val.artist === item.artist);
      } else if (dataType === "songs") {
        return count + (val.songTitle === item.songTitle);
      }
    }, 0);
    if (dataType === "artists") {
      returnData.push({
        artist: item.artist,
        timesListened: itemCount
      });
    } else if (dataType === "songs") {
      returnData.push({
        songTitle: item.songTitle,
        timesListened: itemCount
      });
    }
  });

  return returnData;
};

const compareMusic = (a, b) => {
  const itemA = a.timesListened;
  const itemB = b.timesListened;

  let comparison = 0;
  if (itemA > itemB) {
    comparison = 1;
  } else if (itemA < itemB) {
    comparison = -1;
  }

  return comparison * -1;
};

function loopMusicData(incoming) {
  let allArtists = [];
  let allSongs = [];

  console.log(`Hello`);

  incoming.map(songInfo => {
    if (
      songInfo.description !== undefined &&
      songInfo.time.substring(0, 4) === "2019"
    ) {
      allArtists.push({
        artist: songInfo.description
      });
      allSongs.push({
        songTitle: songInfo.title.substring(12)
      });
    }
  });
  let artistPlayCount = countInfo(allArtists, "artists");
  artistPlayCount.sort(compareMusic);
  let songPlayCount = countInfo(allSongs, "songs");
  songPlayCount.sort(compareMusic);

  console.log(artistPlayCount);
}

function fileReducer(state, action) {
  if (action.type === "fetch") {
    return {
      loading: true,
      file: [],
      year: null,
      error: null
    };
  } else if (action.type === "addFile") {
    return {
      ...state,
      file: action.file
    };
  } else if (action.type === "addYear") {
    return {
      ...state,
      year: action.year
    };
  } else if (action.type === "getData") {
    return {
      ...state,
      loading: false
    };
  } else if (action.type === "error") {
    return {
      loading: false,
      file: state.file,
      year: state.year,
      error: action.message
    };
  }
}

function App() {
  const [state, dispatch] = React.useReducer(fileReducer, {
    loading: true,
    file: [],
    year: "",
    error: null
  });

  return (
    <UserDataProvider value={{ state, dispatch }}>
      <Form />
    </UserDataProvider>
  );

  // if (!file.length) {
  //   return (
  //     <>
  //       <h1>Google Music - Year In Review</h1>
  //       <div className="file-upload">
  //         <label>Upload Your Google Play Music Activity File</label>
  //         <input
  //           type="file"
  //           className="gpm-file-uploader"
  //           onChange={e => {
  //             fetch(URL.createObjectURL(e.target.files[0]))
  //               .then(res => res.json())
  //               .then(data => setFile(data));
  //           }}
  //         />
  //       </div>
  //       <div className="year-select">
  //         <label>Review Year...</label>
  //         <YearSelect setYear={setYear} year={year} />
  //       </div>
  //     </>
  //   );
  // }

  // return (
  //   <>
  //     <p>You uploaded a file!</p>
  //   </>
  // );
}

export default App;
