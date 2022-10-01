import React from "react";
import FoodTable from "./FoodTableItem";

const FoodForm = ({ meals, handleMeals, mealData }) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        {mealData.length > 0 ? (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ width: "10%" }}>Food image</th>
                <th style={{ width: "40%" }}>Food name</th>
                <th style={{ width: "10%" }}>Scale</th>
                <th style={{ width: "30%" }}>Quantity</th>
                <th style={{ width: "10%" }}>Calories</th>
              </tr>
            </thead>
            <tbody>
              {mealData.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={item.img_url}
                        alt={item.food}
                        width="24px"
                        height="24px"
                      />
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {item.food}
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {item.qty}
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {item.measure}
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {item.cals} cals
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
      <FoodTable handleMeals={handleMeals} meals={meals} />
    </div>
  );
};

export default FoodForm;
