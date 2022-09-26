import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import Profile from "./Profile/Profile";

function ProtectedRoute({ component, ...rest }) {
  const { isLogged } = useAuthContext();

  if (isLogged) {
    return <Profile />;
  } else {
    return <Navigate to={"/signin"} />;
  }
}

export default ProtectedRoute;
