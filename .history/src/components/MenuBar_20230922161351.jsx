import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  return (
    <>
      <Link to="/chartTrack">차트트랙</Link>
      <Link to="/chartArtist">아티스트</Link>
      <Link to="/chartGenres">장르음악</Link>
    </>
  );
}
