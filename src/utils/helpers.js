export function fetchMusicData(file) {
  return fetch(file).then(res => res.json());
}

const countInfo = originalArray => {
  let returnData = [];

  // First, create an array with no duplicate info
  let uniqueArray = originalArray.reduce((acc, current) => {
    const x = acc.find(item => item.name === current.name);
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
      return count + (val.name === item.name);
    }, 0);
    returnData.push({
      name: item.name,
      timesListened: itemCount
    });
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
      (songInfo.time.substring(0, 4) === year || year === "All")
    ) {
      allArtists.push({
        name: songInfo.description
      });
      allSongs.push({
        // The first 12 characters from Google are always "Listened to " so
        // we need to cut it out
        name: songInfo.title.substring(12)
      });
    }
  });
  let artistPlayCount = countInfo(allArtists);
  artistPlayCount.sort(compareMusic);
  let songPlayCount = countInfo(allSongs);
  songPlayCount.sort(compareMusic);

  return [artistPlayCount.slice(0, slice), songPlayCount.slice(0, slice)];
}
