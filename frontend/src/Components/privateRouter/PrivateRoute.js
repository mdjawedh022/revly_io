import { Navigate, useLocation } from "react-router-dom";
import React from "react";

const PrivateRoute = ({ children }) => {
  const isAuth = localStorage.getItem("userDetail");
  const location = useLocation();

  if (!isAuth) {
    alert("Login First😔😔! ")
    return <Navigate to={"/"} state={location.pathname} replace />;
  }
 
  return children;
};

export { PrivateRoute };
