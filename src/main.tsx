import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import { NextUIProvider } from "@nextui-org/react";

import App from './App'
import TheTable from './theTable'
import NotFoundPage from './components/NotFoundPage';
import './index.css'



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
]);
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);

