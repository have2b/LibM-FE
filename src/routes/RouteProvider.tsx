import { Home } from "@/pages";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const RouteProvider: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
