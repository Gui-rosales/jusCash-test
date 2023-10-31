import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '../pages/home';
import Register from '../pages/register';
import Dashboard from '../pages/dashboard';

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
