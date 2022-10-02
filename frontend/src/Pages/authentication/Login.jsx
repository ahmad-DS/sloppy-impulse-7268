import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";
import {
  Box,
  Flex,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import "./signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const isError = input === "";
  const passError = pass === "";
  const handlesignIn = () => {
    let payload = {
      email: input,
      password: pass,
    };
    fetch("https://stormy-harbor-09503.herokuapp.com/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((d) => {
        localStorage.setItem("logindata", JSON.stringify(d));
        navigate("/user");
      });
  };

  // fetch("https://stormy-harbor-09503.herokuapp.com/user/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: payload,
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     if (data.token) {
  //       localStorage.setItem("token", data.token);
  //     }
  //     if (data.userId) {
  //       localStorage.setItem("userId", data.userId);
  //     }
  //     alert("login sucessfull");
  //     navigate("/user");
  //   })
  //   .catch((error) => {
  //     console.log("Error:", error);
  //     alert("invalid credentials! try later");
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("userId");
  // });
  // };

  const url = "https://stormy-harbor-09503.herokuapp.com/auth/google";
  return (
    <>
      <Box className="main">
        <Box className="first">
          <Box className="layer">
            <Box className="first_layer"></Box>
          </Box>
        </Box>
        <Box className="form_field">
          <Box className="form_header">Sign In</Box>
          <Box
            fontSize="15px"
            // padding="1rem 6rem 1rem 6rem"
            backgroundColor="#f7f5f2"
            width="80%"
            margin="4rem 4rem 4rem 4rem"
            lineHeight="1.5rem"
            letterSpacing=".1px"
          >
            If you use one of MyNetDiary’s mobile apps, please sign in with the
            same account name or email as you do in your MyNetDiary mobile app.
            You can see account name on the Settings screen in the mobile app.
          </Box>
          <Flex justifyContent="space-around">
            <Box w="300px" marginBottom="1rem">
              <FormControl isInvalid={isError} marginBottom="1rem">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                {!isError ? (
                  <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={passError} marginBottom="1rem">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                {!isError ? (
                  <FormHelperText>
                    Enter the pass you'd like to receive the newsletter on.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Password is required.</FormErrorMessage>
                )}
              </FormControl>
              <Flex gap="1rem" margin="1.5rem 0rem 1.5rem 0">
                <Stack spacing={4} direction="row" align="center">
                  <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={() => {
                      handlesignIn();
                    }}
                  >
                    Login
                  </Button>
                </Stack>
                <Box color="teal" textDecor="underline" cursor="pointer">
                  Forgot-password?
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex
                gap="1rem"
                bg="#4267b2"
                padding=".7rem"
                borderRadius=".5rem"
                cursor="pointer"
                margin="1rem 0rem 1rem 0rem"
              >
                <span>
                  <FaFacebookSquare color="white" fontSize="2rem" />
                </span>
                <span style={{ color: "white" }}>SIGN IN WITH FACEBOOK</span>
              </Flex>
              <Flex
                gap="1rem"
                bg="#4285f4"
                padding=".7rem"
                borderRadius=".5rem"
                cursor="pointer"
                margin="1rem 0rem 1rem 0rem"
              >
                <span style={{ backgroundColor: "white" }}>
                  <FcGoogle fontSize="2rem" color="white" />
                </span>
                <span style={{ color: "white" }}>
                  <a href={url}>SIGN IN WITH GOOGLE</a>
                </span>
              </Flex>
              <Flex
                gap="1rem"
                bg="black"
                padding=".7rem"
                borderRadius=".5rem"
                cursor="pointer"
                margin="1rem 0rem 1rem 0rem"
              >
                <span>
                  <AiOutlineApple fontSize="2rem" color="white" bg="white" />
                </span>
                <span style={{ color: "white" }}>SIGN IN WITH APPLE</span>
              </Flex>
            </Box>
          </Flex>
          <Box fontWeight="500" fontSize="1.5rem">
            no account{" "}
            <span style={{ color: "teal", cursor: "pointer" }}>SignUp</span>,
            it's easy
          </Box>
        </Box>
      </Box>
      <Flex
        style={{
          zIndex: "10",
          position: "absolute",
          bottom: "-300px",
          left: "28%",
        }}
      >
        By signing up, you are agreeing to the{" "}
        <span style={{ color: "#3c9ec3" }}>Terms of Service</span>
      </Flex>
    </>
  );
};

export default Login;
