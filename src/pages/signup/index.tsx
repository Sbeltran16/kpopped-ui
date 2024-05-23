import React from "react";
import useMe from "../../api/users/hooks/use-me";
import { useUser } from "../../context/user";
import { Navigate } from "react-router-dom";
import SignupForm from "../../components/forms/signup";

export default function Signup() {
  useMe();
  const { user } = useUser();

  if (user) {
    return <Navigate to="/home" />;
  }

  return <SignupForm />;
}
