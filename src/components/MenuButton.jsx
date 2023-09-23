import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuButton({ text, path }) {
  return <Link to={path}>{text}</Link>;
}
