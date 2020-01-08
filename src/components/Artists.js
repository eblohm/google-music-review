import React from "react";

export default function Artists({ artists }) {
  return (
    <ul>
      {artists.map(artist => (
        <li key={artist.artist}>
          {artist.artist}: Listened to {artist.timesListened} times
        </li>
      ))}
    </ul>
  );
}
