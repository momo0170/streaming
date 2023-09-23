import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiOutlineHome } from 'react-icons/hi';
import { IoIosListBox, IoIosList } from 'react-icons/io';

export default function MenuButton({ text, path }) {
  const SIZE = '25';
  return (
    <Link to={path} className="flex m-2 p-1">
      {text === '홈' ? (
        <HiOutlineHome size={SIZE} />
      ) : (
        <IoIosList size={SIZE} />
      )}
      <span className="text-lg">{text}</span>
    </Link>
  );
}
