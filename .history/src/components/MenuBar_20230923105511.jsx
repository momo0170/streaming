import React from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';

export default function MenuBar() {
  const list = [
    ['/', '홈'],
    ['/playlist', '플레이리스트'],
  ];

  return (
    <aside className="flex flex-col ">
      {list.map((item, idx) => (
        <MenuButton key={idx} text={item[1]} path={item[0]} />
      ))}
    </aside>
  );
}
