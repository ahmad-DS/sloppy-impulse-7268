import {
  Box,
  Flex,
  Stack,
  VStack,
  HStack,
  Text,
  Heading,
  Image,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import fitnessCalculatorFunctions from "fitness-calculator";

const Dashboard = () => {
  const data = JSON.parse(localStorage.getItem("logindata"));

  const age = data.age;
  const cweight = data.current_weight;
  const tweight = data.target_weight;
  const height = data.height;
  const gender = data.gender;

  const [calsRequired, setCalsRequired] = useState(0);

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
      localStorage.setItem(
        "macros",
        JSON.stringify({ carb: 45, protein: 25, fat: 30 })
      );
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
      localStorage.setItem(
        "macros",
        JSON.stringify({ carb: 40, protein: 25, fat: 25 })
      );
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
      localStorage.setItem(
        "macros",
        JSON.stringify({ carb: 40, protein: 30, fat: 30 })
      );
    }
  }, []);
  let per = Math.floor(
    ((+localStorage.getItem("totalCalories") || 0) /
      +localStorage.getItem("calsRequired") || 0) * 100
  );
  return (
    <>
      <Flex justifyContent="space-around" width="95%" margin="auto" mt={5}>
        <VStack width="45%" spacing={5}>
          <Flex direction="column" w="100%">
            <Flex justify="flex-end" align="center">
              <Spacer />
              <VStack>
                <Text color="rgb(176, 176, 176)" fontSize="15px">
                  Calorie Budget
                </Text>
                <Heading color="rgb(55, 146, 180)" fontSize="25px">
                  {Math.floor(calsRequired) || 0} cals
                </Heading>
              </VStack>
              <Spacer />
              <BsThreeDotsVertical fontSize={20} color="rgb(176, 176, 176)" />
            </Flex>
            <Flex
              width="100%"
              justify="space-evenly"
              shadow="md"
              borderWidth="1px"
              padding="1rem"
              mt={5}
            >
              <VStack>
                <VStack>
                  <Text color="rgb(176, 176, 176)" fontSize="15px">
                    Exercise
                  </Text>
                  <Heading color="rgb(55, 146, 180)" fontSize="25px">
                    0
                  </Heading>
                </VStack>
                <VStack>
                  <Text color="rgb(176, 176, 176)" fontSize="15px">
                    Steps
                  </Text>
                  <Heading color="rgb(55, 146, 180)" fontSize="25px">
                    0
                  </Heading>
                </VStack>
                <VStack>
                  <Text color="rgb(176, 176, 176)" fontSize="15px">
                    Water
                  </Text>
                  <Heading color="rgb(55, 146, 180)" fontSize="25px">
                    0
                  </Heading>
                </VStack>
                <VStack>
                  <Text color="rgb(176, 176, 176)" fontSize="15px">
                    Notes
                  </Text>
                  <Heading color="rgb(55, 146, 180)" fontSize="25px">
                    0
                  </Heading>
                </VStack>
              </VStack>
              <VStack>
                <CircularProgress
                  value={per}
                  size="200px"
                  thickness="5px"
                  color="rgb(53, 189, 9)"
                  mt={10}
                >
                  <CircularProgressLabel>
                    <div>
                      <div style={{ color: "green", fontSize: "24px" }}>
                        {localStorage.getItem("totalCalories") || 0}
                      </div>
                      <div style={{ color: "gray", fontSize: "14px" }}>
                        LEFT
                      </div>
                      <div style={{ color: "gray", fontSize: "20px" }}>
                        {Math.floor(
                          (calsRequired || 0) -
                            (+localStorage.getItem("totalCalories") || 0)
                        )}
                      </div>
                    </div>
                  </CircularProgressLabel>
                </CircularProgress>
              </VStack>
              <VStack>
                <VStack>
                  <Text color="rgb(176, 176, 176)" fontSize="15px">
                    Breakfast
                  </Text>
                  <Heading color="rgb(55, 146, 180)" fontSize="25px">
                    {localStorage.getItem("breakfastCalories") || 0}
                  </Heading>
                </VStack>
                <VStack>
                  <Text color="rgb(176, 176, 176)" fontSize="15px">
                    Lunch
                  </Text>
                  <Heading color="rgb(55, 146, 180)" fontSize="25px">
                    {localStorage.getItem("lunchCalories") || 0}
                  </Heading>
                </VStack>
                <VStack>
                  <Text color="rgb(176, 176, 176)" fontSize="15px">
                    Dinner
                  </Text>
                  <Heading color="rgb(55, 146, 180)" fontSize="25px">
                    {localStorage.getItem("dinnerCalories") || 0}
                  </Heading>
                </VStack>
                <VStack>
                  <Text color="rgb(176, 176, 176)" fontSize="15px">
                    Snacks
                  </Text>
                  <Heading color="rgb(55, 146, 180)" fontSize="25px">
                    {localStorage.getItem("snackCalories") || 0}
                  </Heading>
                </VStack>
              </VStack>
            </Flex>
          </Flex>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stack direction="row" spacing={2}>
              <Image
                boxSize={50}
                src="https://s3.amazonaws.com/img.mynetdiary.com/advice/2020/15_search_global@3x.png"
              />

              <Text mt={4}>
                Please log more than 400 food calories to get weight forecast
                and diet tips.
              </Text>
            </Stack>
            <Flex justify="flex-end" align="center">
              <Button colorScheme="teal" variant="ghost">
                MORE
              </Button>

              <Button colorScheme="teal" variant="ghost">
                MY ADVICE
              </Button>
            </Flex>
          </Box>
          <Flex
            width="100%"
            p={5}
            shadow="md"
            borderWidth="1px"
            direction="column"
            gap={8}
          >
            <Flex align="center">
              <HStack spacing={2}>
                <Image
                  boxSize={50}
                  src="https://s3.amazonaws.com/img.mynetdiary.com/plan/nutrition_target.png"
                />
                <Text color="rgb(176, 176, 176)" fontSize="15px">
                  Nutrients
                </Text>
              </HStack>
              <Spacer />
              <BsThreeDotsVertical />
            </Flex>
            <Flex align="center" justify="space-between">
              <Text color="rgb(176, 176, 176)" fontSize="15px">
                Sodium
              </Text>
              <Spacer />
              <Flex direction="column" flexGrow={1}>
                <Flex>
                  <Text>
                    {"10mg"}, {"0%"}
                  </Text>
                  <Spacer />
                  <Text>
                    {"left"} {"2,298mg"}
                  </Text>
                </Flex>
                <Progress colorScheme="green" size="sm" value={20} />
              </Flex>
              <Progress value={80} />

              <Spacer />
              <BsThreeDotsVertical />
            </Flex>
            <Flex justify="flex-end" align="center">
              <Button colorScheme="teal" variant="ghost">
                MORE
              </Button>

              <Button colorScheme="teal" variant="ghost">
                MY ADVICE
              </Button>
            </Flex>
          </Flex>
        </VStack>
        <VStack width="45%" spacing={5}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stack direction="row" spacing={2}>
              <Image
                boxSize={50}
                src="https://s3.amazonaws.com/img.mynetdiary.com/dashboard/icon_analysis.png"
              />

              <Text mt={4}>
                Please log more than 400 food calories to get weight forecast
                and diet tips.
              </Text>
            </Stack>
            <Flex justify="flex-end" align="center">
              <Button colorScheme="teal" variant="ghost">
                DAILY ANALYSIS
              </Button>
            </Flex>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" w="100%">
            <Stack direction="row" spacing={2}>
              <Image
                boxSize={50}
                src="https://s3.amazonaws.com/img.mynetdiary.com/dashboard/target_icon.png"
              />
              {/* <Heading fontSize='xl'>{title}</Heading> */}
              <Text mt={4}>Weight Plan: gain 10 kg in 558 days.</Text>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Image
                boxSize={50}
                src="https://s3.amazonaws.com/img.mynetdiary.com/plan/weight_plan.png"
              />
              {/* <Heading fontSize='xl'>{title}</Heading> */}
              <Text mt={4}>Current Weight: 60 kg.</Text>
            </Stack>
            <Flex justify="flex-end" align="center">
              <Button colorScheme="teal" variant="ghost">
                WEIGH-IN
              </Button>

              <Button colorScheme="teal" variant="ghost">
                PLAN
              </Button>
              <Button colorScheme="teal" variant="ghost">
                CHART
              </Button>
            </Flex>
          </Box>
          <Box borderRadius={5} shadow="md" borderWidth="1px">
            <Image
              borderRadius={5}
              w="100%"
              src="https://s3.amazonaws.com/img.mynetdiary.com/premiumrecipe/premium_fast_and_easy_banner.jpeg"
            />
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Stack direction="row" spacing={2} align="center">
              <Image
                h="100px"
                w="140px"
                borderRadius={5}
                objectFit="cover"
                src="https://s3.amazonaws.com/img.mynetdiary.com/blog/benefits-of-eating-pumpkin-1.jpeg"
              />
              <Heading fontSize="xl">
                Not just for decoration: Enjoy the health benefits of eating
                pumpkin
              </Heading>
            </Stack>
            <Text mt={4}>
              The benefits of eating pumpkin go far beyond the satisfaction of
              creamy pumpkin pie. Packed with vitamins and minerals, a half cup
              of pumpkin contains only 22 calories! Whether you use fresh or
              canned, fall is the perfect season for cooking with pumpkin.
            </Text>
            <Flex justify="flex-end" align="center">
              <Button colorScheme="teal" variant="ghost">
                BLOG
              </Button>

              <Button colorScheme="teal" variant="ghost">
                LIBRARY
              </Button>
              <Button colorScheme="teal" variant="ghost">
                MY ADVICE
              </Button>
            </Flex>
          </Box>
        </VStack>
      </Flex>
      <Flex>
        <Flex></Flex>
        <VStack></VStack>
        <VStack></VStack>
        <VStack></VStack>
        <VStack></VStack>
      </Flex>
    </>
  );
};

export default Dashboard;
