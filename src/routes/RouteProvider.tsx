import { Books, Home, Login, Register } from "@/pages";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const RouteProvider: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
};
