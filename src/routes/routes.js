// routes/routes.js
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Orders from '../pages/Orders';

const RouteConfig = () => {
  // initiate hooks and pass as props
  const routes = [
    {
      path: '/',
      element: Home,
      props: {
        // Add props if available
      },
    },
    {
      path: '/menu',
      element: Menu,
      props: {
        // Add props if available
      },
    },
    {
      path: '/orders',
      element: Orders,
      props: {
        // Add props if available
      },
    },
    // Add more routes as needed
  ];

  return routes;
};

export default RouteConfig;
