import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const SearchPage = ({ display }) => {
  return (
    <div>
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
    </div>
  );
};

export default SearchPage;
