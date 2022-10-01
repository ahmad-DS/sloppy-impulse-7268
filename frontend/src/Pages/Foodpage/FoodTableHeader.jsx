import React from "react";

export default function FoodTableHeader({ display }) {
  return (
    <>
      <div
        id="headerDiv"
        style={{
          boxSizing: "border-box",
          paddingTop: "16px",
          color: "rgba(0, 0, 0, 0.87)",
        }}
      >
        <table style={{ boxSizing: "border-box", borderSpacing: "0px" }}>
          <tbody style={{ boxSizing: "border-box" }}>
            <tr style={{ boxSizing: "border-box" }}>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  color: "rgb(110, 110, 110)",
                  fontSize: "12px",
                  height: "40px",
                  textAlign: "right",
                  verticalAlign: "top",
                  paddingRight: "3px",
                  minWidth: "350px",
                  maxWidth: "350px",
                }}
              >
                <table
                  style={{
                    boxSizing: "border-box",
                    borderSpacing: "0px",
                    display: "table",
                    width: "100%",
                  }}
                >
                  <tbody style={{ boxSizing: "border-box" }}>
                    <tr style={{ boxSizing: "border-box" }}>
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          textAlign: "left",
                          paddingLeft: "16px",
                        }}
                      >
                        <div
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            marginTop: "-10px",
                          }}
                        >
                          <button
                            className="MuiButtonBase-root-357 MuiIconButton-root-369"
                            type="button"
                            tabIndex="0"
                            title="Find foods with full-screen search"
                            style={{
                              boxSizing: "border-box",
                              border: "0px",
                              margin: "0px",
                              outline: "0px",
                              textDecoration: "none",
                              cursor: "pointer",
                              display: "inline-flex",
                              position: "relative",
                              alignItems: "center",
                              userSelect: "none",
                              verticalAlign: "middle",
                              justifyContent: "center",
                              backgroundColor: "transparent",
                              appearance: "none",
                              WebkitTapHighlightColor: "transparent",
                              flex: "0 0 auto",
                              padding: "12px",
                              overflow: "visible",
                              transition:
                                "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                              borderRadius: "50%",
                              color: "rgba(0, 0, 0, 0.54)",
                              fontSize: "1.5rem",
                              textAlign: "center",
                            }}
                            onClick={() => {
                              display();
                            }}
                          >
                            <span
                              className="MuiIconButton-label-377"
                              style={{
                                boxSizing: "border-box",
                                width: "100%",
                                display: "flex",
                                alignItems: "inherit",
                                justifyContent: "inherit",
                              }}
                            >
                              <svg
                                className="MuiSvgIcon-root-360"
                                aria-hidden="true"
                                color="#6E6E6E"
                                focusable="false"
                                role="presentation"
                                viewBox="0 0 24 24"
                                style={{
                                  boxSizing: "border-box",
                                  transition:
                                    "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                  fill: "currentcolor",
                                  width: "1em",
                                  height: "1em",
                                  display: "inline-block",
                                  fontSize: "1.5rem",
                                  flexShrink: 0,
                                  userSelect: "none",
                                }}
                              >
                                <path
                                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                  style={{ boxSizing: "border-box" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="MuiTouchRipple-root-915"
                              style={{
                                boxSizing: "border-box",
                                inset: "0px",
                                overflow: "hidden",
                                borderRadius: "inherit",
                                position: "absolute",
                                pointerEvents: "none",
                              }}
                            />
                          </button>
                          <button
                            className="MuiButtonBase-root-357 MuiIconButton-root-369"
                            type="button"
                            tabIndex="0"
                            title="My Foods: recent, favorite, custom and recipes"
                            style={{
                              boxSizing: "border-box",
                              border: "0px",
                              margin: "0px",
                              outline: "0px",
                              textDecoration: "none",
                              cursor: "pointer",
                              display: "inline-flex",
                              position: "relative",
                              alignItems: "center",
                              userSelect: "none",
                              verticalAlign: "middle",
                              justifyContent: "center",
                              backgroundColor: "transparent",
                              appearance: "none",
                              WebkitTapHighlightColor: "transparent",
                              flex: "0 0 auto",
                              padding: "12px",
                              overflow: "visible",
                              transition:
                                "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                              borderRadius: "50%",
                              color: "rgba(0, 0, 0, 0.54)",
                              fontSize: "1.5rem",
                              textAlign: "center",
                            }}
                          >
                            <span
                              className="MuiIconButton-label-377"
                              style={{
                                boxSizing: "border-box",
                                width: "100%",
                                display: "flex",
                                alignItems: "inherit",
                                justifyContent: "inherit",
                              }}
                            >
                              <svg
                                className="MuiSvgIcon-root-360"
                                aria-hidden="true"
                                color="#6E6E6E"
                                focusable="false"
                                role="presentation"
                                viewBox="0 0 24 24"
                                style={{
                                  boxSizing: "border-box",
                                  transition:
                                    "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                  fill: "currentcolor",
                                  width: "1em",
                                  height: "1em",
                                  display: "inline-block",
                                  fontSize: "1.5rem",
                                  flexShrink: 0,
                                  userSelect: "none",
                                }}
                              >
                                <path
                                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                  style={{ boxSizing: "border-box" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="MuiTouchRipple-root-915"
                              style={{
                                boxSizing: "border-box",
                                inset: "0px",
                                overflow: "hidden",
                                borderRadius: "inherit",
                                position: "absolute",
                                pointerEvents: "none",
                              }}
                            />
                          </button>
                          <button
                            className="MuiButtonBase-root-357 MuiIconButton-root-369"
                            type="button"
                            tabIndex="0"
                            title="Premium Recipes"
                            style={{
                              boxSizing: "border-box",
                              border: "0px",
                              margin: "0px",
                              outline: "0px",
                              textDecoration: "none",
                              cursor: "pointer",
                              display: "inline-flex",
                              position: "relative",
                              alignItems: "center",
                              userSelect: "none",
                              verticalAlign: "middle",
                              justifyContent: "center",
                              backgroundColor: "transparent",
                              appearance: "none",
                              WebkitTapHighlightColor: "transparent",
                              flex: "0 0 auto",
                              padding: "12px",
                              overflow: "visible",
                              transition:
                                "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                              borderRadius: "50%",
                              color: "rgba(0, 0, 0, 0.54)",
                              fontSize: "1.5rem",
                              textAlign: "center",
                            }}
                          >
                            <span
                              className="MuiIconButton-label-377"
                              style={{
                                boxSizing: "border-box",
                                width: "100%",
                                display: "flex",
                                alignItems: "inherit",
                                justifyContent: "inherit",
                              }}
                            >
                              <img
                                alt=""
                                width={24}
                                src="https://s3.amazonaws.com/img.mynetdiary.com/premiumrecipe/ic_premium_recipes.png"
                                style={{ boxSizing: "border-box" }}
                              />
                            </span>
                            <span
                              className="MuiTouchRipple-root-915"
                              style={{
                                boxSizing: "border-box",
                                inset: "0px",
                                overflow: "hidden",
                                borderRadius: "inherit",
                                position: "absolute",
                                pointerEvents: "none",
                              }}
                            />
                          </button>
                        </div>
                      </td>
                      <td
                        className="mealsNutrTitle"
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          textAlign: "right",
                          verticalAlign: "top",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          title="Sort by entry order"
                          style={{ boxSizing: "border-box", minHeight: "100%" }}
                        >
                          Consumed food, amount
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td
                className="mealsNutrTitle"
                width="70"
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  color: "rgb(110, 110, 110)",
                  fontSize: "12px",
                  height: "40px",
                  cursor: "pointer",
                  textAlign: "right",
                  verticalAlign: "top",
                  paddingRight: "3px",
                }}
              >
                <div
                  title="Click to sort by Calories in descending order"
                  style={{ boxSizing: "border-box" }}
                >
                  Calories
                  <br style={{ boxSizing: "border-box" }} />{" "}
                </div>
              </td>
              <td
                className="mealsNutrTitle"
                width="70"
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  color: "rgb(110, 110, 110)",
                  fontSize: "12px",
                  height: "40px",
                  cursor: "pointer",
                  textAlign: "right",
                  verticalAlign: "top",
                  paddingRight: "3px",
                }}
              >
                <div
                  title="Click to sort by Total Carbs in descending order"
                  style={{ boxSizing: "border-box" }}
                >
                  Carbs
                  <br style={{ boxSizing: "border-box" }} />g{" "}
                </div>
              </td>
              <td
                className="mealsNutrTitle"
                width="70"
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  color: "rgb(110, 110, 110)",
                  fontSize: "12px",
                  height: "40px",
                  cursor: "pointer",
                  textAlign: "right",
                  verticalAlign: "top",
                  paddingRight: "3px",
                }}
              >
                <div
                  title="Click to sort by Protein in descending order"
                  style={{ boxSizing: "border-box" }}
                >
                  Protein
                  <br style={{ boxSizing: "border-box" }} />g{" "}
                </div>
              </td>
              <td
                className="mealsNutrTitle"
                width="70"
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  color: "rgb(110, 110, 110)",
                  fontSize: "12px",
                  height: "40px",
                  cursor: "pointer",
                  textAlign: "right",
                  verticalAlign: "top",
                  paddingRight: "3px",
                }}
              >
                <div
                  title="Click to sort by Total Fat in descending order"
                  style={{ boxSizing: "border-box" }}
                >
                  Total Fat
                  <br style={{ boxSizing: "border-box" }} />g{" "}
                </div>
              </td>
              <td
                className="mealsNutrTitle"
                width="70"
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  color: "rgb(110, 110, 110)",
                  fontSize: "12px",
                  height: "40px",
                  cursor: "pointer",
                  textAlign: "right",
                  verticalAlign: "top",
                  paddingRight: "3px",
                }}
              >
                <div
                  title="Click to sort by Food Grade in descending order"
                  style={{ boxSizing: "border-box" }}
                >
                  Fd. Grade
                  <br style={{ boxSizing: "border-box" }} />{" "}
                </div>
              </td>
              <td
                className="mealsNutrTitle"
                width="70"
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  color: "rgb(110, 110, 110)",
                  fontSize: "12px",
                  height: "40px",
                  cursor: "pointer",
                  textAlign: "right",
                  verticalAlign: "top",
                  paddingRight: "3px",
                }}
              >
                <div
                  title="Click to sort by Saturated Fat in descending order"
                  style={{ boxSizing: "border-box" }}
                >
                  Sat. Fat
                  <br style={{ boxSizing: "border-box" }} />g{" "}
                </div>
              </td>
              <td
                className="mealsNutrTitle"
                width="70"
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  color: "rgb(110, 110, 110)",
                  fontSize: "12px",
                  height: "40px",
                  cursor: "pointer",
                  textAlign: "right",
                  verticalAlign: "top",
                  paddingRight: "3px",
                }}
              >
                <div
                  title="Click to sort by Trans Fat in descending order"
                  style={{ boxSizing: "border-box" }}
                >
                  Trans Fat
                  <br style={{ boxSizing: "border-box" }} />g{" "}
                </div>
              </td>
              <td
                className="mealsNutrTitle"
                width="70"
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  color: "rgb(110, 110, 110)",
                  fontSize: "12px",
                  height: "40px",
                  cursor: "pointer",
                  textAlign: "right",
                  verticalAlign: "top",
                  paddingRight: "3px",
                }}
              >
                <div
                  title="Click to sort by Sodium in descending order"
                  style={{ boxSizing: "border-box" }}
                >
                  Sodium
                  <br style={{ boxSizing: "border-box" }} />
                  mg{" "}
                </div>
              </td>
              <td
                className="mealsNutrTitle"
                width="70"
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  color: "rgb(110, 110, 110)",
                  fontSize: "12px",
                  height: "40px",
                  cursor: "pointer",
                  textAlign: "right",
                  verticalAlign: "top",
                  paddingRight: "3px",
                }}
              >
                <div
                  title="Click to sort by Dietary Fiber in descending order"
                  style={{ boxSizing: "border-box" }}
                >
                  Fiber
                  <br style={{ boxSizing: "border-box" }} />g{" "}
                </div>
              </td>
              <td
                className="mealsNutrTitle"
                width="70"
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  color: "rgb(110, 110, 110)",
                  fontSize: "12px",
                  height: "40px",
                  cursor: "pointer",
                  textAlign: "right",
                  verticalAlign: "top",
                  paddingRight: "3px",
                }}
              >
                <div
                  title="Click to sort by Calcium in descending order"
                  style={{ boxSizing: "border-box" }}
                >
                  Calcium
                  <br style={{ boxSizing: "border-box" }} />%{" "}
                </div>
              </td>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0px",
                  textAlign: "right",
                  minWidth: "70px",
                }}
              >
                <button
                  className="MuiButtonBase-root-357 MuiIconButton-root-369"
                  type="button"
                  tabIndex="0"
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    margin: "0px",
                    outline: "0px",
                    textDecoration: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    position: "relative",
                    alignItems: "center",
                    userSelect: "none",
                    verticalAlign: "middle",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    appearance: "none",
                    WebkitTapHighlightColor: "transparent",
                    flex: "0 0 auto",
                    padding: "12px",
                    overflow: "visible",
                    transition:
                      "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    borderRadius: "50%",
                    color: "rgba(0, 0, 0, 0.54)",
                    fontSize: "1.5rem",
                    textAlign: "center",
                    marginTop: "-16px",
                  }}
                >
                  <span
                    className="MuiIconButton-label-377"
                    style={{
                      boxSizing: "border-box",
                      width: "100%",
                      display: "flex",
                      alignItems: "inherit",
                      justifyContent: "inherit",
                    }}
                  >
                    <svg
                      className="MuiSvgIcon-root-360"
                      aria-hidden="true"
                      color="#6E6E6E"
                      focusable="false"
                      role="presentation"
                      viewBox="0 0 24 24"
                      style={{
                        boxSizing: "border-box",
                        transition:
                          "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        fill: "currentcolor",
                        width: "1em",
                        height: "1em",
                        display: "inline-block",
                        fontSize: "1.5rem",
                        flexShrink: 0,
                        userSelect: "none",
                      }}
                    >
                      <path
                        d="M0 0h20v20H0V0z"
                        fill="none"
                        transform="scale(1.2, 1.2)"
                        style={{ boxSizing: "border-box" }}
                      />
                      <path
                        d="M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
                        transform="scale(1.2, 1.2)"
                        style={{ boxSizing: "border-box" }}
                      />
                    </svg>
                  </span>
                  <span
                    className="MuiTouchRipple-root-915"
                    style={{
                      boxSizing: "border-box",
                      inset: "0px",
                      overflow: "hidden",
                      borderRadius: "inherit",
                      position: "absolute",
                      pointerEvents: "none",
                    }}
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-size: initial;
  line-height: 1.42857;
  font-family: Roboto, sans-serif;
  padding: 0px;
  height: 100%;
  margin: 0px;
  background: rgb(240, 240, 240);
}

body {
  box-sizing: border-box;
  line-height: 1.42857;
  font-family: Roboto, sans-serif;
  padding: 0px;
  height: 100%;
  font-size: 14px;
  margin: 0px;
  background: rgb(240, 240, 240);
}
`,
        }}
      />
    </>
  );
}
