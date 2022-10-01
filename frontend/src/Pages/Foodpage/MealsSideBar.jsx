import React from "react";
import "./MealsPlanner.css";

const MealsSideBar = ({ handleSearch, handleStaple, handlePremium }) => {
  return (
    <div className="container">
      <div className="sidebar">
        <div
          className="link"
          onClick={handleSearch}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="icon">
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/mui/myfoods/Search.png"
              alt="Search"
              width="24px"
              height="24px"
              style={{ margin: "0 10px" }}
            />
          </div>
          <div className="link_text">Search</div>
        </div>
        <div
          className="link"
          onClick={handleStaple}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="icon">
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/mui/myfoods/StapleFoods.png"
              alt="Staple Food"
              width="24px"
              height="24px"
              style={{ margin: "0 10px" }}
            />
          </div>
          <div className="link_text">Staple Food</div>
        </div>
        <div
          className="link"
          onClick={handleSearch}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="icon">
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/mui/myfoods/Favorites.png"
              alt="Favorites"
              width="24px"
              height="24px"
              style={{ margin: "0 10px" }}
            />
          </div>
          <div className="link_text">Favorites</div>
        </div>
        <div
          className="link"
          onClick={handleStaple}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="icon">
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/mui/myfoods/FrequentFoods.png"
              alt="Frequent Foods"
              width="24px"
              height="24px"
              style={{ margin: "0 10px" }}
            />
          </div>
          <div className="link_text">Frequent Foods</div>
        </div>
        <div
          className="link"
          onClick={handleStaple}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="icon">
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/mui/myfoods/RecentMeals.png"
              alt="Recent meals"
              width="24px"
              height="24px"
              style={{ margin: "0 10px" }}
            />
          </div>
          <div className="link_text">Recent meals</div>
        </div>
        <div
          className="link"
          onClick={handlePremium}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="icon">
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/mui/myfoods/Custom.png"
              alt="Custom Foods"
              width="24px"
              height="24px"
              style={{ margin: "0 10px" }}
            />
          </div>
          <div className="link_text">Custom Foods</div>
        </div>
        <div
          className="link"
          onClick={handlePremium}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="icon">
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/mui/myfoods/PremiumRecipes.png"
              alt="Premium Recipes"
              width="24px"
              height="24px"
              style={{ margin: "0 10px" }}
            />
          </div>
          <div className="link_text">Premium Recipes</div>
        </div>
        <div
          className="link"
          onClick={handlePremium}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="icon">
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/mui/myfoods/Recipes.png"
              alt="My Recipes"
              width="24px"
              height="24px"
              style={{ margin: "0 10px" }}
            />
          </div>
          <div className="link_text">My Recipes</div>
        </div>
        <div
          className="link"
          onClick={handleSearch}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="icon">
            <img
              src="https://s3.amazonaws.com/img.mynetdiary.com/mui/myfoods/Meals.png"
              alt="My Meals"
              width="24px"
              height="24px"
              style={{ margin: "0 10px" }}
            />
          </div>
          <div className="link_text">My Meals</div>
        </div>
      </div>
    </div>
  );
};
export default MealsSideBar;
