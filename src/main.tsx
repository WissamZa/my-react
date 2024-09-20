import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import { NextUIProvider } from "@nextui-org/react";

import App from './Pages/App'
import TheTable from './Pages/theTable'
import Nave from './Pages/Nave';
import NotFoundPage from './Pages/NotFoundPage';
import './Styles/index.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/table',
    element: <TheTable />,

  },
  {
    path:'/nave',
    element:<Nave />,
  }
]);
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);

