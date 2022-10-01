import React from "react";
import { useState } from "react";
import MealsSideBar from "./MealsSideBar";
import PremiumRecipes from "./PremiumRecipes";
import SearchPage from "./SearchPage";
import StapleFoodPage from "./StapleFoodPage";
import { IoIosArrowBack } from "react-icons/io";

const MealsPlanner = ({ display }) => {
  const [search, setSearch] = useState(true);
  const [staple, setStaple] = useState(false);
  const [premium, setPremium] = useState(false);

  const handleSearch = () => {
    setSearch(true);
    setPremium(false);
    setStaple(false);
  };
  const handleStaple = () => {
    setSearch(false);
    setPremium(false);
    setStaple(true);
  };
  const handlePremium = () => {
    setSearch(false);
    setPremium(true);
    setStaple(false);
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f0f0f0",
        height: "100%",
      }}
    >
      <div>
        <MealsSideBar
          handleSearch={handleSearch}
          handleStaple={handleStaple}
          handlePremium={handlePremium}
        />
      </div>
      <div style={{ backgroundColor: "#fff", width: "100%" }}>
        {search && <SearchPage display={display} />}
        {staple && <StapleFoodPage display={display} />}
        {premium && <PremiumRecipes display={display} />}
      </div>
    </div>
  );
};

export default MealsPlanner;
