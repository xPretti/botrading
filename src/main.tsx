import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.css';
import App from './App.tsx';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <ThemeProvider>
         <App />
      </ThemeProvider>
   </StrictMode>,
);
