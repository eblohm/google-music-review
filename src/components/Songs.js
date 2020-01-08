import React from "react";

export default function Songs({ songs }) {
  return (
    <ul>
      {songs.map(song => (
        <li key={song.songTitle}>
          {song.songTitle}: Listened to {song.timesListened} times
        </li>
      ))}
    </ul>
  );
}
