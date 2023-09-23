import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiOutlineHome } from 'react-icons/hi';
import { IoIosListBox, IoIosList } from 'react-icons/io';

export default function MenuButton({ text, path }) {
  const SIZE = '25';
  const COLOR = '#7C3AED';
  return (
    <Link to={path} className="flex px-5 py-2 rounded hover:bg-violet-100">
      {text === '홈' ? (
        <HiOutlineHome size={SIZE} color={COLOR} />
      ) : (
        <IoIosList size={SIZE} color={COLOR} />
      )}
      <span className="text-base ml-4">{text}</span>
    </Link>
  );
}
