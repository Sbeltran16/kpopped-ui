import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "../../pages/home";
import Login from "../../pages/login";
import Signup from "../../pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}
