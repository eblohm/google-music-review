import React from 'react';

export default function MusicList({ musicData }) {
  return (
    <ul>
      {musicData.map(musicInfo => (
        <li key={musicInfo.name}>
          {musicInfo.name}: Listened to {musicInfo.timesListened} times
        </li>
      ))}
    </ul>
  );
}
