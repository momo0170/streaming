import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  const link = [
    {
      홈: '/',
      플레이리스트: '/playlist',
    },
  ];
  return (
    <aside>
      <Link to="/">홈</Link>
      <Link to="/playlist">플레이리스트</Link>
    </aside>
  );
}
