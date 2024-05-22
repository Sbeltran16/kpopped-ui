import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useMe from "../../api/users/hooks/use-me";
import { useUser } from "../../context/user";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoading } = useMe();
  const userContext = useUser();

  if (isLoading) {
    // Display a loading state while checking authentication status
    return <div>Loading...</div>;
  }

  return userContext.user ? <>{children}</> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
