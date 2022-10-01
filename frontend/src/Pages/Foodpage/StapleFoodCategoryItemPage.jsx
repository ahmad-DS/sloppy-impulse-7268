import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Button, Progress, Stack } from "@chakra-ui/react";

const StapleFoodCategoryItemPage = ({ handleReturn, data }) => {
  const [input, setInput] = useState(1);
  const date = new Date();
  return (
    <>
      <div>
        <button
          onClick={() => {
            handleReturn();
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
        <h4
          style={{ marginBottom: "2rem", fontSize: "18px", fontWeight: "bold" }}
        >
          Food Entry
        </h4>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                <div style={{ marginRight: "1rem" }}>
                  <img width="24px" height="24px" src={data.imageSrc} alt="" />
                </div>
                <div>{data.foodName}</div>
              </div>
              <div style={{ marginTop: "2rem", display: "flex" }}>
                <span>
                  <div style={{ fontSize: "12px", color: "blue" }}>
                    Add quantity
                  </div>
                  <div>
                    <input
                      style={{
                        padding: "5px 10px",
                        width: "100px",
                        borderBottom: "1px solid black",
                      }}
                      type="number"
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value > 1 ? e.target.value : 1);
                      }}
                    />
                  </div>
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "end",
                    marginLeft: "10px",
                  }}
                >
                  {data.amount}
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    color: "green",
                    display: "flex",
                  }}
                >
                  <div style={{ fontSize: "28px" }}>
                    {input * data.rawCalories}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      marginLeft: "0.5rem",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>cals</p>
                  </div>
                </div>
              </div>
              <div>
                <Button size="sm" colorScheme="twitter">
                  LOG FOOD TO SNACK
                </Button>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 1fr",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "5px",
              }}
            >
              <Button colorScheme="gray">cup</Button>
              <Button colorScheme="gray">gram</Button>
              <Button colorScheme="gray">tablespoon</Button>
              <Button colorScheme="gray">oz</Button>
              <Button colorScheme="gray">lb</Button>
              <Button style={{ color: "blue" }} colorScheme="gray">
                3 more servings
              </Button>
            </div>
            <div></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 1fr",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "20px",
              }}
            >
              <div>
                <div style={{ color: "#d3d3d3" }}>Weight</div>
                <div>
                  <span style={{ fontSize: "30px", paddingLeft: "1rem" }}>
                    {data.gmWgt}
                  </span>
                  g
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <div style={{ color: "#d3d3d3" }}>Day</div>
                  <div
                    style={{
                      fontSize: "14px",
                      padding: "0.5rem",
                      borderBottom: "1px solid black",
                    }}
                  >
                    {date.toDateString()}
                  </div>
                </div>
              </div>
              <div>
                <div style={{ color: "#d3d3d3" }}>Food Grade</div>
                <div
                  style={{
                    fontSize: "30px",
                    color: "green",
                    paddingLeft: "1rem",
                  }}
                >
                  A
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <div style={{ color: "#d3d3d3" }}>Meal</div>
                  <div
                    style={{
                      fontSize: "14px",
                      padding: "0.5rem",
                      borderBottom: "1px solid black",
                    }}
                  >
                    Snacks
                  </div>
                </div>
              </div>
              <Stack spacing={6}>
                <Progress
                  colorScheme="green"
                  size="sm"
                  value={+data.carbs.TotalCarbs}
                />
                <Progress
                  colorScheme="green"
                  size="sm"
                  value={+data.carbs.NetCarbs}
                />
                <Progress
                  colorScheme="green"
                  size="sm"
                  value={+data.carbs.DiabetesCarbs}
                />
              </Stack>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StapleFoodCategoryItemPage;
