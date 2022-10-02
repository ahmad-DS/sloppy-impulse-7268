import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Flex,
  ListItem,
  UnorderedList,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Text,
  Icon,
  Image,
} from "@chakra-ui/react";
import phone from "./images/phone.png";
import watch from "./images/watch.png";
import cherry from "./images/left.png";
import plate from "./images/right.png";
import apple from "./images/apple.png";
import android from "./images/android.png";
import fullStar from "./images/fullStar.png";
import halfStar from "./images/halfStar.png";
import applestore from "./images/store/appleStore.svg";
import playStore from "./images/store/playStore.svg";
import styles from "./uppersection.module.css";
import homeLogo from "../Navbar/images/logo-dark.svg";
import { Link, useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../Navbar/Navbardata";
import { v4 as uuidv4 } from "uuid";
const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

const UpperSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        className={styles.container}
        as="section"
        width={"100%"}
        position={"relative"}
        overflow={"hidden"}
        pb="200px"
      >
        <Box
          as="nav"
          bgColor={"white"}
          position={"fixed"}
          top="0px"
          w="100%"
          zIndex={100000}
          p="0 10px"
        >
          <Flex maxW={"1470px"} m="auto" p="5px 15px">
            <Link to="/">
              <Box
                cursor="pointer"
                height={"50px"}
                width="220px"
                display={"block"}
                background={`url(${homeLogo}) 50% 50% no-repeat`}
                backgroundSize={"contain"}
                marginBottom="5px"
              ></Box>
            </Link>
            {/* Right Side  */}

            <Flex flex="1" justifyContent={"space-between"}>
              <UnorderedList
                display={"flex"}
                alignItems={"center"}
                listStyleType="none"
                ml="0"
                justifyContent={"center"}
                flex="1"
              >
                {NAV_ITEMS &&
                  NAV_ITEMS.map((navItem, index) => (
                    <Menu key={uuidv4()}>
                      {({ isOpen }) => (
                        <ListItem
                          p="0 20px"
                          height={"85%"}
                          color={"#46618a"}
                          border={
                            isOpen
                              ? "1px solid #E2E8F0"
                              : "1px solid transparent"
                          }
                          boxShadow={isOpen ? "md" : ""}
                          rounded={"5px 5px 0 0"}
                          fontWeight={500}
                          fontSize={"22px"}
                          position="relative"
                          cursor={"pointer"}
                          zIndex={100}
                          _before={
                            index !== 0
                              ? {
                                  display: "block",
                                  position: "absolute",
                                  top: "0.9rem",
                                  left: "-0.2rem",
                                  height: "0.4rem",
                                  width: "0.4rem",
                                  content: '""',
                                  background: "#beaeac",
                                  transform: " rotate(45deg)",
                                }
                              : ""
                          }
                        >
                          <MenuButton zIndex={10} as="button" colorScheme="red">
                            <Text color={isOpen ? "#ff8e3e" : ""}>
                              {navItem.label}
                            </Text>
                          </MenuButton>
                          {navItem.children && (
                            <MenuList
                              ml="-1.3rem"
                              mt="2px"
                              boxShadow={"md"}
                              rounded={"0 5px 5px 5px"}
                              style={{ zIndex: "-10 !important" }}
                              pl="10px"
                              pr="10px"
                              minW={"18rem"}
                            >
                              {navItem.children.map((child) => (
                                <>
                                  {child.href ? (
                                    <Link to={child.href}>
                                      <MenuItem
                                        key={uuidv4()}
                                        rounded="5px"
                                        fontSize={"xl"}
                                        _hover={{
                                          background: "#ff8e3e",
                                          color: "white",
                                        }}
                                        icon={
                                          child.icon ? (
                                            ""
                                          ) : (
                                            <CircleIcon boxSize={2} />
                                          )
                                        }
                                      >
                                        {child.icon && (
                                          <Image
                                            src={child.icon}
                                            ml="-5px"
                                            mr="10px"
                                          />
                                        )}
                                        {child.label}
                                      </MenuItem>
                                    </Link>
                                  ) : (
                                    <MenuItem
                                      key={uuidv4()}
                                      rounded="5px"
                                      fontSize={"xl"}
                                      _hover={{
                                        background: "#ff8e3e",
                                        color: "white",
                                      }}
                                      icon={
                                        child.icon ? (
                                          ""
                                        ) : (
                                          <CircleIcon boxSize={2} />
                                        )
                                      }
                                    >
                                      {child.icon && (
                                        <Image
                                          src={child.icon}
                                          ml="-5px"
                                          mr="10px"
                                        />
                                      )}
                                      {child.label}
                                    </MenuItem>
                                  )}
                                </>
                              ))}
                            </MenuList>
                          )}
                        </ListItem>
                      )}
                    </Menu>
                  ))}
              </UnorderedList>
              <Flex justifyContent={"flex-end"}>
                <Button
                  as="div"
                  cursor="pointer"
                  height="100%"
                  colorScheme="green"
                  background="linear-gradient(to bottom,#ffb845 0,#ff9945 100%)"
                  rounded={"50px"}
                  border="3px solid #fff"
                  borderColor="rgba(138,85,70,.15)"
                  fontSize={["0.7rem", "1.2rem"]}
                  p={["0 25px", "0 25px"]}
                  _hover={{
                    rounded: "50px",
                    backgroundColor:
                      "linear-gradient(to bottom,#fff45 0,red 100%)",
                    opacity: "1",
                  }}
                  _active={{
                    rounded: "50px",
                    backgroundColor:
                      "linear-gradient(to bottom,#ff845 0,#ff9945 100%)",
                  }}
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  SIGN UP
                </Button>
                <Button
                  ml="15px"
                  variant="outline"
                  rounded={"50px"}
                  height="100%"
                  color="#0bb850"
                  colorScheme={""}
                  border="2px solid transparent"
                  borderColor="rgba(11,184,80,.4)"
                  fontSize={["0.7rem", "1.2rem"]}
                  p={["0 25px", "0 25px"]}
                  textTransform={"uppercase"}
                  _hover={{
                    rounded: "50px",
                    borderColor: "#0bb850",
                    backgroundColor: "white !important",
                    opacity: "1",
                    color: "#0bb850",
                  }}
                  _active={{
                    rounded: "50px",
                    color: "white",
                    borderColor: "#0bb850",
                    backgroundColor: "#0bb850",
                  }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  SIGN IN
                </Button>
              </Flex>
            </Flex>
          </Flex>

          {/* uppersection  */}
        </Box>

        <Box p={"10rem 0 2.6rem 0"} width="100%" overflow={"hidden"} m="auto">
          <Box
            className={styles.box1}
            position={"relative"}
            zIndex="1"
            width="100%"
            m="auto"
            display={"flex"}
            justifyContent={"center"}
            _after={[
              "",
              "",
              "",
              {
                position: "absolute",
                top: "-700px",
                left: "20%",
                width: "50rem",
                height: "50rem",
                border: "1px dashed rgba(5,96,0,.6)",
                rounded: "100%",
                content: '""',
                zIndex: "-1",
              },
            ]}
          >
            <Box
              p="0 15px 0 15px"
              width={"100%"}
              maxW={"1470px"}
              textAlign={["center", "center", "left", "left", "left"]}
              ml={["0", "0", "1%", "5%"]}
              position="relative"
              pb="150px"
            >
              <Box width="50%">
                <Heading
                  color={"white"}
                  as={"h1"}
                  fontSize={["3rem", "3rem", "3.2rem", "4rem", "5rem"]}
                  fontWeight={500}
                  mb={["1rem", "1rem", "1rem", "1rem"]}
                >
                  Be Healthy
                  <br />
                  for Life!
                </Heading>
                <Text
                  fontWeight={500}
                  fontSize={["14px", "20px", "22px", "26px"]}
                  mb={["15px", "15px", "15px", ""]}
                  color="#fcf8b3"
                >
                  Your weight loss, diet, and <br />
                  nutrition assistant.
                </Text>
                <Flex
                  gap={[2, 2, 2, 4]}
                  pb="80px"
                  justifyContent={[
                    "center",
                    "center",
                    "flex-start",
                    "flex-start",
                  ]}
                >
                  <Box as="a" target="_blank">
                    <Image
                      src={applestore}
                      width={["134px", "134px", "140px", "150px"]}
                    />
                  </Box>
                  <Box as="a" target="_blank">
                    <Image
                      src={playStore}
                      width={["134px", "134px", "140px", "150px"]}
                    />
                  </Box>
                </Flex>
              </Box>

              <Box position={"absolute"} bottom="10">
                <Box>
                  <Text
                    as="strong"
                    color="#46618a"
                    fontWeight={700}
                    fontSize={["1.2rem", "1.5rem", "1.8rem", "1.8rem"]}
                  >
                    Top Rated:
                  </Text>
                  <Text
                    as="span"
                    color="#46618a"
                    fontSize={["1.2rem", "1.5rem", "1.6rem", "1.6rem"]}
                  >
                    {" 61,383 reviews & counting"}
                  </Text>
                </Box>
                <Box mt="10px">
                  <Flex
                    gap={4}
                    alignItems={"center"}
                    justifyContent={[
                      "center",
                      "center",
                      "flex-start",
                      "flex-start",
                      "flex-start",
                    ]}
                  >
                    <Flex
                      gap={1}
                      alignItems={"center"}
                      pr="10px"
                      borderRight="1px dashed #46618a"
                    >
                      <Image src={apple} h="22" />
                      <Image src={fullStar} h="22" />
                      <Image src={fullStar} h="22" />
                      <Image src={fullStar} h="22" />
                      <Image src={fullStar} h="22" />
                      <Image src={halfStar} h="22" />
                      <Image src="" />
                      <Text
                        color="#46618a"
                        fontSize={["1.2rem", "1.5rem", "1.6rem", "1.8rem"]}
                      >
                        4.8
                      </Text>
                    </Flex>
                    <Flex gap={1} alignItems={"center"}>
                      <Image src={android} h="22" />
                      <Image src={fullStar} h="22" />
                      <Image src={fullStar} h="22" />
                      <Image src={fullStar} h="22" />
                      <Image src={fullStar} h="22" />
                      <Image src={halfStar} h="22" />
                      <Text
                        color="#46618a"
                        fontSize={["1.2rem", "1.5rem", "1.6rem", "1.8rem"]}
                      >
                        4.6
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
              <Box></Box>
            </Box>
          </Box>
          <Image
            className={styles.image}
            src={phone}
            position="absolute"
            left="30%"
            bottom="25px"
            width="32%"
            zIndex={1}
          />
          <Image
            className={styles.image}
            src={watch}
            position="absolute"
            left="57%"
            bottom={"27px"}
            width="25%"
          />
        </Box>

        <Box>
          <Image
            src={plate}
            position="absolute"
            top={0}
            right="-10"
            width="30rem"
            height="auto"
            zIndex={"-1"}
          />
          <Image
            src={cherry}
            position="absolute"
            top={100}
            left="10"
            maxW="5%"
          />
        </Box>
      </Box>
      <br />
      <br />
    </>
  );
};

export default UpperSection;
