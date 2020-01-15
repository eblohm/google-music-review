import React from "react";
import { ResultSingle } from "../styles/ResultsStyles";

export default function MusicList({ musicData }) {
  if (musicData.length === 0) {
    return <p>No data found for the selected year :(</p>;
  }

  return (
    <ul>
      {musicData.map(musicInfo => (
        <ResultSingle key={musicInfo.name}>
          <div className="music--name">{musicInfo.name}</div>
          <div className="music--listening">
            Listened to {musicInfo.timesListened} time
            {musicInfo.timesListened > 1 ? "s" : ""}
          </div>
        </ResultSingle>
      ))}
    </ul>
  );
}
