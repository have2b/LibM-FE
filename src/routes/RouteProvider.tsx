import {
  Books,
  Home,
  Login,
  ManageBooks,
  ManageCategories,
  Panel,
  Register,
} from "@/pages";
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
        <Route path="/admin/panel" element={<Panel />} />
        <Route path="/admin/panel/categories" element={<ManageCategories />} />
        <Route path="/admin/panel/books" element={<ManageBooks />} />
      </Routes>
    </Router>
  );
};
