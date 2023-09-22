import React from 'react';
import MenuBar from '../components/MenuBar';
import { Outlet } from 'react-router';

export default function Home() {
  return (
    <div>
      <MenuBar />
      <Outlet />
    </div>
  );
}
