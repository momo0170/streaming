import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  const menu = ['트랙차트', '장르음악', '아티스트'];
  return (
    <>
      {menu.map((item, idx) => (
        <Link></Link>
      ))}
    </>
  );
}
