import React, { useState } from "react";
import StapleFoodCategoryItemPage from "./StapleFoodCategoryItemPage";
import StapleFoodCategoryMainPage from "./StapleFoodCategoryMainPage";

const StapleFoodCategoryPage = ({ getBackToMain, data }) => {
  const [item, setItem] = useState({});
  const [itemPage, setItemPage] = useState(false);

  const filterData = (name) => {
    const updatedList = data.filter((el) => el.foodName === name);
    setItem(...updatedList);
    setItemPage(true);
  };

  const handleReturn = () => {
    setItemPage(false);
    setItem({});
  };
  return (
    <>
      {!itemPage ? (
        <StapleFoodCategoryMainPage
          getBackToMain={getBackToMain}
          data={data}
          filterData={filterData}
        />
      ) : (
        <StapleFoodCategoryItemPage handleReturn={handleReturn} data={item} />
      )}
    </>
  );
};

export default StapleFoodCategoryPage;
