import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import { myTheme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <RecoilRoot>
        <RouterProvider router={Router} />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);
