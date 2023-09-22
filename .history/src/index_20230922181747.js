import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './router/Home';
import Track from './router/Track';
import Artist from './router/Artist';
import Genres from './router/Genres';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'track',
        element: <Track />,
      },
      {
        path: 'artist',
        element: <Artist />,
      },
      {
        path: 'genres',
        element: <Genres />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
