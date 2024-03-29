import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/login";
import Signup from "../../pages/signup";
import { UserProvider } from "../../context/user";
import useMe from "../../api/users/hooks/use-me";

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
