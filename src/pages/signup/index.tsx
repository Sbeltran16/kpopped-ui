import React from "react";
import useMe from "../../api/users/hooks/use-me";
import { useUser } from "../../context/user";
import { Navigate } from "react-router-dom";
import SignupForm from "../../components/forms/signup";
import MainLayout from "../../components/layout/main";

export default function Signup() {
  useMe();
  const { user } = useUser();

  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <MainLayout>
      <SignupForm />
    </MainLayout>
  );
}
