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
import { useDispatch, useSelector } from "react-redux";
const PersonalInfo = () => {

  const dispatch = useDispatch();
const setValue=()=>{

}
const [wholedata, setWholedata] = React.useState("");
const [personal, setPersonal] = React.useState([]);
const [date, setDate] = React.useState("");
const data = useSelector((store) => store.Appreducer.data);

React.useEffect(() => {console.log(wholedata);}, [personal,wholedata]);
const handleclick = () => {};
React.useEffect(() => {
  if (data.length > 0) {
    setPersonal(data[0]);
    setWholedata(`${data[0].email} ${data[0].date_of_birth}  ${data[0].gender}`)
    console.log(data[0].date_of_birth);
    setDate(data[0].date_of_birth)
  }
}, [data]);





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

                <Input type="text" onChange={handlechange} value={wholedata}/>
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
                <Input type="date" onChange={handlechange} value={date}/>
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
