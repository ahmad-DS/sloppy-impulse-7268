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
} from "@chakra-ui/react";
import FoodTableHeader from "./FoodTableHeader";
import Apple from "./Apple";

export default function FoodPlan({ display }) {
  const { breakfast, lunch, dinner, snacks } = tableMenu;

  const [lunchData, setLunchData] = useState([]);
  const [dinnerData, setDinnerData] = useState([]);
  const [breakfastData, setBreakfastData] = useState([]);
  const [snackData, setSnacksData] = useState([]);

  const [totalCals, setTotalCals] = useState(0);

  const handleCalories = (arr) => {
    let total = JSON.parse(localStorage.getItem("totalCalories")) || 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].cals !== null) {
        total += arr[i].cals;
      }
    }
    setTotalCals(total);
    localStorage.setItem("totalCals", total);
  };

  useEffect(() => {
    handleCalories([
      ...lunchData,
      ...breakfastData,
      ...dinnerData,
      ...snackData,
    ]);
  }, [lunchData, breakfastData, dinnerData, snackData]);

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
        }}
      >
        <Apple val={totalCals} />
      </div>
    </div>
  );
}
