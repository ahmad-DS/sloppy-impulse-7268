import React from "react";
import { IoIosArrowBack, IoMdMore } from "react-icons/io";
import "./StapleFoodPage.css";

const StapleFoodCategoryMainPage = ({ data, getBackToMain, filterData }) => {
  return (
    <>
      <div>
        <button
          onClick={() => {
            getBackToMain();
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
            <div>Back to Staple foods page</div>
          </div>
        </button>
      </div>
      <div style={{ padding: "0 3rem" }}>
        {data.map((DataItem, index) => (
          <div
            className="staple-food-item"
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.5rem 1rem",
              margin: "5px 0",
            }}
            onClick={() => {
              filterData(DataItem.foodName);
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "1rem" }}>
                <img
                  width="24px"
                  height="24px"
                  src={DataItem.imageSrc}
                  alt=""
                />
              </div>
              <div>{DataItem.foodName}</div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#c0c0c0",
                  marginLeft: "0.3rem",
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <p>{DataItem.amount}</p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  color: "green",
                  fontWeight: "bold",
                  lineHeight: "1.15",
                }}
              >
                <div style={{ fontSize: "18px" }}>{DataItem.calories}</div>
                <div style={{ display: "flex" }}>
                  <p style={{ fontSize: "12px" }}>cals</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "1rem",
                }}
              >
                <IoMdMore />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StapleFoodCategoryMainPage;
