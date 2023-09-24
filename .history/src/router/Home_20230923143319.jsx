import React from 'react';
import { topTrack } from '../mock/getTopTracks.json';
import Track from './Track';

export default function Home() {
  console.log(topTrack.tracks.track);
  return (
    <main className="m-2">
      <h2>인기 트랙</h2>
      <ul>
        <li>
          {topTrack.tracks.track.map((item, idx) => (
            <Track key={idx} item={item} />
          ))}
        </li>
      </ul>
    </main>
  );
}
