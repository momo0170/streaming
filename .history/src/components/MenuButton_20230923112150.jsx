import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiOutlineHome } from "react-icons/hi";

export default function MenuButton({ text, path }) {
  return <Link to={path}>
    {text === '홈' ? <HiHome />}
    <span>{text}</span>
  </Link>;
}
