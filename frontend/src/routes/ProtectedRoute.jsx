import { useContext } from "react";

import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children }) {

  // get current user from context
  const { user } = useContext(AuthContext);

  // if user not logged in
  // redirect to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // if logged in
  // allow access
  return children;

}

export default ProtectedRoute;