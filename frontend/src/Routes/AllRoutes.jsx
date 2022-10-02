import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/authentication/Login";
import Signup from "../Pages/authentication/Signup";
import Food from "../Pages/Foodpage/Food";
import Home from "../Pages/Home/Home";
import Succeed from "../Pages/HomePage/succeed/Succeed";
import UserPage from "../Pages/UserPage";
import Weigth from "../Planpage/Components/Weigth";
import Exercise from "../Planpage/Exercise/Exercise";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/user/plan" element={<Weigth />} />
      <Route path="/user/food" element={<Food />} />
      <Route path="/user/exercise" element={<Exercise />} />
      <Route path="/user/succeed" element={<Succeed />} />
      {/* <Route path="/user" element={<UserPage />} /> */}
    </Routes>
  );
};

export default AllRoutes;
