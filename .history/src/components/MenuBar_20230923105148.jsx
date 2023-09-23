import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  const list = [
    {
      '/': '홈',
    },
    {
      '/playlist': '플레이리스트',
    },
  ];
  return (
    <aside className="flex flex-col ">
      <Link to="/">홈</Link>
      <Link to="/playlist">플레이리스트</Link>
    </aside>
  );
}
