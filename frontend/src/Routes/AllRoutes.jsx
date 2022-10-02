import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/authentication/Login";
import Signup from "../Pages/authentication/Signup";
import Food from "../Pages/Foodpage/Food";
import Home from "../Pages/Home/Home";
import Succeed from "../Pages/HomePage/succeed/Succeed";
import UserPage from "../Pages/UserPage";
import Carb from "../Planpage/CarbComp/Carb";
import Weigth from "../Planpage/Components/Weigth";
import Exercise from "../Planpage/Exercise/Exercise";
import Nutrient from "../Planpage/Nutrient/Nutrient";

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
      <Route path="/user/plan" element={<Weigth />} />
      <Route path="/user/plan/weigth" element={<Weigth />} />
      <Route path="/user/plan/carbs" element={<Carb />} />
      <Route path="/user/plan/exercise" element={<Exercise />} />
      <Route path="/user/plan/nutrient" element={<Nutrient />} />
      <Route path="/user/plan/cycling" element={<Carb />} />
      {/* <Route path="/user" element={<UserPage />} /> */}
    </Routes>
  );
};

export default AllRoutes;
