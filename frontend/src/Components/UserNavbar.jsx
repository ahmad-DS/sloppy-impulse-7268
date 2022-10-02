import React from "react";
//https://s3.amazonaws.com/img.mynetdiary.com/logo_react.png-box
//https://www.mynetdiary.com/img/icon/date_range.png
//https://s3.amazonaws.com/img.mynetdiary.com/left.png
//https://s3.amazonaws.com/img.mynetdiary.com/right.png
//https://www.mynetdiary.com/img/Premium_planning_x2.png

import { Box, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import Calendar1 from "./Calendar1";
const links = [
  {
    to: "/user",
    title: "DASHBOARD",
  },
  {
    to: "/user/plan",
    title: "PLAN",
  },
  {
    to: "/user/food",
    title: "FOOD",
  },
  {
    to: "/user/exercise",
    title: "EXERCISE",
  },
  {
    to: "/user/analysis",
    title: "ANAYSIS",
  },
  {
    to: "/user/community",
    title: "COMMUNITY",
  },
  {
    to: "/user/settings",
    title: "SETTINGS",
  },
];

const baseStyle = {
  color: "black",
  textDecoration: "none",
};

const activeStyle = {
  color: "white",
  textDecoration: "underline",
};

const UserNavbar = () => {
  return (
    <Flex direction="column" backgroundColor={"green"}>
      <Flex>
        <HStack spacing={20}>
          <Image
            h="60px"
            src="https://s3.amazonaws.com/img.mynetdiary.com/logo_react.png"
          />
          {/* calendar component */}
          <Calendar1 />
        </HStack>
        <Spacer />

        <Box p="4">
          <Image src="https://www.mynetdiary.com/img/Premium_planning_x2.png" />
        </Box>
      </Flex>
      <Flex justifyContent="space-around">
        {links.map((el, index) => (
          <Box key={index}>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to={el.to}
              key={el.to}
            >
              {el.title}
            </NavLink>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};


export default UserNavbar;
