import React from "react";
import { useState } from "react";
import { stapleFoods } from "../../Data/staplefoods";
import StapleFoodCategoryPage from "./StapleFoodCategoryPage";
import StapleFoodMainPage from "./StapleFoodMainPage";
import "./StapleFoodPage.css";

const StapleFoodPage = ({ display }) => {
  const stapleFoodItems = Object.keys(stapleFoods);
  const [stapleData, setStapleData] = useState([]);
  const [page, setPage] = useState(false);

  const handleData = (key) => {
    setStapleData(stapleFoods[key]);
    setPage(true);
  };

  const getBackToMain = () => {
    setPage(false);
    setStapleData([]);
  };

  return (
    <div>
      {!page ? (
        <StapleFoodMainPage
          stapleFoodItems={stapleFoodItems}
          handleData={handleData}
          display={display}
        />
      ) : (
        <StapleFoodCategoryPage
          getBackToMain={getBackToMain}
          data={stapleData}
        />
      )}
    </div>
  );
};

export default StapleFoodPage;
