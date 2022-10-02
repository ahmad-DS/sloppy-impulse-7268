import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const StapleFoodMainPage = ({ stapleFoodItems, handleData, display }) => {
  return (
    <>
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
      <div style={{ padding: "0 3rem" }}>
        {stapleFoodItems.map((item, index) => (
          <div
            onClick={() => {
              handleData(item);
            }}
            style={{
              padding: "0.5rem 1rem",
              margin: "10px 1rem",
              fontSize: "18px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            className="staple-food-item"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default StapleFoodMainPage;
