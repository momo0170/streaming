import React from 'react';
import topTrack from '../../public/mock/getTopTracks.json';

export default function Home() {
  console.log(topTrack);
  return (
    <main className="m-2">
      <h2>인기 트랙</h2>
    </main>
  );
}
