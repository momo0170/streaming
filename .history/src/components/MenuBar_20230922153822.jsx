import React from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';

export default function MenuBar() {
  const menu = ['트랙차트', '장르음악', '아티스트'];
  return (
    <>
      {menu.map((text, idx) => (
        <Link key={idx}>
          <MenuButton text={text} />
        </Link>
      ))}
    </>
  );
}
