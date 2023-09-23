import React from 'react';
import MenuButton from './MenuButton';

export default function MenuBar() {
  const list = [
    ['/', '홈'],
    ['/playlist', '플레이리스트'],
  ];

  return (
    <aside className="flex flex-col w-52">
      {list.map((item, idx) => (
        <MenuButton key={idx} text={item[1]} path={item[0]} />
      ))}
    </aside>
  );
}
