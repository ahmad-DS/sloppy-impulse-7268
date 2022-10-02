import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getrequestdata, weigthpatch } from "../../../Redux/Appreducer/action";
const Daily = () => {
  const dispatch = useDispatch();
  const [currentweigth, setCurrentweigth] = React.useState(0);
  const fitnessCalculatorFunctions = require("fitness-calculator");
  const dailydata = useSelector((store) => store.Appreducer.data);

  let today = new Date();
  let year = [];
  year.push(today.getFullYear());

  let datepattern = year[0];

  React.useEffect(() => {
    if (dailydata.length > 0) {
      const { gender, height, current_weight, date_of_birth } = dailydata[0];

      let text = date_of_birth;
      let yearresult = Math.abs(text.slice(6, text.length) - datepattern);

      let result = gender.toLowerCase();

      const myCalorieNeeds = fitnessCalculatorFunctions.calorieNeeds(
        result,
        yearresult,
        height,
        current_weight,
        "sedentary"
      );

      setCurrentweigth(Math.floor(Number(myCalorieNeeds.mildWeightLoss)));
      localStorage.setItem(
        "cal",
        Math.floor(Number(myCalorieNeeds.mildWeightLoss))
      );
    }
  }, [dailydata]);

  React.useEffect(() => {
    let results = localStorage.getItem("cal");
    const payload = { calories: results };
    dispatch(weigthpatch(1, payload)).then((r) => getrequestdata());
  }, [currentweigth]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handlechange = (e) => {
    setCurrentweigth(e.target.value);
  };
  return (
    <>
      <Box onClick={onOpen} width={"30%"} variant="unstyled">
        <Input
          type="text"
          value={currentweigth}
          style={{
            color: "green",
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "22px",
          }}
          onChange={handlechange}
        />
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Daily Food Calorie Budget</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Daily Food Calorie Budget</FormLabel>
              <Input
                ref={initialRef}
                value={currentweigth}
                onChange={handlechange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>
                <h5
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    fontSize: "16px",
                    justifyContent: "center",
                  }}
                >
                  Enter your target weight in pounds, e.g 140.5
                </h5>
              </FormLabel>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Daily;
