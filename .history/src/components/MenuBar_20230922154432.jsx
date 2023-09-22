import React from 'react';
import { Link } from 'react-router-dom';
import ChartTrack from '../router/ChartTrack';

export default function MenuBar() {
  return (
    <>
      <Link to="/">
        <ChartTrack />
      </Link>
    </>
  );
}
