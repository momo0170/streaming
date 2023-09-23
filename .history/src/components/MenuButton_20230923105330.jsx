import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuButton({ text }) {
  return <Link>{text}</Link>;
}
