import React, { useState } from "react";
import { Select, Button } from "@chakra-ui/react";

import { FaPencilAlt } from "react-icons/fa";

export default function FoodTable({ meals, handleMeals }) {
  const [foodItem, setFoodItem] = useState(null);
  const [qty, setQty] = useState(null);
  const [input, setInput] = useState(1);

  const handleItem = (id) => {
    let temp = meals.filter((item) => item.food === id);
    setFoodItem(...temp);
  };
  const handleQty = (id) => {
    let temp = foodItem.quantity.filter((item) => item.qty === id);
    setQty(...temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      img_url: foodItem.img_url,
      food: foodItem.food,
      cals: qty.cals * input,
      measure: qty.qty,
      qty: input,
    };
    handleMeals(data);
    setFoodItem(null);
    setQty(null);
    setInput(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex" }}>
        <div
          style={{ display: "flex", alignItems: "center", margin: "0 10px" }}
        >
          <FaPencilAlt style={{ fonstSize: "18px" }} />
        </div>
        <div>
          <Select
            style={{ width: "300px" }}
            onChange={(e) => {
              handleItem(e.target.value);
            }}
            placeholder="Select Food"
          >
            {meals.map((q, index) => (
              <option key={index} value={q.food}>
                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      src={q.img_url}
                      alt={q.food}
                      width="24px"
                      height="24px"
                    />
                  </div>{" "}
                  <div>{q.food}</div>
                </div>
              </option>
            ))}
          </Select>
        </div>
        {foodItem && (
          <div style={{ display: "flex", margin: "0 1rem" }}>
            <input
              type="number"
              onChange={(e) =>
                setInput(e.target.value > 1 ? e.target.value : 1)
              }
              value={input}
              placeholder="add quantity"
              style={{ textAlign: "center" }}
            />

            <Select
              onChange={(e) => {
                handleQty(e.target.value);
              }}
              placeholder="Select quantity"
            >
              {foodItem.quantity.map((item, index) => (
                <option key={index} value={item.qty}>
                  {item.qty}
                </option>
              ))}
            </Select>
          </div>
        )}
        <div
          style={{
            display: "flex",
            margin: "0 2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {qty && (
            <p>
              <b>
                <span style={{ color: "green" }}>{input * qty.cals} Cals</span>{" "}
                / {qty.weight ? (input * qty.weight).toFixed(2) + " g" : ""}
              </b>
            </p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            colorScheme="blue"
            disabled={qty ? false : true}
            type="submit"
          >
            Add
          </Button>
        </div>
      </div>
    </form>
  );
}
