import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Tv from './pages/Tv';
import Root from './Root';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'tv',
        element: <Tv />,
      },
      {
        path: 'search',
        element: <Search />,
      },
    ],
  },
]);

export default Router;
