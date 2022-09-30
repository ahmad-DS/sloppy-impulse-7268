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
        <div>
          <button
            onClick={() => {
              display();
            }}
            style={{ padding: "0.5rem 1rem", color: "blue" }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <IoIosArrowBack />
              </div>
              <div>Back to meals</div>
            </div>
          </button>
        </div>
        {search && <SearchPage />}
        {staple && <StapleFoodPage />}
        {premium && <PremiumRecipes />}
      </div>
    </div>
  );
};

export default MealsPlanner;
