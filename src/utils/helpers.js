export function fetchMusicData(file) {
  return fetch(file).then(res => res.json());
}
