export function fetchMusicData(file) {
  return fetch(file).then(res => res.json());
}

const countInfo = originalArray => {
  let returnData = [];

  // First, create an array with no duplicate info
  let uniqueArray = originalArray.filter((item, index) => {
    return originalArray.indexOf(item) === index;
  });
  console.log(`This is the unique array: ${uniqueArray.length}`);

  // Then, loop over that array using the data inside each object
  // to reduce the amount of times that info appears in the
  // non-unique array
  uniqueArray.forEach(item => {
    let itemCount = originalArray.reduce((count, val) => {
      return count + (val === item);
    }, 0);
    returnData.push({
      name: item,
      timesListened: itemCount
    });
  });

  return returnData;
};

const compareMusic = (a, b) => {
  const itemA = a.timesListened;
  const itemB = b.timesListened;
  return itemA > itemB ? -1 : 1;
};

export function selectGenerator(min, max) {
  let retData = [];

  for (let i = min; i <= max; i++) {
    retData.push(i);
  }

  return retData;
}

export function loopMusicData(file, year, slice) {
  let allArtists = [];
  let allSongs = [];

  file.map(songInfo => {
    if (
      songInfo.description !== undefined &&
      (parseInt(songInfo.time.substring(0, 4)) === year || year === "All Time")
    ) {
      allArtists.push(songInfo.description);
      allSongs.push(songInfo.title.substring(12));
    }
  });
  let artistPlayCount = countInfo(allArtists);
  artistPlayCount.sort(compareMusic);
  let songPlayCount = countInfo(allSongs);
  songPlayCount.sort(compareMusic);

  return [artistPlayCount.slice(0, slice), songPlayCount.slice(0, slice)];
}
