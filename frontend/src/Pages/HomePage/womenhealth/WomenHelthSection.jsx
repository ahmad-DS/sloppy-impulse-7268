import React from 'react';
import { Box, Image, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import whlogo from './images/wh-logo.svg';
import usa from './images/logo-usa-today.png';

const WomenHelthSection = () => {
  return (
    <Box as="section" mt="-8rem">
      <Box p={'0 0 1.6rem 0'}>
        <Box p="0 15px 0 15px" maxW={'1470px'} m="auto">
          <Box>
            <Text
              color="#46618a"
              fontWeight={500}
              fontSize={['1.2rem', '1.5rem', '1.8rem', '2rem']}
              mb="20px"
            >
              {"“You really can't go wrong with MyNetDiary"}
              <Text as="br" display={['none', 'none', 'block', 'block']} />
              {'as a scientifically-proven way to help you lose weight”'}
            </Text>
          </Box>
          <Box pb="50px">
            <Image
              src={whlogo}
              h={['32px', '32px', '48px', '60px']}
              m="auto"
            />
          </Box>
          <UnorderedList
            display={'flex'}
            listStyleType="none"
            ml={'0'}
            justifyContent="space-between"
            alignItems="center"
            gap={['10px', '10px', '10px', '30px']}
          >
           
              <ListItem>
                <Image src={usa} h="auto" maxH="50px" />
              </ListItem>
               <ListItem>
                <Image src={"https://s3.amazonaws.com/img.mynetdiary.com/images/logo-abc-news.svg"} h="auto" maxH="50px" />
              </ListItem>
             <ListItem>
                <Image src={"https://s3.amazonaws.com/img.mynetdiary.com/images/logo-fox.svg"} h="auto" maxH="50px" />
              </ListItem>
              <ListItem>
                <Image src={"https://s3.amazonaws.com/img.mynetdiary.com/images/logo-times.svg"} h="auto" maxH="50px" />
              </ListItem>
              <ListItem>
                <Image src={"https://s3.amazonaws.com/img.mynetdiary.com/images/logo-consumer-reports.svg"} h="auto" maxH="50px" />
              </ListItem>
              <ListItem>
                <Image src={"https://s3.amazonaws.com/img.mynetdiary.com/images/logo-wsj.svg"} h="auto" maxH="50px" />
              </ListItem>
              <ListItem>
                <Image src={"https://s3.amazonaws.com/img.mynetdiary.com/images/logo-chicago-tribune.svg"} h="auto" maxH="50px" />
              </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default WomenHelthSection;

