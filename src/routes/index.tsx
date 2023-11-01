import { createBrowserRouter } from 'react-router-dom';

import Layout from '../views/components/layout';
import Home from '../views/pages/home/home';
import Register from '../views/pages/register/register';
import Dashboard from '../views/pages/dasboard/dashboard';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);
