import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiOutlineHome } from 'react-icons/hi';
import { IoIosListBox, IoIosList } from 'react-icons/io';

export default function MenuButton({ text, path }) {
  const SIZE = '25';
  const COLOR = 'bg-violet-600';
  return (
    <Link to={path} className="flex p-2 hover:bg-violet-100">
      {text === '홈' ? (
        <HiOutlineHome size={SIZE} />
      ) : (
        <IoIosList size={SIZE} />
      )}
      <span className="text-lg">{text}</span>
    </Link>
  );
}
