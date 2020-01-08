export function fetchMusicData(file) {
  return fetch(file).then(res => res.json());
}

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
      return count;
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

export function loopMusicData(file, year, slice) {
  let allArtists = [];
  let allSongs = [];

  file.map(songInfo => {
    if (
      songInfo.description !== undefined &&
      songInfo.time.substring(0, 4) === year
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

  return [artistPlayCount.slice(0, slice), songPlayCount.slice(0, slice)];
}
