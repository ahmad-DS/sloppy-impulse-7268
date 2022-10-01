import React, { useState } from "react";
import FoodPlan from "./FoodPlan";
import MealsPlanner from "./MealsPlanner";

const Food = () => {
  const [display, setDisplay] = useState(true);

  const handleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <div>
      {display ? (
        <FoodPlan display={handleDisplay} />
      ) : (
        <MealsPlanner display={handleDisplay} />
      )}
    </div>
  );
};

export default Food;
