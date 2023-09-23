import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiOutlineHome } from 'react-icons/hi';
import { IoIosListBox, IoIosList } from 'react-icons/io';

export default function MenuButton({ text, path }) {
  const SIZE = 20;
  return (
    <Link to={path} className="flex">
      {text === '홈' ? <HiOutlineHome size="30" /> : <IoIosList />}
      <span className="text-lg">{text}</span>
    </Link>
  );
}
