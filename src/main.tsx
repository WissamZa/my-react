import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import { NextUIProvider } from "@nextui-org/react";

import TheTable from './components/theTable'
import NotFoundPage from './Pages/NotFoundPage';
import './Styles/index.css'
import Signin from './Pages/Signin';
import Card from './components/Card';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Card />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/table',
    element: <TheTable />,

  },
  {
    path: '/signin',
    element: <Signin />,
  }
]);
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);

