import { createRoot } from 'react-dom/client'
import { NextUIProvider } from "@nextui-org/react";
import App from './App'
// import App from './components/theTable'
import './index.css'
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </StrictMode>
);

