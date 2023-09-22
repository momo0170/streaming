import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './router/Home';
import ChartTrack from './router/ChartTrack';
import ChartArtist from './router/ChartArtist';
import ChartGenres from './router/ChartGenres';

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
        path: 'chartTrack',
        element: <ChartTrack />,
      },
      {
        path: 'chartArtist',
        element: <ChartArtist />,
      },
      {
        path: 'chartGenres',
        element: <ChartGenres />,
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
