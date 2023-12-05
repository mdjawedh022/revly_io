import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/User/SignUp";
import Login from "../pages/User/Login";
import Request from "../pages/Request/Request";
import Session from "../pages/Session/Session";
import History from "../pages/History/History";
import { PrivateRoute } from "../Components/privateRouter/PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/session"
          element={
            <PrivateRoute>
              <Session />
            </PrivateRoute>
          }
        />
        <Route
          path="/history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route
          path="/request"
          element={
            <PrivateRoute>
              <Request />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};

export default Routing;
