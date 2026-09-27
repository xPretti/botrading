import { createBrowserRouter } from 'react-router';
import App from './App';
import { NotFound } from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import { Help } from './pages/Help/Help';
import { Solutions } from './pages/Solutions/Solutions';
import { ScriptBotPage } from './pages/Solutions/ScriptBot/ScriptBotPage';

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

         // Solutions -> ScriptBot
         {
            path: '/solutions/scriptbot',
            element: <ScriptBotPage />,
         },
      ],
   },
]);