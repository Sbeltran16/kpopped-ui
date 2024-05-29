import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({
  element,
  user,
}: {
  element: React.ReactNode;
  user: any;
}) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{element}</>;
}

export default ProtectedRoute;
