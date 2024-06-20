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
import useMe from "../../api/users/hooks/use-me";
import Landing from "../../pages/landing";
import Profiles from "../../pages/profiles";
import NotFound from "../../pages/user-not-found";

const router = createBrowserRouter([
  {
    path: "/home",
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
  {
    path: "/:username",
    element: <Profiles />,
  },
  {
    path: "/user-not-found",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);

function UserLoginWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading } = useMe();

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
