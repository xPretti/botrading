import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import './styles/fonts.css';
import './styles/styles.css';

import { router } from './app/routes';


// Inicializa o router
createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>,
);

// Aguarda o carregamento das fontes
document.fonts.ready.then(() => {
   requestAnimationFrame(() => {
      const root = document.getElementById('root');
      root?.classList.add('loaded');
   });
});