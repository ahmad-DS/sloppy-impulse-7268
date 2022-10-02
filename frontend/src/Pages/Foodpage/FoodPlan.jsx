import React, { useState } from "react";
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

export default function FoodPlan({ display }) {
  const { breakfast, lunch, dinner, snacks } = tableMenu;

  const [lunchData, setLunchData] = useState([]);
  const [dinnerData, setDinnerData] = useState([]);
  const [breakfastData, setBreakfastData] = useState([]);
  const [snachData, setSnacksData] = useState([]);

  const [totalCals, setTotalCals] = useState(0);

  const handleLunch = (data) => {
    setLunchData([...lunchData, data]);
    setTotalCals(totalCals + data.cals);
  };
  const handleDinner = (data) => {
    setDinnerData([...dinnerData, data]);
    setTotalCals(totalCals + data.cals);
  };
  const handleSnacks = (data) => {
    setSnacksData([...snachData, data]);
    setTotalCals(totalCals + data.cals);
  };
  const handleBreakfast = (data) => {
    setBreakfastData([...breakfastData, data]);
    setTotalCals(totalCals + data.cals);
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
              mealData={snachData}
              handleMeals={handleSnacks}
            />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
