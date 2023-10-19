import { createBrowserRouter } from "react-router-dom";
import { lazy } from 'react';
const Auth = lazy(() => import('./../views/auth/page.jsx'))
const Administrator = lazy(() => import('./../views/administrator/page.jsx'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/auth",
    element: <Administrator />,
  },
]);


export default router