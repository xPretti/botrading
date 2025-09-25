import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/fonts.css';
import './styles/styles.css';
import App from './app/App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './app/pages/Home/Home.tsx';
import { Help } from './app/pages/Help/Help.tsx';
import { NotFound } from './app/pages/NotFound/NotFound.tsx';
import { Solutions } from './app/pages/Solutions/Solutions.tsx';


const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '*',
            element: <NotFound />,
         },
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/help',
            element: <Help />,
         },
         {
            path: '/solutions',
            element: <Solutions />,
         },
      ]
   }
]);

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>,
);
