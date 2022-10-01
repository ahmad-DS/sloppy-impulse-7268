import React from 'react';
import { Box, Heading, Grid, Image, Text, Button } from '@chakra-ui/react';
import { BsFillCaretRightFill } from 'react-icons/bs';
import {counterData} from './counterdata'

const Counter = () => {
  return (
    <Box as="section" roundedBottom="100rem 5rem" mb={'-20px'}>
      <Box p={'4rem 0 1.6rem 0'}>
        <Box p="0 15px 0 15px" maxW={'1470px'} m="auto">
          <Heading
            color="#268fd0"
            as={'h3'}
            fontSize={['2rem', '3.5rem']}
            fontWeight={500}
            mb={['30px', '30px', '50px']}
          >
            {counterData.heading}
          </Heading>
          <Box>
            <Text
              color="#46618a"
              fontWeight={500}
              fontSize={['1.2rem', '1.5rem', '1.8rem', '2rem']}
            >
              {counterData.description}
            </Text>
          </Box>
          <Button
            mt="2rem"
            variant="outline"
            height={['50px', '60px']}
            rounded={'50px'}
            color="#0bb850"
            colorScheme={''}
            border="2px solid transparent"
            borderColor="rgba(11,184,80,.4)"
            fontSize={['1.1rem', '1.4rem']}
            p={['25px 20px', '35px 40px']}
            textTransform={'uppercase'}
            mb={['45px', '35px', '25px', '']}
            _hover={{
              borderColor: '#0bb850',
            }}
            _active={{
              color: 'white',
              borderColor: '#0bb850',
              backgroundColor: '#0bb850',
            }}
          >
            {counterData.btn1}
            <Box ml={3}>
              <BsFillCaretRightFill />
            </Box>
          </Button>
          <Grid
            templateColumns={[
              'repeat(1,1fr)',
              'repeat(1,1fr)',
              'repeat(3,1fr)',
              'repeat(3,1fr)',
            ]}
            gap={['2rem', '2rem', '1.5rem', '3rem']}
            borderTop={'1px dashed #e1cdbe'}
            mt={['1rem', '3rem']}
            pt={'3rem'}
          >
            {counterData.data.map((item, index) => (
              <Box
                key={Date.now()}
                maxW={['250px', '350px', '350px', '400px']}
                m="auto"
              >
                <Box
                  boxShadow={'0 6px 13px 0 rgb(13 9 5 / 20%)'}
                  border={'1px solid #e3e3e3'}
                  rounded={'md'}
                  maxW={['220px', '350px', '350px', '400px']}
                  m="auto"
                >
                  <Image
                    src={item.imgUrl}
                    m="auto"
                    rounded={'md'}
                  />
                </Box>
                <Heading
                  as={'h5'}
                  color="#268fd0"
                  m={['1rem 0', '1.5rem 0', '1.5rem 0', '4rem 0 2rem']}
                  fontSize={['1.6rem', '1.6rem', '1.8rem', '2.5rem']}
                  fontWeight={600}
                >
                  {item.name}
                </Heading>
                <Text
                  color="#46618a"
                  fontWeight={500}
                  fontSize={['1.2rem', '1.2rem', '1.2rem', '1.5rem']}
                >
                  {item.description}
                </Text>
              </Box>
            ))}
          </Grid>
          <Button
            mt="2rem"
            variant="outline"
            height={['50px', '60px']}
            rounded={'50px'}
            color="#0bb850"
            colorScheme={''}
            border="2px solid transparent"
            borderColor="rgba(11,184,80,.4)"
            fontSize={['1.1rem', '1.4rem']}
            p={['25px 20px', '35px 40px']}
            textTransform={'uppercase'}
            mb={['45px', '35px', '25px', '']}
            _hover={{
              borderColor: '#0bb850',
            }}
            _active={{
              color: 'white',
              borderColor: '#0bb850',
              backgroundColor: '#0bb850',
            }}
          >
            {counterData.btn2}
            <Box ml={3}>
              <BsFillCaretRightFill />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Counter;
