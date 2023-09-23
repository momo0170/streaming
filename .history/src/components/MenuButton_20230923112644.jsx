import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiOutlineHome } from 'react-icons/hi';
import { IoIosListBox, IoIosList } from 'react-icons/io';

export default function MenuButton({ text, path }) {
  return (
    <Link to={path}>
      {text === '홈' ? <HiHome /> : <IoIosList />}
      <span>{text}</span>
    </Link>
  );
}
