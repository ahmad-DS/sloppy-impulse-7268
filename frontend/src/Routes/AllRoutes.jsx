import React from "react";
import { Route, Routes } from "react-router-dom";
import Food from "../Pages/Foodpage/Food";
import Succeed from "../Pages/HomePage/succeed/Succeed";
import UserPage from "../Pages/UserPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/dashboard" element={<UserPage />} />
      <Route path="/plan" element={<Food />} />
      <Route path="/food" element={<Food />} />
      <Route path="/succeed" element={<Succeed />} />
      {/* <Route path="/user" element={<UserPage />} /> */}
    </Routes>
  );
};

export default AllRoutes;
