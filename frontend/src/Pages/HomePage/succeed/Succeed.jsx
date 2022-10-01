
import { Box, Heading, Grid, Image, Text, Img } from "@chakra-ui/react";
import React from "react";
import { cards } from "./succeeddata";


console.log(cards);
const Succeed = () => {
  return (
    <Box
      as="section"
      roundedBottom="100rem 5rem"

      bgColor= '#f9f5f2'
      position={'relative'}
      overflow={'hidden'}
   
      mb={'-20px'}

      background="#fff url(./assets/homepage/insightCardsBg.jpg) 0 0 repeat"
      mb={"-20px"}

      _before={{
        display: "block",
        width: "100%",
        top: "-50rem",
        height: "4.5rem",
        content: '""',

        bgColor: '#f9f5f2',
        borderBottomRightRadius: '100rem 5rem',
        borderBottomLeftRadius: '100rem 5rem',
        zIndex: '1',

      }}
    >
      <Box p={"4rem 0 1.6rem 0"}>
        <Box p="0 15px 0 15px" maxW={"1470px"} m="auto">
          <Heading
            color="#268fd0"
            as={"h3"}
            fontSize={["2rem", "3.5rem"]}
            fontWeight={500}
            mb={["30px", "30px", "50px"]}
          >
            {cards.Heading}
          </Heading>
          <Grid templateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]} gap={10}>
            {cards?.data?.map((item, index) => (
              <Box key={index}>
                <Img
                  src={item.imgUrl}
                  alt="avtar"
                  m="auto"
                  h={["150px", "150px", "150px", "200px"]}
                />
                <Heading
                  as={"h5"}
                  color="#268fd0"
                  m={["1rem 0", "1.5rem 0", "1.5rem 0", "4rem 0 2rem"]}
                  fontSize={["1.6rem", "1.6rem", "1.8rem", "2.5rem"]}
                  fontWeight={600}
                >
                  {item.title}
                </Heading>
                <Text
                  color="#46618a"
                  fontWeight={500}
                  fontSize={["1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
                >
                  {item.description}
                </Text>
              </Box>

            ))}
          </Grid>
        </Box>
      </Box>
      <br />
      <br />
      <br />
    </Box>
  );
};

export default Succeed;
