import React, { useState, useEffect } from "react";
import { tableMenu } from "../../Data/tableMenu";
import FoodForm from "./FoodForm";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuDivider,
  CircularProgress,
  CircularProgressLabel,
  Progress,
} from "@chakra-ui/react";
import FoodTableHeader from "./FoodTableHeader";
import fitnessCalculatorFunctions from "fitness-calculator";

export default function FoodPlan({ display }) {
  const { breakfast, lunch, dinner, snacks } = tableMenu;

  const age = +localStorage.getItem("age");
  const cweight = +localStorage.getItem("current_weight");
  const tweight = +localStorage.getItem("target_weight");
  const height = +localStorage.getItem("height");
  const gender = localStorage.getItem("gender");

  const [lunchData, setLunchData] = useState([]);
  const [dinnerData, setDinnerData] = useState([]);
  const [breakfastData, setBreakfastData] = useState([]);
  const [snackData, setSnacksData] = useState([]);

  const [totalCals, setTotalCals] = useState(0);

  const [macros, setMacros] = useState({});
  const [calsRequired, setCalsRequired] = useState(0);

  const [plan, setPlan] = useState({ carb: 0, protein: 0, fat: 0 });

  useEffect(() => {
    let temp = cweight - tweight;
    let macros;
    let calsNeed = fitnessCalculatorFunctions.calorieNeeds(
      gender,
      age,
      height,
      cweight,
      "sedentary"
    );
    if (temp < 0) {
      macros = fitnessCalculatorFunctions.macros(
        gender,
        age,
        height,
        cweight,
        "sedentary",
        "mildWeightLoss"
      );
      setCalsRequired(calsNeed.mildWeightGain);
      setPlan({ carb: 40, protein: 30, fat: 30 });
    } else if (temp > 0) {
      macros = fitnessCalculatorFunctions.macros(
        gender,
        age,
        height,
        cweight,
        "sedentary",
        "mildWeightGain"
      );
      setCalsRequired(calsNeed.mildWeightLoss);
      setPlan({ carb: 40, protein: 30, fat: 30 });
    } else {
      macros = fitnessCalculatorFunctions.macros(
        gender,
        age,
        height,
        cweight,
        "sedentary",
        "balance"
      );
      setCalsRequired(calsNeed.balance);
      setPlan({ carb: 40, protein: 30, fat: 30 });
    }
    setMacros(macros);
  }, []);

  const handleCalories = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].cals !== null) {
        total += arr[i].cals;
      }
    }
    setTotalCals(total);
    localStorage.setItem("totalCals", total);
  };

  const [breakfastCalories, setBreakfastCalories] = useState(0);
  const [lunchCalories, setLunchCalories] = useState(0);
  const [dinnerCalories, setDinnerCalories] = useState(0);
  const [snackCalories, setSnackCalories] = useState(0);

  const handleBreakfastCalories = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].cals !== null) {
        total += arr[i].cals;
      }
    }
    setBreakfastCalories(total);
  };

  const handleLunchCalories = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].cals !== null) {
        total += arr[i].cals;
      }
    }
    setLunchCalories(total);
  };

  const handleDinnerCalories = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].cals !== null) {
        total += arr[i].cals;
      }
    }
    setDinnerCalories(total);
  };

  const handleSnackCalories = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].cals !== null) {
        total += arr[i].cals;
      }
    }
    setSnackCalories(total);
  };

  useEffect(() => {
    handleCalories([
      ...lunchData,
      ...breakfastData,
      ...dinnerData,
      ...snackData,
    ]);
  }, [lunchData, breakfastData, dinnerData, snackData]);

  useEffect(() => {
    handleBreakfastCalories(breakfastData);
  }, [breakfastData]);

  useEffect(() => {
    handleLunchCalories(lunchData);
  }, [lunchData]);

  useEffect(() => {
    handleDinnerCalories(dinnerData);
  }, [dinnerData]);

  useEffect(() => {
    handleSnackCalories(snackData);
  }, [snackData]);

  const handleLunch = (data) => {
    setLunchData([...lunchData, data]);
  };
  const handleDinner = (data) => {
    setDinnerData([...dinnerData, data]);
  };
  const handleSnacks = (data) => {
    setSnacksData([...snackData, data]);
  };
  const handleBreakfast = (data) => {
    setBreakfastData([...breakfastData, data]);
  };

  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState("green");

  const calculateProgress = () => {
    const percentage = Math.floor((totalCals / calsRequired) * 100);
    setProgress(percentage);
    if (percentage < 50) {
      setColor("green");
    } else if (percentage < 75) {
      setColor("yellow");
    } else if (percentage >= 75) {
      setColor("red");
    } else {
      setColor("none");
    }
  };

  useEffect(() => {
    calculateProgress();
  }, [totalCals]);

  localStorage.setItem("totalCalories", totalCals);
  localStorage.setItem("calsRequired", calsRequired);
  localStorage.setItem("breakfastCalories", breakfastCalories);
  localStorage.setItem("lunchCalories", lunchCalories);
  localStorage.setItem("dinnerCalories", dinnerCalories);
  localStorage.setItem("snackCalories", snackCalories);

  return (
    <div style={{ padding: "0 1rem" }}>
      <FoodTableHeader display={display} />
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2
            style={{
              backgroundColor: "#e8f7e9",
              fontSize: "18px",
              display: "flex",
            }}
          >
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Breakfast
              </Box>
            </AccordionButton>
            <div>
              <Menu>
                <MenuButton style={{ backgroundColor: "#e8f7e9" }} as={Button}>
                  <BiDotsVerticalRounded />
                </MenuButton>
                <MenuList>
                  <MenuItem>Copy</MenuItem>
                  <MenuItem>Move</MenuItem>
                  <MenuItem
                    onClick={() => {
                      setBreakfastData([]);
                    }}
                  >
                    Delete
                  </MenuItem>
                  <MenuDivider />

                  <MenuItem>Change Time</MenuItem>
                  <MenuItem>Create Recipe From Food</MenuItem>
                  <MenuItem>Create Meals From Food</MenuItem>
                  <MenuItem>Add to Favorites</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </h2>
          <AccordionPanel pb={4}>
            <FoodForm
              meals={breakfast}
              mealData={breakfastData}
              handleMeals={handleBreakfast}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2
            style={{
              backgroundColor: "#e8f7e9",
              fontSize: "18px",
              display: "flex",
            }}
          >
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Lunch
              </Box>
            </AccordionButton>
            <div>
              <Menu>
                <MenuButton style={{ backgroundColor: "#e8f7e9" }} as={Button}>
                  <BiDotsVerticalRounded />
                </MenuButton>
                <MenuList>
                  <MenuItem>Copy</MenuItem>
                  <MenuItem>Move</MenuItem>
                  <MenuItem
                    onClick={() => {
                      setLunchData([]);
                    }}
                  >
                    Delete
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>Change Time</MenuItem>
                  <MenuItem>Create Recipe From Food</MenuItem>
                  <MenuItem>Create Meals From Food</MenuItem>
                  <MenuItem>Add to Favorites</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </h2>
          <AccordionPanel pb={4}>
            <FoodForm
              meals={lunch}
              mealData={lunchData}
              handleMeals={handleLunch}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2
            style={{
              backgroundColor: "#e8f7e9",
              fontSize: "18px",
              display: "flex",
            }}
          >
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Dinner
              </Box>
            </AccordionButton>
            <div>
              <Menu>
                <MenuButton style={{ backgroundColor: "#e8f7e9" }} as={Button}>
                  <BiDotsVerticalRounded />
                </MenuButton>
                <MenuList>
                  <MenuItem>Copy</MenuItem>
                  <MenuItem>Move</MenuItem>
                  <MenuItem
                    onClick={() => {
                      setDinnerData([]);
                    }}
                  >
                    Delete
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>Change Time</MenuItem>
                  <MenuItem>Create Recipe From Food</MenuItem>
                  <MenuItem>Create Meals From Food</MenuItem>
                  <MenuItem>Add to Favorites</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </h2>
          <AccordionPanel pb={4}>
            <FoodForm
              meals={dinner}
              mealData={dinnerData}
              handleMeals={handleDinner}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2
            style={{
              backgroundColor: "#e8f7e9",
              fontSize: "18px",
              display: "flex",
            }}
          >
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                Snacks
              </Box>
            </AccordionButton>
            <div>
              <Menu>
                <MenuButton style={{ backgroundColor: "#e8f7e9" }} as={Button}>
                  <BiDotsVerticalRounded />
                </MenuButton>
                <MenuList>
                  <MenuItem>Copy</MenuItem>
                  <MenuItem>Move</MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSnacksData([]);
                    }}
                  >
                    Delete
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>Change Time</MenuItem>
                  <MenuItem>Create Recipe From Food</MenuItem>
                  <MenuItem>Create Meals From Food</MenuItem>
                  <MenuItem>Add to Favorites</MenuItem>
                </MenuList>
              </Menu>
            </div>
          </h2>
          <AccordionPanel pb={4}>
            <FoodForm
              meals={snacks}
              mealData={snackData}
              handleMeals={handleSnacks}
            />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <div
        style={{
          marginTop: "2rem",
          borderTop: "1px solid gray",
          padding: "2rem 0",
          display: "flex",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "300px" }}>
            <div>
              <span>carb</span>
              <span>
                <Progress colorScheme="green" size="md" value={plan.carb} />
              </span>
            </div>
            <div style={{ margin: "2rem 0" }}>
              <span>protein</span>
              <span>
                <Progress colorScheme="green" size="md" value={plan.protein} />
              </span>
            </div>
            <div>
              <span>fat</span>
              <span>
                <Progress colorScheme="green" size="md" value={plan.fat} />
              </span>
            </div>
          </div>
        </div>
        <div>
          <CircularProgress
            size="250px"
            thickness="3px"
            value={progress}
            color={color}
          >
            <CircularProgressLabel>
              <div>
                <div style={{ fontSize: "24px", color: "green" }}>
                  {totalCals}
                </div>
                <div style={{ color: "gray", fontSize: "16px" }}>Left</div>
                <div style={{ fontSize: "24px", color: "gray" }}>
                  {Math.floor(calsRequired - totalCals) > 0
                    ? Math.floor(calsRequired - totalCals)
                    : "Calories Exceeded"}
                </div>
              </div>
            </CircularProgressLabel>
          </CircularProgress>
        </div>
      </div>
    </div>
  );
}
