import React from "react";
import LoginForm from "../../components/forms/login";
import useMe from "../../api/users/hooks/use-me";
import { useUser } from "../../context/user";
import { Navigate } from "react-router-dom";

export default function Login() {
  useMe();
  const { user } = useUser();

  if (user) {
    return <Navigate to="/home" />;
  }

  return <LoginForm />;
}
