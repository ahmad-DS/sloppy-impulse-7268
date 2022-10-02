import React from 'react';
import {
  Box,
  Heading,
  Grid,
  Image,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  AspectRatio,
} from '@chakra-ui/react';
import {compatibleData} from './comatibledata'

const Compatible = () => {
  return (
    <Box as="section" display={'block'}>
      <Box>
        <Box
          p={'100px 15px 0 15px'}
          pt={['50px', '50px', '80px', '100px']}
          maxW={'1470px'}
          m="auto"
          borderTop={'1px dashed #e1cdbe'}
        >
          <Heading
            color="#268fd0"
            as={'h3'}
            fontSize={['2rem', '3.5rem']}
            fontWeight={600}
            mb={['15px', '15px', '20px', '20px', '30px']}
          >
            Compatible With
          </Heading>
          <UnorderedList listStyleType={'none'} ml="0">
            <Flex
              justifyContent={[
                'center',
                'center',
                'center',
                'center',
                'space-between',
              ]}
              alignItems={'center'}
              m="10px 0"
              flexWrap={['wrap']}
            >
              {compatibleData.map(item => (
                <ListItem>
                  <Image
                    src={item.ImgUrl}
                    p="0 10px"
                    m={['15px', '15px', , 0]}
                    maxH={['44px', '44px', '44px', 'none']}
                    maxW={['100px', '120px', '120px', 'none']}
                  />
                </ListItem>
              ))}
            </Flex>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default Compatible;

