import React from 'react';
import { MusicStyles } from '../styles/styles';

export default function MusicList({ musicData }) {
  return (
    <ul>
      {musicData.map(musicInfo => (
        <MusicStyles key={musicInfo.name}>
          <div className="music--name">{musicInfo.name}</div>
          <div className="music--listening">
            Listened to {musicInfo.timesListened} times
          </div>
        </MusicStyles>
      ))}
    </ul>
  );
}
