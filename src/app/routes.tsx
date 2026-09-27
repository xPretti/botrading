import { createBrowserRouter } from 'react-router';
import App from './App';
import { NotFound } from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import { Help } from './pages/Help/Help';
import { Solutions } from './pages/Solutions/Solutions';

export const router = createBrowserRouter([
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

         // Solutions
         {
            path: '/solutions',
            element: <Solutions />,
         },
      ],
   },
]);