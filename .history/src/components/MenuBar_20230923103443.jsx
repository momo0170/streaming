import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  const buttonObj = { 홈: '/' };
  return (
    <aside>
      <Link to="/">홈</Link>
      <Link to="/track">차트트랙</Link>
      <Link to="/artist">아티스트</Link>
      <Link to="/genres">장르음악</Link>
    </aside>
  );
}
