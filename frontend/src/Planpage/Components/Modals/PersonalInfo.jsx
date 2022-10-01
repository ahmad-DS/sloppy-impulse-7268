import React from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
const PersonalInfo = () => {
const setValue=()=>{

}
  const handlechange=()=>{

  }
  return (
    <>
      <Accordion defaultIndex={[0]} allowToggle width={"100%"}>
        <AccordionItem p={5}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <CgProfile fontSize="20px" />
                  )}
                  <Box ml={5} flex="1" textAlign="left">
                    <h1>Personal Info</h1>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} width={"50%"}>
                <Input type="text" onChange={handlechange}/>
              </AccordionPanel>

              <AccordionPanel pb={4} width={"50%"}>
                <h1>Gender</h1>

                <RadioGroup onChange={setValue} defaultValue="Male">
                  <Stack direction="row">
                    <Radio value="Male">Male</Radio>
                    <Radio value="Female">Female</Radio>
                  </Stack>
                </RadioGroup>
              </AccordionPanel>

              <AccordionPanel pb={4} width={"50%"}>
                <h1>Date of Birth</h1>
                <Input type="date" onChange={handlechange}/>
              </AccordionPanel>

              <AccordionPanel pb={4} width={"50%"}>
                <h1>Activity Level</h1>
                <RadioGroup onChange={setValue} defaultValue="Sedentary">
                  <Stack direction="column">
                    <Radio value="Sedentary">Sedentary</Radio>
                    <Radio value="Low">Low Active</Radio>
                    <Radio value="Active">Active</Radio>
                    <Radio value="Very">Very Active</Radio>
                  </Stack>
                </RadioGroup>
              </AccordionPanel>

              <AccordionPanel pb={4}>
                <h1>Body Mass Index</h1>
                <Input type="number" width={"50%"} onChange={handlechange}/>
                <h1>
                  BMI is an estimate of body fat and a good measure of risk for
                  diseases that can occur with overweight people. Your BMI is
                  18.5, which is considered normal weight. Details
                </h1>
              </AccordionPanel>

              <AccordionPanel pb={4}>
                <h1> Basal Metabolic Rate (BMR)</h1>
                <Input type="number" width={"50%"} onChange={handlechange}/>

                <h1>
                  Daily food calories needed to maintain your body weight. To
                  lose weight set Calorie Budget lower than maintenance level.
                  Details
                </h1>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default PersonalInfo;
