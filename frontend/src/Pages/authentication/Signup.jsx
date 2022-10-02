import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [signupcreds, setsignupcreds] = useState({});
  let navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setsignupcreds({
      ...signupcreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupcreds),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        alert("signup sucessfull");
        localStorage.setItem("current_weight", data.user.current_weight);
        localStorage.setItem("target_weight", data.user.target_weight);
        localStorage.setItem("gender", data.user.gender);
        localStorage.setItem("height", data.user.height);
        localStorage.setItem("age", data.user.age);
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("signup failed");
      });
  };

  const url = "http://localhost:8080/auth/google";

  return (
    <>
      <form
        onSubmit={handleSubmit}
        w="40%"
        m="auto"
        shadow="xl"
        borderWidth="2px"
        p={4}
      >
        <VStack spacing={3}>
          <Input
            type="number"
            name="current_weight"
            placeholder="enter your current weight..."
            onChange={handleChange}
          />
          <br />
          <Input
            type="number"
            name="target_weight"
            placeholder="enter target_weight..."
            onChange={handleChange}
          />
          <br />
          <Input
            type="number"
            name="age"
            placeholder="enter age..."
            onChange={handleChange}
          />
          <br />
          <Input
            type="text"
            name="gender"
            placeholder="gender"
            onChange={handleChange}
          />
          <br />
          <Input
            type="date"
            name="date_of_birth"
            placeholder="enter date_of_birth..."
            onChange={handleChange}
          />
          <br />
          <Input
            type="number"
            name="height"
            placeholder="enter height..."
            onChange={handleChange}
          />
          <br />
          <Input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <br />
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <br />
          <Button type="submit" colorScheme="teal" variant="solid">
            submit
          </Button>
          <br />
          <br />
          {/* <br /> */}
          <Button colorScheme="teal" variant="solid">
            {/* 🧿🧿 */}
            <a href={url}>
              <FcGoogle />
              signup with google{" "}
            </a>
          </Button>
        </VStack>
      </form>
    </>
  );
};

export default Signup;