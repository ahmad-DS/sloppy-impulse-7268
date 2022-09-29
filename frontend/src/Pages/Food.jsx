import React from "react";

export default function Food() {
  return (
    <>
      <div
        style={{
          boxSizing: "border-box",
          minWidth: "fit-content",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <div
          id="mealsScreen"
          style={{
            boxSizing: "border-box",
            margin: "20px auto",
            width: "fit-content",
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              position: "relative",
              width: "fit-content",
            }}
          >
            <div
              className="MuiPaper-root-312 MuiPaper-elevation1-315 MuiCard-root-311 MuiPaper-rounded-313"
              style={{
                boxSizing: "border-box",
                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                color: "rgba(0, 0, 0, 0.87)",
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
                overflow: "initial",
                margin: "16px auto",
                position: "relative",
              }}
            >
              <button
                className="MuiButtonBase-root-357 MuiFab-root-347 MuiFab-sizeMedium-356 MuiFab-primary-349"
                type="button"
                tabIndex="0"
                title="Click here to start logging"
                style={{
                  border: "0px",
                  margin: "0px",
                  outline: "0px",
                  textDecoration: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  userSelect: "none",
                  verticalAlign: "middle",
                  justifyContent: "center",
                  appearance: "none",
                  WebkitTapHighlightColor: "transparent",
                  padding: "0px",
                  transition:
                    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  borderRadius: "50%",
                  fontSize: "0.875rem",
                  minWidth: "0px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px",
                  boxSizing: "border-box",
                  minHeight: "36px",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontWeight: 500,
                  lineHeight: 1.75,
                  letterSpacing: "0.02857em",
                  textTransform: "uppercase",
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgb(60, 158, 195)",
                  width: "48px",
                  height: "48px",
                  position: "absolute",
                  left: "-24px",
                  top: "-24px",
                }}
              >
                <span
                  className="MuiFab-label-348"
                  style={{
                    boxSizing: "border-box",
                    width: "100%",
                    display: "inherit",
                    alignItems: "inherit",
                    justifyContent: "inherit",
                  }}
                >
                  <svg
                    className="MuiSvgIcon-root-360"
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    viewBox="0 0 24 24"
                    style={{
                      boxSizing: "border-box",
                      transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
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
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </span>
                <span
                  className="MuiTouchRipple-root-861"
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
              <div
                id="headerDiv"
                style={{ boxSizing: "border-box", paddingTop: "16px" }}
              >
                <table
                  style={{ boxSizing: "border-box", borderSpacing: "0px" }}
                >
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
                                      className="MuiTouchRipple-root-861"
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
                                      className="MuiTouchRipple-root-861"
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
                                        width={24}
                                        src="https://s3.amazonaws.com/img.mynetdiary.com/premiumrecipe/ic_premium_recipes.png"
                                        style={{ boxSizing: "border-box" }}
                                        alt="img"
                                      />
                                    </span>
                                    <span
                                      className="MuiTouchRipple-root-861"
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
                                  style={{
                                    boxSizing: "border-box",
                                    minHeight: "100%",
                                  }}
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
                            className="MuiTouchRipple-root-861"
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
              <div id="meal1" style={{ boxSizing: "border-box" }}>
                <table
                  style={{ boxSizing: "border-box", borderSpacing: "0px" }}
                >
                  <tbody style={{ boxSizing: "border-box" }}>
                    <tr
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "rgb(232, 245, 233)",
                        fontSize: "14px",
                      }}
                    >
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          minWidth: "350px",
                          maxWidth: "350px",
                        }}
                      >
                        <div
                          style={{ boxSizing: "border-box", display: "table" }}
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "table-cell",
                              cursor: "pointer",
                              width: "150px",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                boxSizing: "border-box",
                                display: "table",
                              }}
                            >
                              <div
                                style={{
                                  boxSizing: "border-box",
                                  display: "table-cell",
                                  cursor: "pointer",
                                  verticalAlign: "middle",
                                }}
                              >
                                <button
                                  className="MuiButtonBase-root-395 MuiIconButton-root-386"
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
                                  }}
                                >
                                  <span
                                    className="MuiIconButton-label-394"
                                    style={{
                                      boxSizing: "border-box",
                                      width: "100%",
                                      display: "flex",
                                      alignItems: "inherit",
                                      justifyContent: "inherit",
                                    }}
                                  >
                                    <svg
                                      className="MuiSvgIcon-root-398"
                                      aria-hidden="true"
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
                                        d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
                                        style={{ boxSizing: "border-box" }}
                                      />
                                    </svg>
                                  </span>
                                  <span
                                    className="MuiTouchRipple-root-871"
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
                              <div
                                style={{
                                  boxSizing: "border-box",
                                  display: "table-cell",
                                  cursor: "pointer",
                                  verticalAlign: "middle",
                                  fontSize: "16px",
                                  paddingLeft: "16px",
                                }}
                              >
                                BREAKFAST
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "table-cell",
                              verticalAlign: "middle",
                              paddingLeft: "8px",
                            }}
                          >
                            <button
                              className="MuiButtonBase-root-395 MuiButton-root-407 MuiButton-text-409 MuiButton-textPrimary-410"
                              type="button"
                              tabIndex="0"
                              title="Click to find, create or recall Breakfast food, then log it"
                              style={{
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
                                transition:
                                  "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                borderRadius: "4px",
                                fontSize: "0.875rem",
                                minWidth: "64px",
                                boxSizing: "border-box",
                                fontFamily:
                                  "Roboto, Helvetica, Arial, sans-serif",
                                fontWeight: 500,
                                lineHeight: 1.75,
                                letterSpacing: "0.02857em",
                                textTransform: "uppercase",
                                padding: "6px 8px",
                                color: "rgb(60, 158, 195)",
                              }}
                            >
                              <span
                                className="MuiButton-label-408"
                                style={{
                                  boxSizing: "border-box",
                                  width: "100%",
                                  display: "inherit",
                                  alignItems: "inherit",
                                  justifyContent: "inherit",
                                }}
                              >
                                Add
                              </span>
                              <span
                                className="MuiTouchRipple-root-871"
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
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "table-cell",
                              width: "50px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                      </td>
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(42, 184, 6)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          paddingRight: "12px",
                          textAlign: "right",
                          minWidth: "70px",
                        }}
                      >
                        <button
                          id="actionsIcon"
                          className="MuiButtonBase-root-395 MuiIconButton-root-386"
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
                          }}
                        >
                          <span
                            className="MuiIconButton-label-394"
                            style={{
                              boxSizing: "border-box",
                              width: "100%",
                              display: "flex",
                              alignItems: "inherit",
                              justifyContent: "inherit",
                            }}
                          >
                            <svg
                              className="MuiSvgIcon-root-398"
                              aria-hidden="true"
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
                                flexShrink: 0,
                                userSelect: "none",
                                fontSize: "16px",
                              }}
                            >
                              <path
                                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                style={{ boxSizing: "border-box" }}
                              />
                            </svg>
                          </span>
                          <span
                            className="MuiTouchRipple-root-871"
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
                <div style={{ boxSizing: "border-box" }}>
                  <div style={{ boxSizing: "border-box" }}>
                    <div style={{ boxSizing: "border-box" }}>
                      <table
                        style={{
                          boxSizing: "border-box",
                          borderSpacing: "0px",
                        }}
                      >
                        <tbody style={{ boxSizing: "border-box" }} />
                      </table>
                      <div style={{ boxSizing: "border-box" }}>
                        <table
                          style={{
                            boxSizing: "border-box",
                            borderSpacing: "0px",
                          }}
                        >
                          <tbody style={{ boxSizing: "border-box" }}>
                            <tr style={{ boxSizing: "border-box" }}>
                              <td
                                style={{
                                  boxSizing: "border-box",
                                  padding: "0px",
                                  overflow: "hidden",
                                  width: "400px",
                                  paddingLeft: "12px",
                                }}
                              >
                                <table
                                  style={{
                                    boxSizing: "border-box",
                                    borderSpacing: "0px",
                                  }}
                                >
                                  <tbody style={{ boxSizing: "border-box" }}>
                                    <tr style={{ boxSizing: "border-box" }}>
                                      <td
                                        style={{
                                          boxSizing: "border-box",
                                          padding: "0px",
                                          paddingTop: "12px",
                                        }}
                                      >
                                        <svg
                                          className="MuiSvgIcon-root-424"
                                          aria-hidden="true"
                                          color="#b0b0b0"
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
                                            marginRight: "4px",
                                            marginBottom: "-4px",
                                          }}
                                        >
                                          <path
                                            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                                            style={{ boxSizing: "border-box" }}
                                          />
                                        </svg>
                                      </td>
                                      <td
                                        style={{
                                          boxSizing: "border-box",
                                          padding: "0px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            boxSizing: "border-box",
                                            display: "inline-block",
                                          }}
                                        >
                                          <div
                                            className="MuiFormControl-root-437 MuiTextField-root-436"
                                            title="Click to find and log your food"
                                            style={{
                                              boxSizing: "border-box",
                                              border: "0px",
                                              margin: "0px",
                                              padding: "0px",
                                              display: "inline-flex",
                                              position: "relative",
                                              minWidth: "0px",
                                              flexDirection: "column",
                                              verticalAlign: "top",
                                              width: "300px",
                                              fontSize: "14px",
                                            }}
                                          >
                                            <label
                                              className="MuiFormLabel-root-453 MuiInputLabel-root-441 MuiInputLabel-formControl-447 MuiInputLabel-animated-450"
                                              htmlFor="foodSuggestSearchText"
                                              style={{
                                                boxSizing: "border-box",
                                                maxWidth: "initial",
                                                marginBottom: "inherit",
                                                padding: "0px",
                                                color: "rgba(0, 0, 0, 0.54)",
                                                fontFamily:
                                                  "Roboto, Helvetica, Arial, sans-serif",
                                                fontWeight: 400,
                                                lineHeight: 1,
                                                letterSpacing: "0.00938em",
                                                display: "block",
                                                transformOrigin: "left top",
                                                top: "0px",
                                                left: "0px",
                                                position: "absolute",
                                                transform:
                                                  "translate(0px, 24px) scale(1)",
                                                transition:
                                                  "color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
                                                fontSize: "14px",
                                              }}
                                            >
                                              search
                                            </label>
                                            <div
                                              className="MuiInputBase-root-472 MuiInput-root-460 MuiInput-underline-464 MuiInputBase-formControl-473 MuiInput-formControl-461"
                                              style={{
                                                color: "rgba(0, 0, 0, 0.87)",
                                                cursor: "text",
                                                display: "inline-flex",
                                                boxSizing: "border-box",
                                                alignItems: "center",
                                                fontFamily:
                                                  "Roboto, Helvetica, Arial, sans-serif",
                                                lineHeight: "1.1875em",
                                                position: "relative",
                                                marginTop: "16px",
                                                fontSize: "14px",
                                                marginBottom: "8px",
                                              }}
                                            >
                                              <input
                                                id="foodSuggestSearchText"
                                                className="MuiInputBase-input-482 MuiInput-input-468"
                                                name="foodSuggestSearchText"
                                                type="text"
                                                autoComplete="off"
                                                aria-invalid="false"
                                                style={{
                                                  font: "inherit",
                                                  border: "0px",
                                                  margin: "0px",
                                                  padding: "6px 0px 7px",
                                                  background: "none",
                                                  color: "currentcolor",
                                                  width: "100%",
                                                  height: "1.1875em",
                                                  display: "block",
                                                  minWidth: "0px",
                                                  boxSizing: "content-box",
                                                  WebkitTapHighlightColor:
                                                    "transparent",
                                                }}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="meal2" style={{ boxSizing: "border-box" }}>
                <table
                  style={{ boxSizing: "border-box", borderSpacing: "0px" }}
                >
                  <tbody style={{ boxSizing: "border-box" }}>
                    <tr
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "rgb(232, 245, 233)",
                        fontSize: "14px",
                      }}
                    >
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          minWidth: "350px",
                          maxWidth: "350px",
                        }}
                      >
                        <div
                          style={{ boxSizing: "border-box", display: "table" }}
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "table-cell",
                              cursor: "pointer",
                              width: "150px",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                boxSizing: "border-box",
                                display: "table",
                              }}
                            >
                              <div
                                style={{
                                  boxSizing: "border-box",
                                  display: "table-cell",
                                  cursor: "pointer",
                                  verticalAlign: "middle",
                                }}
                              >
                                <button
                                  className="MuiButtonBase-root-507 MuiIconButton-root-498"
                                  type="button"
                                  tabIndex="0"
                                  title="Click to Collapse Lunch"
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
                                    className="MuiIconButton-label-506"
                                    style={{
                                      boxSizing: "border-box",
                                      width: "100%",
                                      display: "flex",
                                      alignItems: "inherit",
                                      justifyContent: "inherit",
                                    }}
                                  >
                                    <svg
                                      className="MuiSvgIcon-root-510"
                                      aria-hidden="true"
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
                                        d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
                                        style={{ boxSizing: "border-box" }}
                                      />
                                    </svg>
                                  </span>
                                  <span
                                    className="MuiTouchRipple-root-881"
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
                              <div
                                title="Click to Collapse Lunch"
                                style={{
                                  boxSizing: "border-box",
                                  display: "table-cell",
                                  cursor: "pointer",
                                  verticalAlign: "middle",
                                  fontSize: "16px",
                                  paddingLeft: "16px",
                                }}
                              >
                                LUNCH
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "table-cell",
                              verticalAlign: "middle",
                              paddingLeft: "8px",
                            }}
                          >
                            <button
                              className="MuiButtonBase-root-507 MuiButton-root-519 MuiButton-text-521 MuiButton-textPrimary-522"
                              type="button"
                              tabIndex="0"
                              title="Click to find, create or recall Lunch food, then log it"
                              style={{
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
                                transition:
                                  "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                borderRadius: "4px",
                                fontSize: "0.875rem",
                                minWidth: "64px",
                                boxSizing: "border-box",
                                fontFamily:
                                  "Roboto, Helvetica, Arial, sans-serif",
                                fontWeight: 500,
                                lineHeight: 1.75,
                                letterSpacing: "0.02857em",
                                textTransform: "uppercase",
                                padding: "6px 8px",
                                color: "rgb(60, 158, 195)",
                              }}
                            >
                              <span
                                className="MuiButton-label-520"
                                style={{
                                  boxSizing: "border-box",
                                  width: "100%",
                                  display: "inherit",
                                  alignItems: "inherit",
                                  justifyContent: "inherit",
                                }}
                              >
                                Add
                              </span>
                              <span
                                className="MuiTouchRipple-root-881"
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
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "table-cell",
                              width: "50px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                      </td>
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(42, 184, 6)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          paddingRight: "12px",
                          textAlign: "right",
                          minWidth: "70px",
                        }}
                      >
                        <button
                          id="actionsIcon"
                          className="MuiButtonBase-root-507 MuiIconButton-root-498"
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
                          }}
                        >
                          <span
                            className="MuiIconButton-label-506"
                            style={{
                              boxSizing: "border-box",
                              width: "100%",
                              display: "flex",
                              alignItems: "inherit",
                              justifyContent: "inherit",
                            }}
                          >
                            <svg
                              className="MuiSvgIcon-root-510"
                              aria-hidden="true"
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
                                flexShrink: 0,
                                userSelect: "none",
                                fontSize: "16px",
                              }}
                            >
                              <path
                                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                style={{ boxSizing: "border-box" }}
                              />
                            </svg>
                          </span>
                          <span
                            className="MuiTouchRipple-root-881"
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
                <div style={{ boxSizing: "border-box" }}>
                  <div style={{ boxSizing: "border-box" }}>
                    <div style={{ boxSizing: "border-box" }}>
                      <table
                        style={{
                          boxSizing: "border-box",
                          borderSpacing: "0px",
                        }}
                      >
                        <tbody style={{ boxSizing: "border-box" }} />
                      </table>
                      <div style={{ boxSizing: "border-box" }}>
                        <table
                          style={{
                            boxSizing: "border-box",
                            borderSpacing: "0px",
                          }}
                        >
                          <tbody style={{ boxSizing: "border-box" }}>
                            <tr style={{ boxSizing: "border-box" }}>
                              <td
                                style={{
                                  boxSizing: "border-box",
                                  padding: "0px",
                                  overflow: "hidden",
                                  width: "400px",
                                  paddingLeft: "12px",
                                }}
                              >
                                <table
                                  style={{
                                    boxSizing: "border-box",
                                    borderSpacing: "0px",
                                  }}
                                >
                                  <tbody style={{ boxSizing: "border-box" }}>
                                    <tr style={{ boxSizing: "border-box" }}>
                                      <td
                                        style={{
                                          boxSizing: "border-box",
                                          padding: "0px",
                                          paddingTop: "12px",
                                        }}
                                      >
                                        <svg
                                          className="MuiSvgIcon-root-536"
                                          aria-hidden="true"
                                          color="#b0b0b0"
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
                                            marginRight: "4px",
                                            marginBottom: "-4px",
                                          }}
                                        >
                                          <path
                                            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                                            style={{ boxSizing: "border-box" }}
                                          />
                                        </svg>
                                      </td>
                                      <td
                                        style={{
                                          boxSizing: "border-box",
                                          padding: "0px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            boxSizing: "border-box",
                                            display: "inline-block",
                                          }}
                                        >
                                          <div
                                            className="MuiFormControl-root-549 MuiTextField-root-548"
                                            title="Click to find and log your food"
                                            style={{
                                              boxSizing: "border-box",
                                              border: "0px",
                                              margin: "0px",
                                              padding: "0px",
                                              display: "inline-flex",
                                              position: "relative",
                                              minWidth: "0px",
                                              flexDirection: "column",
                                              verticalAlign: "top",
                                              width: "300px",
                                              fontSize: "14px",
                                            }}
                                          >
                                            <label
                                              className="MuiFormLabel-root-565 MuiInputLabel-root-553 MuiInputLabel-formControl-559 MuiInputLabel-animated-562"
                                              htmlFor="foodSuggestSearchText"
                                              style={{
                                                boxSizing: "border-box",
                                                maxWidth: "initial",
                                                marginBottom: "inherit",
                                                padding: "0px",
                                                color: "rgba(0, 0, 0, 0.54)",
                                                fontFamily:
                                                  "Roboto, Helvetica, Arial, sans-serif",
                                                fontWeight: 400,
                                                lineHeight: 1,
                                                letterSpacing: "0.00938em",
                                                display: "block",
                                                transformOrigin: "left top",
                                                top: "0px",
                                                left: "0px",
                                                position: "absolute",
                                                transform:
                                                  "translate(0px, 24px) scale(1)",
                                                transition:
                                                  "color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
                                                fontSize: "14px",
                                              }}
                                            >
                                              search
                                            </label>
                                            <div
                                              className="MuiInputBase-root-584 MuiInput-root-572 MuiInput-underline-576 MuiInputBase-formControl-585 MuiInput-formControl-573"
                                              style={{
                                                color: "rgba(0, 0, 0, 0.87)",
                                                cursor: "text",
                                                display: "inline-flex",
                                                boxSizing: "border-box",
                                                alignItems: "center",
                                                fontFamily:
                                                  "Roboto, Helvetica, Arial, sans-serif",
                                                lineHeight: "1.1875em",
                                                position: "relative",
                                                marginTop: "16px",
                                                fontSize: "14px",
                                                marginBottom: "8px",
                                              }}
                                            >
                                              <input
                                                id="foodSuggestSearchText"
                                                className="MuiInputBase-input-594 MuiInput-input-580"
                                                name="foodSuggestSearchText"
                                                type="text"
                                                autoComplete="off"
                                                aria-invalid="false"
                                                style={{
                                                  font: "inherit",
                                                  border: "0px",
                                                  margin: "0px",
                                                  padding: "6px 0px 7px",
                                                  background: "none",
                                                  color: "currentcolor",
                                                  width: "100%",
                                                  height: "1.1875em",
                                                  display: "block",
                                                  minWidth: "0px",
                                                  boxSizing: "content-box",
                                                  WebkitTapHighlightColor:
                                                    "transparent",
                                                }}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="meal3" style={{ boxSizing: "border-box" }}>
                <table
                  style={{ boxSizing: "border-box", borderSpacing: "0px" }}
                >
                  <tbody style={{ boxSizing: "border-box" }}>
                    <tr
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "rgb(232, 245, 233)",
                        fontSize: "14px",
                      }}
                    >
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          minWidth: "350px",
                          maxWidth: "350px",
                        }}
                      >
                        <div
                          style={{ boxSizing: "border-box", display: "table" }}
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "table-cell",
                              cursor: "pointer",
                              width: "150px",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                boxSizing: "border-box",
                                display: "table",
                              }}
                            >
                              <div
                                style={{
                                  boxSizing: "border-box",
                                  display: "table-cell",
                                  cursor: "pointer",
                                  verticalAlign: "middle",
                                }}
                              >
                                <button
                                  className="MuiButtonBase-root-619 MuiIconButton-root-610"
                                  type="button"
                                  tabIndex="0"
                                  title="Click to Collapse Dinner"
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
                                    className="MuiIconButton-label-618"
                                    style={{
                                      boxSizing: "border-box",
                                      width: "100%",
                                      display: "flex",
                                      alignItems: "inherit",
                                      justifyContent: "inherit",
                                    }}
                                  >
                                    <svg
                                      className="MuiSvgIcon-root-622"
                                      aria-hidden="true"
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
                                        d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
                                        style={{ boxSizing: "border-box" }}
                                      />
                                    </svg>
                                  </span>
                                  <span
                                    className="MuiTouchRipple-root-891"
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
                              <div
                                title="Click to Collapse Dinner"
                                style={{
                                  boxSizing: "border-box",
                                  display: "table-cell",
                                  cursor: "pointer",
                                  verticalAlign: "middle",
                                  fontSize: "16px",
                                  paddingLeft: "16px",
                                }}
                              >
                                DINNER
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "table-cell",
                              verticalAlign: "middle",
                              paddingLeft: "8px",
                            }}
                          >
                            <button
                              className="MuiButtonBase-root-619 MuiButton-root-631 MuiButton-text-633 MuiButton-textPrimary-634"
                              type="button"
                              tabIndex="0"
                              title="Click to find, create or recall Dinner food, then log it"
                              style={{
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
                                transition:
                                  "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                borderRadius: "4px",
                                fontSize: "0.875rem",
                                minWidth: "64px",
                                boxSizing: "border-box",
                                fontFamily:
                                  "Roboto, Helvetica, Arial, sans-serif",
                                fontWeight: 500,
                                lineHeight: 1.75,
                                letterSpacing: "0.02857em",
                                textTransform: "uppercase",
                                padding: "6px 8px",
                                color: "rgb(60, 158, 195)",
                              }}
                            >
                              <span
                                className="MuiButton-label-632"
                                style={{
                                  boxSizing: "border-box",
                                  width: "100%",
                                  display: "inherit",
                                  alignItems: "inherit",
                                  justifyContent: "inherit",
                                }}
                              >
                                Add
                              </span>
                              <span
                                className="MuiTouchRipple-root-891"
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
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "table-cell",
                              width: "50px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                      </td>
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(42, 184, 6)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          paddingRight: "12px",
                          textAlign: "right",
                          minWidth: "70px",
                        }}
                      >
                        <button
                          id="actionsIcon"
                          className="MuiButtonBase-root-619 MuiIconButton-root-610"
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
                          }}
                        >
                          <span
                            className="MuiIconButton-label-618"
                            style={{
                              boxSizing: "border-box",
                              width: "100%",
                              display: "flex",
                              alignItems: "inherit",
                              justifyContent: "inherit",
                            }}
                          >
                            <svg
                              className="MuiSvgIcon-root-622"
                              aria-hidden="true"
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
                                flexShrink: 0,
                                userSelect: "none",
                                fontSize: "16px",
                              }}
                            >
                              <path
                                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                style={{ boxSizing: "border-box" }}
                              />
                            </svg>
                          </span>
                          <span
                            className="MuiTouchRipple-root-891"
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
                <div style={{ boxSizing: "border-box" }}>
                  <div style={{ boxSizing: "border-box" }}>
                    <div style={{ boxSizing: "border-box" }}>
                      <table
                        style={{
                          boxSizing: "border-box",
                          borderSpacing: "0px",
                        }}
                      >
                        <tbody style={{ boxSizing: "border-box" }} />
                      </table>
                      <div style={{ boxSizing: "border-box" }}>
                        <table
                          style={{
                            boxSizing: "border-box",
                            borderSpacing: "0px",
                          }}
                        >
                          <tbody style={{ boxSizing: "border-box" }}>
                            <tr style={{ boxSizing: "border-box" }}>
                              <td
                                style={{
                                  boxSizing: "border-box",
                                  padding: "0px",
                                  overflow: "hidden",
                                  width: "400px",
                                  paddingLeft: "12px",
                                }}
                              >
                                <table
                                  style={{
                                    boxSizing: "border-box",
                                    borderSpacing: "0px",
                                  }}
                                >
                                  <tbody style={{ boxSizing: "border-box" }}>
                                    <tr style={{ boxSizing: "border-box" }}>
                                      <td
                                        style={{
                                          boxSizing: "border-box",
                                          padding: "0px",
                                          paddingTop: "12px",
                                        }}
                                      >
                                        <svg
                                          className="MuiSvgIcon-root-648"
                                          aria-hidden="true"
                                          color="#b0b0b0"
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
                                            marginRight: "4px",
                                            marginBottom: "-4px",
                                          }}
                                        >
                                          <path
                                            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                                            style={{ boxSizing: "border-box" }}
                                          />
                                        </svg>
                                      </td>
                                      <td
                                        style={{
                                          boxSizing: "border-box",
                                          padding: "0px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            boxSizing: "border-box",
                                            display: "inline-block",
                                          }}
                                        >
                                          <div
                                            className="MuiFormControl-root-661 MuiTextField-root-660"
                                            title="Click to find and log your food"
                                            style={{
                                              boxSizing: "border-box",
                                              border: "0px",
                                              margin: "0px",
                                              padding: "0px",
                                              display: "inline-flex",
                                              position: "relative",
                                              minWidth: "0px",
                                              flexDirection: "column",
                                              verticalAlign: "top",
                                              width: "300px",
                                              fontSize: "14px",
                                            }}
                                          >
                                            <label
                                              className="MuiFormLabel-root-677 MuiInputLabel-root-665 MuiInputLabel-formControl-671 MuiInputLabel-animated-674"
                                              htmlFor="foodSuggestSearchText"
                                              style={{
                                                boxSizing: "border-box",
                                                maxWidth: "initial",
                                                marginBottom: "inherit",
                                                padding: "0px",
                                                color: "rgba(0, 0, 0, 0.54)",
                                                fontFamily:
                                                  "Roboto, Helvetica, Arial, sans-serif",
                                                fontWeight: 400,
                                                lineHeight: 1,
                                                letterSpacing: "0.00938em",
                                                display: "block",
                                                transformOrigin: "left top",
                                                top: "0px",
                                                left: "0px",
                                                position: "absolute",
                                                transform:
                                                  "translate(0px, 24px) scale(1)",
                                                transition:
                                                  "color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
                                                fontSize: "14px",
                                              }}
                                            >
                                              search
                                            </label>
                                            <div
                                              className="MuiInputBase-root-696 MuiInput-root-684 MuiInput-underline-688 MuiInputBase-formControl-697 MuiInput-formControl-685"
                                              style={{
                                                color: "rgba(0, 0, 0, 0.87)",
                                                cursor: "text",
                                                display: "inline-flex",
                                                boxSizing: "border-box",
                                                alignItems: "center",
                                                fontFamily:
                                                  "Roboto, Helvetica, Arial, sans-serif",
                                                lineHeight: "1.1875em",
                                                position: "relative",
                                                marginTop: "16px",
                                                fontSize: "14px",
                                                marginBottom: "8px",
                                              }}
                                            >
                                              <input
                                                id="foodSuggestSearchText"
                                                className="MuiInputBase-input-706 MuiInput-input-692"
                                                name="foodSuggestSearchText"
                                                type="text"
                                                autoComplete="off"
                                                aria-invalid="false"
                                                style={{
                                                  font: "inherit",
                                                  border: "0px",
                                                  margin: "0px",
                                                  padding: "6px 0px 7px",
                                                  background: "none",
                                                  color: "currentcolor",
                                                  width: "100%",
                                                  height: "1.1875em",
                                                  display: "block",
                                                  minWidth: "0px",
                                                  boxSizing: "content-box",
                                                  WebkitTapHighlightColor:
                                                    "transparent",
                                                }}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="meal4" style={{ boxSizing: "border-box" }}>
                <table
                  style={{ boxSizing: "border-box", borderSpacing: "0px" }}
                >
                  <tbody style={{ boxSizing: "border-box" }}>
                    <tr
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "rgb(232, 245, 233)",
                        fontSize: "14px",
                      }}
                    >
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          minWidth: "350px",
                          maxWidth: "350px",
                        }}
                      >
                        <div
                          style={{ boxSizing: "border-box", display: "table" }}
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "table-cell",
                              cursor: "pointer",
                              width: "150px",
                              verticalAlign: "middle",
                            }}
                          >
                            <div
                              style={{
                                boxSizing: "border-box",
                                display: "table",
                              }}
                            >
                              <div
                                style={{
                                  boxSizing: "border-box",
                                  display: "table-cell",
                                  cursor: "pointer",
                                  verticalAlign: "middle",
                                }}
                              >
                                <button
                                  className="MuiButtonBase-root-731 MuiIconButton-root-722"
                                  type="button"
                                  tabIndex="0"
                                  title="Click to Collapse Snacks"
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
                                    className="MuiIconButton-label-730"
                                    style={{
                                      boxSizing: "border-box",
                                      width: "100%",
                                      display: "flex",
                                      alignItems: "inherit",
                                      justifyContent: "inherit",
                                    }}
                                  >
                                    <svg
                                      className="MuiSvgIcon-root-734"
                                      aria-hidden="true"
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
                                        d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
                                        style={{ boxSizing: "border-box" }}
                                      />
                                    </svg>
                                  </span>
                                  <span
                                    className="MuiTouchRipple-root-901"
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
                              <div
                                title="Click to Collapse Snacks"
                                style={{
                                  boxSizing: "border-box",
                                  display: "table-cell",
                                  cursor: "pointer",
                                  verticalAlign: "middle",
                                  fontSize: "16px",
                                  paddingLeft: "16px",
                                }}
                              >
                                SNACKS
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "table-cell",
                              verticalAlign: "middle",
                              paddingLeft: "8px",
                            }}
                          >
                            <button
                              className="MuiButtonBase-root-731 MuiButton-root-743 MuiButton-text-745 MuiButton-textPrimary-746"
                              type="button"
                              tabIndex="0"
                              title="Click to find, create or recall Snacks food, then log it"
                              style={{
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
                                transition:
                                  "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                                borderRadius: "4px",
                                fontSize: "0.875rem",
                                minWidth: "64px",
                                boxSizing: "border-box",
                                fontFamily:
                                  "Roboto, Helvetica, Arial, sans-serif",
                                fontWeight: 500,
                                lineHeight: 1.75,
                                letterSpacing: "0.02857em",
                                textTransform: "uppercase",
                                padding: "6px 8px",
                                color: "rgb(60, 158, 195)",
                              }}
                            >
                              <span
                                className="MuiButton-label-744"
                                style={{
                                  boxSizing: "border-box",
                                  width: "100%",
                                  display: "inherit",
                                  alignItems: "inherit",
                                  justifyContent: "inherit",
                                }}
                              >
                                Add
                              </span>
                              <span
                                className="MuiTouchRipple-root-901"
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
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "table-cell",
                              width: "50px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                      </td>
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(42, 184, 6)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(13, 13, 13)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          cursor: "pointer",
                          color: "rgb(124, 97, 172)",
                          minWidth: "70px",
                          textAlign: "right",
                        }}
                      />
                      <td
                        style={{
                          boxSizing: "border-box",
                          padding: "0px",
                          paddingRight: "12px",
                          textAlign: "right",
                          minWidth: "70px",
                        }}
                      >
                        <button
                          id="actionsIcon"
                          className="MuiButtonBase-root-731 MuiIconButton-root-722"
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
                          }}
                        >
                          <span
                            className="MuiIconButton-label-730"
                            style={{
                              boxSizing: "border-box",
                              width: "100%",
                              display: "flex",
                              alignItems: "inherit",
                              justifyContent: "inherit",
                            }}
                          >
                            <svg
                              className="MuiSvgIcon-root-734"
                              aria-hidden="true"
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
                                flexShrink: 0,
                                userSelect: "none",
                                fontSize: "16px",
                              }}
                            >
                              <path
                                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                style={{ boxSizing: "border-box" }}
                              />
                            </svg>
                          </span>
                          <span
                            className="MuiTouchRipple-root-901"
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
                <div style={{ boxSizing: "border-box" }}>
                  <div style={{ boxSizing: "border-box" }}>
                    <div style={{ boxSizing: "border-box" }}>
                      <table
                        style={{
                          boxSizing: "border-box",
                          borderSpacing: "0px",
                        }}
                      >
                        <tbody style={{ boxSizing: "border-box" }} />
                      </table>
                      <div style={{ boxSizing: "border-box" }}>
                        <table
                          style={{
                            boxSizing: "border-box",
                            borderSpacing: "0px",
                          }}
                        >
                          <tbody style={{ boxSizing: "border-box" }}>
                            <tr style={{ boxSizing: "border-box" }}>
                              <td
                                style={{
                                  boxSizing: "border-box",
                                  padding: "0px",
                                  overflow: "hidden",
                                  width: "400px",
                                  paddingLeft: "12px",
                                }}
                              >
                                <table
                                  style={{
                                    boxSizing: "border-box",
                                    borderSpacing: "0px",
                                  }}
                                >
                                  <tbody style={{ boxSizing: "border-box" }}>
                                    <tr style={{ boxSizing: "border-box" }}>
                                      <td
                                        style={{
                                          boxSizing: "border-box",
                                          padding: "0px",
                                          paddingTop: "12px",
                                        }}
                                      >
                                        <svg
                                          className="MuiSvgIcon-root-760"
                                          aria-hidden="true"
                                          color="#b0b0b0"
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
                                            marginRight: "4px",
                                            marginBottom: "-4px",
                                          }}
                                        >
                                          <path
                                            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                                            style={{ boxSizing: "border-box" }}
                                          />
                                        </svg>
                                      </td>
                                      <td
                                        style={{
                                          boxSizing: "border-box",
                                          padding: "0px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            boxSizing: "border-box",
                                            display: "inline-block",
                                          }}
                                        >
                                          <div
                                            className="MuiFormControl-root-773 MuiTextField-root-772"
                                            title="Click to find and log your food"
                                            style={{
                                              boxSizing: "border-box",
                                              border: "0px",
                                              margin: "0px",
                                              padding: "0px",
                                              display: "inline-flex",
                                              position: "relative",
                                              minWidth: "0px",
                                              flexDirection: "column",
                                              verticalAlign: "top",
                                              width: "300px",
                                              fontSize: "14px",
                                            }}
                                          >
                                            <label
                                              className="MuiFormLabel-root-789 MuiInputLabel-root-777 MuiInputLabel-formControl-783 MuiInputLabel-animated-786"
                                              htmlFor="foodSuggestSearchText"
                                              style={{
                                                boxSizing: "border-box",
                                                maxWidth: "initial",
                                                marginBottom: "inherit",
                                                padding: "0px",
                                                color: "rgba(0, 0, 0, 0.54)",
                                                fontFamily:
                                                  "Roboto, Helvetica, Arial, sans-serif",
                                                fontWeight: 400,
                                                lineHeight: 1,
                                                letterSpacing: "0.00938em",
                                                display: "block",
                                                transformOrigin: "left top",
                                                top: "0px",
                                                left: "0px",
                                                position: "absolute",
                                                transform:
                                                  "translate(0px, 24px) scale(1)",
                                                transition:
                                                  "color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
                                                fontSize: "14px",
                                              }}
                                            >
                                              search
                                            </label>
                                            <div
                                              className="MuiInputBase-root-808 MuiInput-root-796 MuiInput-underline-800 MuiInputBase-formControl-809 MuiInput-formControl-797"
                                              style={{
                                                color: "rgba(0, 0, 0, 0.87)",
                                                cursor: "text",
                                                display: "inline-flex",
                                                boxSizing: "border-box",
                                                alignItems: "center",
                                                fontFamily:
                                                  "Roboto, Helvetica, Arial, sans-serif",
                                                lineHeight: "1.1875em",
                                                position: "relative",
                                                marginTop: "16px",
                                                fontSize: "14px",
                                                marginBottom: "8px",
                                              }}
                                            >
                                              <input
                                                id="foodSuggestSearchText"
                                                className="MuiInputBase-input-818 MuiInput-input-804"
                                                name="foodSuggestSearchText"
                                                type="text"
                                                autoComplete="off"
                                                aria-invalid="false"
                                                style={{
                                                  font: "inherit",
                                                  border: "0px",
                                                  margin: "0px",
                                                  padding: "6px 0px 7px",
                                                  background: "none",
                                                  color: "currentcolor",
                                                  width: "100%",
                                                  height: "1.1875em",
                                                  display: "block",
                                                  minWidth: "0px",
                                                  boxSizing: "content-box",
                                                  WebkitTapHighlightColor:
                                                    "transparent",
                                                }}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <table style={{ boxSizing: "border-box", borderSpacing: "0px" }}>
                <tbody style={{ boxSizing: "border-box" }}>
                  <tr style={{ boxSizing: "border-box" }}>
                    <td
                      style={{
                        boxSizing: "border-box",
                        padding: "0px",
                        width: "420px",
                      }}
                    >
                      <div
                        style={{
                          boxSizing: "border-box",
                          display: "inline-flex",
                          paddingLeft: "5px",
                          alignItems: "center",
                        }}
                      >
                        <div
                          title="Click to see macronutrients in Calories Analysis"
                          style={{
                            boxSizing: "border-box",
                            width: "245px",
                            cursor: "pointer",
                          }}
                        >
                          <div style={{ boxSizing: "border-box" }}>
                            <div
                              style={{
                                boxSizing: "border-box",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                              }}
                            >
                              <div
                                style={{
                                  boxSizing: "border-box",
                                  display: "flex",
                                  cursor: "pointer",
                                }}
                              >
                                <div
                                  style={{
                                    boxSizing: "border-box",
                                    width: "60px",
                                    textAlign: "left",
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                  }}
                                >
                                  <span
                                    style={{
                                      boxSizing: "border-box",
                                      fontSize: "12px",
                                      color: "rgb(110, 110, 110)",
                                    }}
                                  >
                                    Carbs
                                  </span>
                                </div>
                                <div
                                  style={{
                                    boxSizing: "border-box",
                                    width: "100%",
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                    textAlign: "left",
                                  }}
                                >
                                  <div
                                    title="Click to show details"
                                    style={{
                                      boxSizing: "border-box",
                                      paddingLeft: "15px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        boxSizing: "border-box",
                                        color: "rgba(0, 0, 0, 0.87)",
                                      }}
                                    >
                                      <span
                                        style={{
                                          boxSizing: "border-box",
                                          fontSize: "16px",
                                        }}
                                      >
                                        0
                                      </span>
                                      % cals,{" "}
                                      <span style={{ boxSizing: "border-box" }}>
                                        <span
                                          style={{
                                            boxSizing: "border-box",
                                            fontSize: "16px",
                                          }}
                                        >
                                          45
                                        </span>
                                      </span>
                                      % under
                                    </div>
                                    <div style={{ boxSizing: "border-box" }}>
                                      <svg
                                        height="20"
                                        width="100%"
                                        style={{ boxSizing: "border-box" }}
                                      >
                                        <rect
                                          height="50%"
                                          width="0%"
                                          fill="rgba(42,184,6,1)"
                                          style={{ boxSizing: "border-box" }}
                                        />
                                        <rect
                                          height="50%"
                                          width="100%"
                                          fill="#46FF3D"
                                          y="50%"
                                          style={{ boxSizing: "border-box" }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div style={{ boxSizing: "border-box" }} />
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                              }}
                            >
                              <div
                                style={{
                                  boxSizing: "border-box",
                                  display: "flex",
                                  cursor: "pointer",
                                }}
                              >
                                <div
                                  style={{
                                    boxSizing: "border-box",
                                    width: "60px",
                                    textAlign: "left",
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                  }}
                                >
                                  <span
                                    style={{
                                      boxSizing: "border-box",
                                      fontSize: "12px",
                                      color: "rgb(110, 110, 110)",
                                    }}
                                  >
                                    Protein
                                  </span>
                                </div>
                                <div
                                  style={{
                                    boxSizing: "border-box",
                                    width: "100%",
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                    textAlign: "left",
                                  }}
                                >
                                  <div
                                    title="Click to show details"
                                    style={{
                                      boxSizing: "border-box",
                                      paddingLeft: "15px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        boxSizing: "border-box",
                                        color: "rgba(0, 0, 0, 0.87)",
                                      }}
                                    >
                                      <span
                                        style={{
                                          boxSizing: "border-box",
                                          fontSize: "16px",
                                        }}
                                      >
                                        0
                                      </span>
                                      % cals,{" "}
                                      <span style={{ boxSizing: "border-box" }}>
                                        <span
                                          style={{
                                            boxSizing: "border-box",
                                            fontSize: "16px",
                                          }}
                                        >
                                          20
                                        </span>
                                      </span>
                                      % under
                                    </div>
                                    <div style={{ boxSizing: "border-box" }}>
                                      <svg
                                        height="20"
                                        width="100%"
                                        style={{ boxSizing: "border-box" }}
                                      >
                                        <rect
                                          height="50%"
                                          width="0%"
                                          fill="rgba(42,184,6,1)"
                                          style={{ boxSizing: "border-box" }}
                                        />
                                        <rect
                                          height="50%"
                                          width="44.44444444444444%"
                                          fill="#46FF3D"
                                          y="50%"
                                          style={{ boxSizing: "border-box" }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div style={{ boxSizing: "border-box" }} />
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                              }}
                            >
                              <div
                                style={{
                                  boxSizing: "border-box",
                                  display: "flex",
                                  cursor: "pointer",
                                }}
                              >
                                <div
                                  style={{
                                    boxSizing: "border-box",
                                    width: "60px",
                                    textAlign: "left",
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                  }}
                                >
                                  <span
                                    style={{
                                      boxSizing: "border-box",
                                      fontSize: "12px",
                                      color: "rgb(110, 110, 110)",
                                    }}
                                  >
                                    Fat
                                  </span>
                                </div>
                                <div
                                  style={{
                                    boxSizing: "border-box",
                                    width: "100%",
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                    textAlign: "left",
                                  }}
                                >
                                  <div
                                    title="Click to show details"
                                    style={{
                                      boxSizing: "border-box",
                                      paddingLeft: "15px",
                                    }}
                                  >
                                    <div
                                      style={{
                                        boxSizing: "border-box",
                                        color: "rgba(0, 0, 0, 0.87)",
                                      }}
                                    >
                                      <span
                                        style={{
                                          boxSizing: "border-box",
                                          fontSize: "16px",
                                        }}
                                      >
                                        0
                                      </span>
                                      % cals,{" "}
                                      <span style={{ boxSizing: "border-box" }}>
                                        <span
                                          style={{
                                            boxSizing: "border-box",
                                            fontSize: "16px",
                                          }}
                                        >
                                          35
                                        </span>
                                      </span>
                                      % under
                                    </div>
                                    <div style={{ boxSizing: "border-box" }}>
                                      <svg
                                        height="20"
                                        width="100%"
                                        style={{ boxSizing: "border-box" }}
                                      >
                                        <rect
                                          height="50%"
                                          width="0%"
                                          fill="rgba(42,184,6,1)"
                                          style={{ boxSizing: "border-box" }}
                                        />
                                        <rect
                                          height="50%"
                                          width="77.77777777777777%"
                                          fill="#46FF3D"
                                          y="50%"
                                          style={{ boxSizing: "border-box" }}
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div style={{ boxSizing: "border-box" }} />
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            boxSizing: "border-box",
                            padding: "20px 8px 8px",
                            width: "170px",
                            textAlign: "center",
                            position: "relative",
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
                              position: "absolute",
                              marginLeft: "50px",
                              top: "5px",
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
                                  d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                  style={{ boxSizing: "border-box" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="MuiTouchRipple-root-861"
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
                          <div style={{ boxSizing: "border-box" }}>
                            <div
                              title="Click to open Calories Budget in Weight Plan"
                              style={{ boxSizing: "border-box" }}
                            >
                              <div
                                style={{
                                  boxSizing: "border-box",
                                  cursor: "pointer",
                                }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    color: "rgb(176, 176, 176)",
                                    fontSize: "15px",
                                  }}
                                >
                                  Calorie Budget
                                </span>
                                <br style={{ boxSizing: "border-box" }} />
                                <div
                                  style={{
                                    boxSizing: "border-box",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <span
                                    style={{
                                      boxSizing: "border-box",
                                      overflow: "inherit",
                                      color: "rgb(55, 146, 180)",
                                      fontSize: "25px",
                                      height: "25px",
                                      lineHeight: "initial",
                                      wordBreak: "inherit",
                                    }}
                                  >
                                    1,838
                                  </span>
                                </div>
                              </div>
                            </div>
                            <span
                              title="Click to see Calories Analysis"
                              style={{ boxSizing: "border-box" }}
                            >
                              <svg
                                height="165"
                                width="150"
                                style={{
                                  boxSizing: "border-box",
                                  cursor: "pointer",
                                }}
                              >
                                <path
                                  d=" M 75 40.17 C 182.625 -3.246623249999999 145.875 187.78662325 76.75 150.44837675000002 C 4.125 187.78662325 -32.625 -3.246623249999999 75 40.17 Z"
                                  fill="none"
                                  stroke="#EEEEEE"
                                  strokeDasharray="431.00632155900513"
                                  strokeLinecap="round"
                                  strokeWidth="10"
                                  style={{ boxSizing: "border-box" }}
                                />
                                <g style={{ boxSizing: "border-box" }}>
                                  <defs style={{ boxSizing: "border-box" }}>
                                    <lineargradient
                                      id="gg1"
                                      x1="0"
                                      x2="1"
                                      y1="0"
                                      y2="0"
                                      style={{ boxSizing: "border-box" }}
                                    >
                                      <stop
                                        offset="0%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <stop
                                        offset="50%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(148, 227, 38)",
                                        }}
                                      />
                                      <stop
                                        offset="100%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(125, 218, 31)",
                                        }}
                                      />
                                    </lineargradient>
                                    <lineargradient
                                      id="gg2"
                                      x1="0"
                                      x2="0"
                                      y1="0"
                                      y2="1"
                                      style={{ boxSizing: "border-box" }}
                                    >
                                      <stop
                                        offset="0%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <stop
                                        offset="49%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(125, 218, 31)",
                                        }}
                                      />
                                      <stop
                                        offset="100%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(102, 209, 24)",
                                        }}
                                      />
                                    </lineargradient>
                                    <lineargradient
                                      id="gg3"
                                      x1="1"
                                      x2="0"
                                      y1="0"
                                      y2="0"
                                      style={{ boxSizing: "border-box" }}
                                    >
                                      <stop
                                        offset="0%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <stop
                                        offset="49%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(102, 209, 24)",
                                        }}
                                      />
                                      <stop
                                        offset="100%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(76, 198, 16)",
                                        }}
                                      />
                                    </lineargradient>
                                    <lineargradient
                                      id="gg4"
                                      x1="0"
                                      x2="0"
                                      y1="1"
                                      y2="0"
                                      style={{ boxSizing: "border-box" }}
                                    >
                                      <stop
                                        offset="0%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <stop
                                        offset="51%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(76, 198, 16)",
                                        }}
                                      />
                                      <stop
                                        offset="100%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(53, 189, 9)",
                                        }}
                                      />
                                    </lineargradient>
                                    <lineargradient
                                      id="gr1"
                                      x1="0"
                                      x2="1"
                                      y1="0"
                                      y2="0"
                                      style={{ boxSizing: "border-box" }}
                                    >
                                      <stop
                                        offset="0%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <stop
                                        offset="50%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(252, 160, 160)",
                                        }}
                                      />
                                      <stop
                                        offset="100%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(250, 142, 141)",
                                        }}
                                      />
                                    </lineargradient>
                                    <lineargradient
                                      id="gr2"
                                      x1="0"
                                      x2="0"
                                      y1="0"
                                      y2="1"
                                      style={{ boxSizing: "border-box" }}
                                    >
                                      <stop
                                        offset="0%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <stop
                                        offset="48%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(250, 142, 141)",
                                        }}
                                      />
                                      <stop
                                        offset="100%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(246, 122, 121)",
                                        }}
                                      />
                                    </lineargradient>
                                    <lineargradient
                                      id="gr3"
                                      x1="1"
                                      x2="0"
                                      y1="0"
                                      y2="0"
                                      style={{ boxSizing: "border-box" }}
                                    >
                                      <stop
                                        offset="0%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <stop
                                        offset="49%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(246, 122, 121)",
                                        }}
                                      />
                                      <stop
                                        offset="100%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(243, 102, 101)",
                                        }}
                                      />
                                    </lineargradient>
                                    <lineargradient
                                      id="gr4"
                                      x1="0"
                                      x2="0"
                                      y1="1"
                                      y2="0"
                                      style={{ boxSizing: "border-box" }}
                                    >
                                      <stop
                                        offset="0%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <stop
                                        offset="50%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(243, 102, 101)",
                                        }}
                                      />
                                      <stop
                                        offset="100%"
                                        style={{
                                          boxSizing: "border-box",
                                          stopColor: "rgb(239, 82, 80)",
                                        }}
                                      />
                                    </lineargradient>
                                  </defs>
                                  <path
                                    d=" M 75 34.77 L 75 45.17 L 74 45.17 L 69 43.42 L 69 33.17 Z"
                                    fill="#EEEEEE"
                                    style={{ boxSizing: "border-box" }}
                                  />
                                </g>
                                <path
                                  d=" M 75 30.17 C 67.06666200000001 22.807492250000003 71.7333324 1.6700105000000036 79.2 6.920000000000002 C 89.4666648 13.670009750000002 75.4666662 14.277509 75 30.17 Z"
                                  fill="#ef5250"
                                  style={{ boxSizing: "border-box" }}
                                />
                                <g style={{ boxSizing: "border-box" }}>
                                  <text
                                    fill="#35bd09"
                                    fontSize="25"
                                    textAnchor="middle"
                                    x="50%"
                                    y="50%"
                                    style={{ boxSizing: "border-box" }}
                                  >
                                    0
                                  </text>
                                  <text
                                    dy="-0.5em"
                                    fill="#9f9d9a"
                                    fontSize="15"
                                    textAnchor="middle"
                                    x="50%"
                                    y="65%"
                                    style={{ boxSizing: "border-box" }}
                                  >
                                    Left
                                  </text>
                                  <text
                                    fill="#9f9d9a"
                                    fontSize="25"
                                    textAnchor="middle"
                                    x="50%"
                                    y="75%"
                                    style={{ boxSizing: "border-box" }}
                                  >
                                    1,838
                                  </text>
                                </g>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{
                        boxSizing: "border-box",
                        padding: "0px",
                        width: "70px",
                        textAlign: "right",
                        paddingTop: "5px",
                      }}
                    >
                      <div style={{ boxSizing: "border-box", width: "70px" }}>
                        <div
                          style={{
                            boxSizing: "border-box",
                            color: "rgb(110, 110, 110)",
                            fontSize: "12px",
                            height: "35px",
                          }}
                        >
                          Carbs
                        </div>
                        <div
                          title="Click to see Total Carbs Analysis"
                          style={{
                            boxSizing: "border-box",
                            color: "rgba(0, 0, 0, 0.87)",
                            height: "75px",
                            lineHeight: "initial",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <div style={{ boxSizing: "border-box" }}>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              0
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "12px",
                                width: "100%",
                              }}
                            >
                              left
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              207
                            </div>
                          </div>
                        </div>
                        <div
                          title="Click to see Total Carbs Analysis"
                          style={{
                            boxSizing: "border-box",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <svg
                            height="100"
                            width="20"
                            style={{ boxSizing: "border-box" }}
                          >
                            <g style={{ boxSizing: "border-box" }}>
                              <rect
                                height="100%"
                                width="100%"
                                fill="#EEEEEE"
                                style={{ boxSizing: "border-box" }}
                              />
                              <rect
                                height="0%"
                                width="100%"
                                fill="rgba(42,184,6,1)"
                                y="100%"
                                style={{ boxSizing: "border-box" }}
                              />
                            </g>
                          </svg>
                        </div>
                        <div
                          style={{
                            boxSizing: "border-box",
                            marginRight: "-14px",
                          }}
                        >
                          <button
                            id="actionsIcon"
                            className="MuiButtonBase-root-357 MuiIconButton-root-369"
                            type="button"
                            aria-haspopup="true"
                            tabIndex="0"
                            title="Click for more Total Carbs actions"
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
                              marginLeft: "auto",
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
                                  d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                  style={{ boxSizing: "border-box" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="MuiTouchRipple-root-861"
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
                      </div>
                    </td>
                    <td
                      style={{
                        boxSizing: "border-box",
                        padding: "0px",
                        width: "70px",
                        textAlign: "right",
                        paddingTop: "5px",
                      }}
                    >
                      <div style={{ boxSizing: "border-box", width: "70px" }}>
                        <div
                          style={{
                            boxSizing: "border-box",
                            color: "rgb(110, 110, 110)",
                            fontSize: "12px",
                            height: "35px",
                          }}
                        >
                          Protein
                        </div>
                        <div
                          title="Click to see Protein Analysis"
                          style={{
                            boxSizing: "border-box",
                            color: "rgba(0, 0, 0, 0.87)",
                            height: "75px",
                            lineHeight: "initial",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <div style={{ boxSizing: "border-box" }}>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              0
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "12px",
                                width: "100%",
                              }}
                            >
                              left
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              92
                            </div>
                          </div>
                        </div>
                        <div
                          title="Click to see Protein Analysis"
                          style={{
                            boxSizing: "border-box",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <svg
                            height="100"
                            width="20"
                            style={{ boxSizing: "border-box" }}
                          >
                            <g style={{ boxSizing: "border-box" }}>
                              <rect
                                height="100%"
                                width="100%"
                                fill="#EEEEEE"
                                style={{ boxSizing: "border-box" }}
                              />
                              <rect
                                height="0%"
                                width="100%"
                                fill="rgba(42,184,6,1)"
                                y="100%"
                                style={{ boxSizing: "border-box" }}
                              />
                            </g>
                          </svg>
                        </div>
                        <div
                          style={{
                            boxSizing: "border-box",
                            marginRight: "-14px",
                          }}
                        >
                          <button
                            id="actionsIcon"
                            className="MuiButtonBase-root-357 MuiIconButton-root-369"
                            type="button"
                            aria-haspopup="true"
                            tabIndex="0"
                            title="Click for more Protein actions"
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
                              marginLeft: "auto",
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
                                  d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                  style={{ boxSizing: "border-box" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="MuiTouchRipple-root-861"
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
                      </div>
                    </td>
                    <td
                      style={{
                        boxSizing: "border-box",
                        padding: "0px",
                        width: "70px",
                        textAlign: "right",
                        paddingTop: "5px",
                      }}
                    >
                      <div style={{ boxSizing: "border-box", width: "70px" }}>
                        <div
                          style={{
                            boxSizing: "border-box",
                            color: "rgb(110, 110, 110)",
                            fontSize: "12px",
                            height: "35px",
                          }}
                        >
                          Total Fat
                        </div>
                        <div
                          title="Click to see Total Fat Analysis"
                          style={{
                            boxSizing: "border-box",
                            color: "rgba(0, 0, 0, 0.87)",
                            height: "75px",
                            lineHeight: "initial",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <div style={{ boxSizing: "border-box" }}>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              0
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "12px",
                                width: "100%",
                              }}
                            >
                              left
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              71
                            </div>
                          </div>
                        </div>
                        <div
                          title="Click to see Total Fat Analysis"
                          style={{
                            boxSizing: "border-box",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <svg
                            height="100"
                            width="20"
                            style={{ boxSizing: "border-box" }}
                          >
                            <g style={{ boxSizing: "border-box" }}>
                              <rect
                                height="100%"
                                width="100%"
                                fill="#EEEEEE"
                                style={{ boxSizing: "border-box" }}
                              />
                              <rect
                                height="0%"
                                width="100%"
                                fill="rgba(42,184,6,1)"
                                y="100%"
                                style={{ boxSizing: "border-box" }}
                              />
                            </g>
                          </svg>
                        </div>
                        <div
                          style={{
                            boxSizing: "border-box",
                            marginRight: "-14px",
                          }}
                        >
                          <button
                            id="actionsIcon"
                            className="MuiButtonBase-root-357 MuiIconButton-root-369"
                            type="button"
                            aria-haspopup="true"
                            tabIndex="0"
                            title="Click for more Total Fat actions"
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
                              marginLeft: "auto",
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
                                  d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                  style={{ boxSizing: "border-box" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="MuiTouchRipple-root-861"
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
                      </div>
                    </td>
                    <td
                      style={{
                        boxSizing: "border-box",
                        padding: "0px",
                        width: "70px",
                        textAlign: "right",
                        paddingTop: "5px",
                      }}
                    >
                      <div style={{ boxSizing: "border-box", width: "70px" }}>
                        <div
                          style={{
                            boxSizing: "border-box",
                            color: "rgb(110, 110, 110)",
                            fontSize: "12px",
                            height: "35px",
                          }}
                        >
                          Fd. Grade
                        </div>
                        <div
                          title="Click to see Food Grade Settings"
                          style={{
                            boxSizing: "border-box",
                            height: "75px",
                            lineHeight: "initial",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        />
                        <div
                          title="Click to see Food Grade Settings"
                          style={{
                            boxSizing: "border-box",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <svg
                            height="100"
                            width="20"
                            style={{ boxSizing: "border-box" }}
                          />
                        </div>
                        <div
                          style={{
                            boxSizing: "border-box",
                            marginRight: "-14px",
                          }}
                        >
                          <button
                            id="actionsIcon"
                            className="MuiButtonBase-root-357 MuiIconButton-root-369"
                            type="button"
                            aria-haspopup="true"
                            tabIndex="0"
                            title="Click for more Food Grade actions"
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
                              marginLeft: "auto",
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
                                  d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                  style={{ boxSizing: "border-box" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="MuiTouchRipple-root-861"
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
                      </div>
                    </td>
                    <td
                      style={{
                        boxSizing: "border-box",
                        padding: "0px",
                        width: "70px",
                        textAlign: "right",
                        paddingTop: "5px",
                      }}
                    >
                      <div style={{ boxSizing: "border-box", width: "70px" }}>
                        <div
                          style={{
                            boxSizing: "border-box",
                            color: "rgb(110, 110, 110)",
                            fontSize: "12px",
                            height: "35px",
                          }}
                        >
                          Sat. Fat
                        </div>
                        <div
                          title="Click to see Saturated Fat Analysis"
                          style={{
                            boxSizing: "border-box",
                            color: "rgb(124, 97, 172)",
                            height: "75px",
                            lineHeight: "initial",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <div style={{ boxSizing: "border-box" }}>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              0
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "12px",
                                width: "100%",
                              }}
                            >
                              no target
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          title="Click to see Saturated Fat Analysis"
                          style={{
                            boxSizing: "border-box",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <svg
                            height="100"
                            width="20"
                            style={{ boxSizing: "border-box" }}
                          >
                            <g style={{ boxSizing: "border-box" }}>
                              <rect
                                height="100%"
                                width="100%"
                                fill="#EEEEEE"
                                style={{ boxSizing: "border-box" }}
                              />
                              <rect
                                height="0%"
                                width="100%"
                                fill="rgba(149,117,205,1)"
                                y="100%"
                                style={{ boxSizing: "border-box" }}
                              />
                            </g>
                          </svg>
                        </div>
                        <div
                          style={{
                            boxSizing: "border-box",
                            marginRight: "-14px",
                          }}
                        >
                          <button
                            id="actionsIcon"
                            className="MuiButtonBase-root-357 MuiIconButton-root-369"
                            type="button"
                            aria-haspopup="true"
                            tabIndex="0"
                            title="Click for more Saturated Fat actions"
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
                              marginLeft: "auto",
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
                                  d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                  style={{ boxSizing: "border-box" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="MuiTouchRipple-root-861"
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
                      </div>
                    </td>
                    <td
                      style={{
                        boxSizing: "border-box",
                        padding: "0px",
                        width: "70px",
                        textAlign: "right",
                        paddingTop: "5px",
                      }}
                    >
                      <div style={{ boxSizing: "border-box", width: "70px" }}>
                        <div
                          style={{
                            boxSizing: "border-box",
                            color: "rgb(110, 110, 110)",
                            fontSize: "12px",
                            height: "35px",
                          }}
                        >
                          Trans Fat
                        </div>
                        <div
                          title="Click to see Trans Fat Analysis"
                          style={{
                            boxSizing: "border-box",
                            color: "rgba(0, 0, 0, 0.87)",
                            height: "75px",
                            lineHeight: "initial",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <div style={{ boxSizing: "border-box" }}>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              0
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "12px",
                                width: "100%",
                              }}
                            >
                              target
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              0
                            </div>
                          </div>
                        </div>
                        <div
                          title="Click to see Trans Fat Analysis"
                          style={{
                            boxSizing: "border-box",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <svg
                            height="100"
                            width="20"
                            style={{ boxSizing: "border-box" }}
                          >
                            <g style={{ boxSizing: "border-box" }}>
                              <rect
                                height="100%"
                                width="100%"
                                fill="#EEEEEE"
                                style={{ boxSizing: "border-box" }}
                              />
                              <rect
                                height="0%"
                                width="100%"
                                fill="rgba(238,238,238,1)"
                                y="100%"
                                style={{ boxSizing: "border-box" }}
                              />
                            </g>
                          </svg>
                        </div>
                        <div
                          style={{
                            boxSizing: "border-box",
                            marginRight: "-14px",
                          }}
                        >
                          <button
                            id="actionsIcon"
                            className="MuiButtonBase-root-357 MuiIconButton-root-369"
                            type="button"
                            aria-haspopup="true"
                            tabIndex="0"
                            title="Click for more Trans Fat actions"
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
                              marginLeft: "auto",
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
                                  d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                  style={{ boxSizing: "border-box" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="MuiTouchRipple-root-861"
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
                      </div>
                    </td>
                    <td
                      style={{
                        boxSizing: "border-box",
                        padding: "0px",
                        width: "70px",
                        textAlign: "right",
                        paddingTop: "5px",
                      }}
                    >
                      <div style={{ boxSizing: "border-box", width: "70px" }}>
                        <div
                          style={{
                            boxSizing: "border-box",
                            color: "rgb(110, 110, 110)",
                            fontSize: "12px",
                            height: "35px",
                          }}
                        >
                          Sodium
                        </div>
                        <div
                          title="Click to see Sodium Analysis"
                          style={{
                            boxSizing: "border-box",
                            color: "rgb(124, 97, 172)",
                            height: "75px",
                            lineHeight: "initial",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <div style={{ boxSizing: "border-box" }}>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              0
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "12px",
                                width: "100%",
                              }}
                            >
                              left
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              2,300
                            </div>
                          </div>
                        </div>
                        <div
                          title="Click to see Sodium Analysis"
                          style={{
                            boxSizing: "border-box",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <svg
                            height="100"
                            width="20"
                            style={{ boxSizing: "border-box" }}
                          >
                            <g style={{ boxSizing: "border-box" }}>
                              <rect
                                height="100%"
                                width="100%"
                                fill="#EEEEEE"
                                style={{ boxSizing: "border-box" }}
                              />
                              <rect
                                height="0%"
                                width="100%"
                                fill="rgba(149,117,205,1)"
                                y="100%"
                                style={{ boxSizing: "border-box" }}
                              />
                            </g>
                          </svg>
                        </div>
                        <div
                          style={{
                            boxSizing: "border-box",
                            marginRight: "-14px",
                          }}
                        >
                          <button
                            id="actionsIcon"
                            className="MuiButtonBase-root-357 MuiIconButton-root-369"
                            type="button"
                            aria-haspopup="true"
                            tabIndex="0"
                            title="Click for more Sodium actions"
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
                              marginLeft: "auto",
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
                                  d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                  style={{ boxSizing: "border-box" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="MuiTouchRipple-root-861"
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
                      </div>
                    </td>
                    <td
                      style={{
                        boxSizing: "border-box",
                        padding: "0px",
                        width: "70px",
                        textAlign: "right",
                        paddingTop: "5px",
                      }}
                    >
                      <div style={{ boxSizing: "border-box", width: "70px" }}>
                        <div
                          style={{
                            boxSizing: "border-box",
                            color: "rgb(110, 110, 110)",
                            fontSize: "12px",
                            height: "35px",
                          }}
                        >
                          Fiber
                        </div>
                        <div
                          title="Click to see Dietary Fiber Analysis"
                          style={{
                            boxSizing: "border-box",
                            color: "rgb(124, 97, 172)",
                            height: "75px",
                            lineHeight: "initial",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <div style={{ boxSizing: "border-box" }}>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              0
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "12px",
                                width: "100%",
                              }}
                            >
                              left
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              26
                            </div>
                          </div>
                        </div>
                        <div
                          title="Click to see Dietary Fiber Analysis"
                          style={{
                            boxSizing: "border-box",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <svg
                            height="100"
                            width="20"
                            style={{ boxSizing: "border-box" }}
                          >
                            <g style={{ boxSizing: "border-box" }}>
                              <rect
                                height="100%"
                                width="100%"
                                fill="#EEEEEE"
                                style={{ boxSizing: "border-box" }}
                              />
                              <rect
                                height="0%"
                                width="100%"
                                fill="rgba(149,117,205,1)"
                                y="100%"
                                style={{ boxSizing: "border-box" }}
                              />
                            </g>
                          </svg>
                        </div>
                        <div
                          style={{
                            boxSizing: "border-box",
                            marginRight: "-14px",
                          }}
                        >
                          <button
                            id="actionsIcon"
                            className="MuiButtonBase-root-357 MuiIconButton-root-369"
                            type="button"
                            aria-haspopup="true"
                            tabIndex="0"
                            title="Click for more Dietary Fiber actions"
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
                              marginLeft: "auto",
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
                                  d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                  style={{ boxSizing: "border-box" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="MuiTouchRipple-root-861"
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
                      </div>
                    </td>
                    <td
                      style={{
                        boxSizing: "border-box",
                        padding: "0px",
                        width: "70px",
                        textAlign: "right",
                        paddingTop: "5px",
                      }}
                    >
                      <div style={{ boxSizing: "border-box", width: "70px" }}>
                        <div
                          style={{
                            boxSizing: "border-box",
                            color: "rgb(110, 110, 110)",
                            fontSize: "12px",
                            height: "35px",
                          }}
                        >
                          Calcium
                        </div>
                        <div
                          title="Click to see Calcium Analysis"
                          style={{
                            boxSizing: "border-box",
                            color: "rgb(124, 97, 172)",
                            height: "75px",
                            lineHeight: "initial",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <div style={{ boxSizing: "border-box" }}>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              0%
                            </div>
                            <div
                              style={{
                                boxSizing: "border-box",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              0
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  fontSize: "12px",
                                }}
                              >
                                mg
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          title="Click to see Calcium Analysis"
                          style={{
                            boxSizing: "border-box",
                            cursor: "pointer",
                            textAlign: "right",
                          }}
                        >
                          <svg
                            height="100"
                            width="20"
                            style={{ boxSizing: "border-box" }}
                          >
                            <g style={{ boxSizing: "border-box" }}>
                              <rect
                                height="100%"
                                width="100%"
                                fill="#EEEEEE"
                                style={{ boxSizing: "border-box" }}
                              />
                              <rect
                                height="0%"
                                width="100%"
                                fill="rgba(149,117,205,1)"
                                y="100%"
                                style={{ boxSizing: "border-box" }}
                              />
                            </g>
                          </svg>
                        </div>
                        <div
                          style={{
                            boxSizing: "border-box",
                            marginRight: "-14px",
                          }}
                        >
                          <button
                            id="actionsIcon"
                            className="MuiButtonBase-root-357 MuiIconButton-root-369"
                            type="button"
                            aria-haspopup="true"
                            tabIndex="0"
                            title="Click for more Calcium actions"
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
                              marginLeft: "auto",
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
                                  d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                  style={{ boxSizing: "border-box" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="MuiTouchRipple-root-861"
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
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              width: "fit-content",
            }}
          >
            <div
              style={{
                boxSizing: "border-box",
                display: "table",
                textAlign: "right",
                marginTop: "16px",
                width: "1120px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  display: "table-cell",
                  width: "60%",
                }}
              >
                <div
                  className="MuiPaper-root-312 MuiPaper-elevation1-315 MuiPaper-rounded-313"
                  style={{
                    boxSizing: "border-box",
                    transition:
                      "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    color: "rgba(0, 0, 0, 0.87)",
                    backgroundColor: "rgb(255, 255, 255)",
                    borderRadius: "4px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
                    padding: "8px",
                  }}
                >
                  <div style={{ boxSizing: "border-box", height: "100%" }}>
                    <div
                      style={{
                        boxSizing: "border-box",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        color: "rgb(34, 89, 110)",
                      }}
                    >
                      <div
                        style={{ boxSizing: "border-box", textAlign: "center" }}
                      >
                        <div
                          style={{
                            boxSizing: "border-box",
                            display: "table-cell",
                            verticalAlign: "middle",
                          }}
                        >
                          <img
                            width={40}
                            src="https://s3.amazonaws.com/img.mynetdiary.com/advice/2020/14_bulb@3x.png"
                            style={{ boxSizing: "border-box" }}
                            alt="img1"
                          />
                        </div>
                        <div
                          style={{
                            boxSizing: "border-box",
                            display: "table-cell",
                            width: "100%",
                            textAlign: "left",
                            paddingLeft: "10px",
                            verticalAlign: "middle",
                          }}
                        >
                          Try logging your meals before you eat. This will help
                          you stick to your calorie budget. If needed, you can
                          adjust your log after eating.
                        </div>
                        <div
                          style={{
                            boxSizing: "border-box",
                            display: "table-cell",
                          }}
                        >
                          <button
                            id="wa"
                            className="MuiButtonBase-root-357 MuiIconButton-root-369"
                            type="button"
                            aria-haspopup="true"
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
                              cssFloat: "right",
                              top: "-6px",
                              right: "-6px",
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
                                  d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                  style={{ boxSizing: "border-box" }}
                                />
                              </svg>
                            </span>
                            <span
                              className="MuiTouchRipple-root-861"
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
                      </div>
                      <div
                        style={{
                          boxSizing: "border-box",
                          textAlign: "right",
                          marginTop: "auto",
                        }}
                      >
                        <button
                          className="MuiButtonBase-root-357 MuiButton-root-844 MuiButton-text-846 MuiButton-textPrimary-847"
                          type="button"
                          tabIndex="0"
                          title="Click to hide  this Advice"
                          style={{
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
                            transition:
                              "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                            borderRadius: "4px",
                            fontSize: "0.875rem",
                            minWidth: "64px",
                            boxSizing: "border-box",
                            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                            fontWeight: 500,
                            lineHeight: 1.75,
                            letterSpacing: "0.02857em",
                            textTransform: "uppercase",
                            padding: "6px 8px",
                            color: "rgb(60, 158, 195)",
                          }}
                        >
                          <span
                            className="MuiButton-label-845"
                            style={{
                              boxSizing: "border-box",
                              width: "100%",
                              display: "inherit",
                              alignItems: "inherit",
                              justifyContent: "inherit",
                            }}
                          >
                            Got It!
                          </span>
                          <span
                            className="MuiTouchRipple-root-861"
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
                          className="MuiButtonBase-root-357 MuiButton-root-844 MuiButton-text-846 MuiButton-textPrimary-847"
                          type="button"
                          tabIndex="0"
                          title="Click to see your other Advice"
                          style={{
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
                            transition:
                              "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                            borderRadius: "4px",
                            fontSize: "0.875rem",
                            minWidth: "64px",
                            boxSizing: "border-box",
                            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                            fontWeight: 500,
                            lineHeight: 1.75,
                            letterSpacing: "0.02857em",
                            textTransform: "uppercase",
                            padding: "6px 8px",
                            color: "rgb(60, 158, 195)",
                          }}
                        >
                          <span
                            className="MuiButton-label-845"
                            style={{
                              boxSizing: "border-box",
                              width: "100%",
                              display: "inherit",
                              alignItems: "inherit",
                              justifyContent: "inherit",
                            }}
                          >
                            My Advice
                          </span>
                          <span
                            className="MuiTouchRipple-root-861"
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
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  display: "table-cell",
                  verticalAlign: "top",
                  paddingLeft: "8px",
                  width: "40%",
                  textAlign: "left",
                }}
              >
                <button
                  className="MuiButtonBase-root-357 MuiButton-root-844 MuiButton-text-846 MuiButton-textPrimary-847"
                  type="button"
                  tabIndex="0"
                  style={{
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
                    transition:
                      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                    minWidth: "64px",
                    boxSizing: "border-box",
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    fontWeight: 500,
                    lineHeight: 1.75,
                    letterSpacing: "0.02857em",
                    textTransform: "uppercase",
                    padding: "6px 8px",
                    color: "rgb(60, 158, 195)",
                    marginRight: "8px",
                  }}
                >
                  <span
                    className="MuiButton-label-845"
                    style={{
                      boxSizing: "border-box",
                      width: "100%",
                      display: "inherit",
                      alignItems: "inherit",
                      justifyContent: "inherit",
                    }}
                  >
                    Day Report
                  </span>
                  <span
                    className="MuiTouchRipple-root-861"
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
                  className="MuiButtonBase-root-357 MuiButton-root-844 MuiButton-text-846 MuiButton-textPrimary-847"
                  type="button"
                  tabIndex="0"
                  style={{
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
                    transition:
                      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                    minWidth: "64px",
                    boxSizing: "border-box",
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    fontWeight: 500,
                    lineHeight: 1.75,
                    letterSpacing: "0.02857em",
                    textTransform: "uppercase",
                    padding: "6px 8px",
                    color: "rgb(60, 158, 195)",
                    marginRight: "8px",
                  }}
                >
                  <span
                    className="MuiButton-label-845"
                    style={{
                      boxSizing: "border-box",
                      width: "100%",
                      display: "inherit",
                      alignItems: "inherit",
                      justifyContent: "inherit",
                    }}
                  >
                    Daily Analysis
                  </span>
                  <span
                    className="MuiTouchRipple-root-861"
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
                <a
                  className="MuiButtonBase-root-357 MuiButton-root-844 MuiButton-text-846 MuiButton-textPrimary-847"
                  aria-disabled="false"
                  href="https://www.mynetdiary.com/help_meals.html"
                  tabIndex="0"
                  style={{
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
                    transition:
                      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                    minWidth: "64px",
                    boxSizing: "border-box",
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    fontWeight: 500,
                    lineHeight: 1.75,
                    letterSpacing: "0.02857em",
                    textTransform: "uppercase",
                    padding: "6px 8px",
                    color: "rgb(60, 158, 195)",
                    marginRight: "8px",
                  }}
                >
                  <span
                    className="MuiButton-label-845"
                    style={{
                      boxSizing: "border-box",
                      width: "100%",
                      display: "inherit",
                      alignItems: "inherit",
                      justifyContent: "inherit",
                    }}
                  >
                    Help
                  </span>
                  <span
                    className="MuiTouchRipple-root-861"
                    style={{
                      boxSizing: "border-box",
                      inset: "0px",
                      overflow: "hidden",
                      borderRadius: "inherit",
                      position: "absolute",
                      pointerEvents: "none",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ boxSizing: "border-box" }}>
          <button
            className="MuiButtonBase-root-157 MuiButton-root-140 MuiButton-contained-148 MuiButton-containedPrimary-149"
            type="button"
            tabIndex="0"
            style={{
              border: "0px",
              margin: "0px",
              outline: "0px",
              textDecoration: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              userSelect: "none",
              verticalAlign: "middle",
              justifyContent: "center",
              appearance: "none",
              WebkitTapHighlightColor: "transparent",
              padding: "6px 16px",
              transition:
                "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              borderRadius: "4px",
              fontSize: "0.875rem",
              minWidth: "64px",
              boxSizing: "border-box",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontWeight: 500,
              lineHeight: 1.75,
              letterSpacing: "0.02857em",
              textTransform: "uppercase",
              boxShadow:
                "rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px",
              color: "rgb(255, 255, 255)",
              backgroundColor: "rgb(60, 158, 195)",
              position: "fixed",
              bottom: "0px",
              right: "0px",
              zIndex: 1,
            }}
          >
            <span
              className="MuiButton-label-141"
              style={{
                boxSizing: "border-box",
                width: "100%",
                display: "inherit",
                alignItems: "inherit",
                justifyContent: "inherit",
              }}
            >
              Send Feedback
            </span>
            <span
              className="MuiTouchRipple-root-237"
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
        <div style={{ boxSizing: "border-box" }} />
        <div
          className="MuiPaper-root-167 MuiPaper-elevation1-170 MuiPaper-rounded-168"
          style={{
            boxSizing: "border-box",
            color: "rgba(0, 0, 0, 0.87)",
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "4px",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
            padding: "16px",
            transition: "all 600ms ease-in-out 0s",
            marginBottom: "16px",
            zIndex: 100,
            display: "flex",
            width: "600px",
            bottom: "0px",
            left: "50%",
            position: "fixed",
            visibility: "hidden",
            transform: "translate(-50%, 48px)",
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              transition: "opacity 600ms ease-in-out 0s",
              opacity: 0,
            }}
          >
            <div style={{ boxSizing: "border-box", display: "table" }}>
              <div
                style={{
                  boxSizing: "border-box",
                  display: "table-cell",
                  verticalAlign: "middle",
                }}
              >
                <img
                  src="https://www.mynetdiary.com/img/advice/adviceFeedback4@3x.png"
                  style={{
                    boxSizing: "border-box",
                    width: "48px",
                    marginRight: "8px",
                  }}
                  alt="img1"
                />
              </div>
              <div
                style={{
                  boxSizing: "border-box",
                  display: "table-cell",
                  color: "rgb(34, 89, 110)",
                }}
              />
            </div>
            <div style={{ boxSizing: "border-box", textAlign: "right" }}>
              <button
                className="MuiButtonBase-root-211 MuiButton-root-194 MuiButton-text-196 MuiButton-textPrimary-197"
                type="button"
                tabIndex="0"
                style={{
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
                  transition:
                    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  borderRadius: "4px",
                  fontSize: "0.875rem",
                  minWidth: "64px",
                  boxSizing: "border-box",
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  fontWeight: 500,
                  lineHeight: 1.75,
                  letterSpacing: "0.02857em",
                  textTransform: "uppercase",
                  padding: "6px 8px",
                  color: "rgb(60, 158, 195)",
                }}
              >
                <span
                  className="MuiButton-label-195"
                  style={{
                    boxSizing: "border-box",
                    width: "100%",
                    display: "inherit",
                    alignItems: "inherit",
                    justifyContent: "inherit",
                  }}
                />
                <span
                  className="MuiTouchRipple-root-247"
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
          </div>
        </div>
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
