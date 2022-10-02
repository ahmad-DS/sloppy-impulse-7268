import React from "react";
import { Routes, Route } from "react-router-dom";
import Carb from "../CarbComp/Carb";
import Weigth from "../Components/Weigth";
import Exercise from "../Exercise/Exercise";
import Nutrient from "../Nutrient/Nutrient";

const SidebarRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/user/plan" element={<Weigth />} />
        <Route path="/user/plan/weigth" element={<Weigth />} />
        <Route path="/user/plan/carbs" element={<Carb />} />
        <Route path="/user/plan/exercise" element={<Exercise />} />
        <Route path="/user/plan/nutrient" element={<Nutrient />} />
        <Route path="/user/plan/cycling" element={<Carb />} />
      </Routes>
    </>
  );
};

export default SidebarRoutes;
