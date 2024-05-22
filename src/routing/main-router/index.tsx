import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/login";
import Signup from "../../pages/signup";
import { UserProvider } from "../../context/user";
import ProtectedRoute from "../protected";
import useMe from "../../api/users/hooks/use-me";
import Landing from "../../pages/landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);

function UserLoginWrapper({ children }: { children: React.ReactNode }) {
  useMe();

  return <>{children}</>;
}

export default function MainRouter() {
  return (
    <UserProvider>
      <UserLoginWrapper>
        <RouterProvider router={router} />
      </UserLoginWrapper>
    </UserProvider>
  );
}
