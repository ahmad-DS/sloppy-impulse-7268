import React from 'react';
import { Box, Heading, Image, Text, Flex } from '@chakra-ui/react';
import phone from './images/phone.png'
import watch from './images/watch.png'
import cherry from './images/left.png';
import plate from './images/right.png'
import apple from './images/apple.png'
import android from './images/android.png'
import fullStar from './images/fullStar.png'
import halfStar from './images/halfStar.png'
import applestore from './images/store/appleStore.svg'
import playStore from './images/store/playStore.svg'
import styles from './uppersection.module.css'



const UpperSection = () => {
  return (
    <Box
      className={styles.container}
      as="section"
      width={'100%'}
      position={'relative'}
      overflow={'hidden'}
      pb="200px"
      _before={{
        position: 'absolute',
        display: 'block',
        width: '100%',
        height: '60%',
        background:
          'url(https://s3.amazonaws.com/img.mynetdiary.com/images/texture-noise@1x.png),radial-gradient(ellipse at top,#05b24a 0,#05963d 60%)',
        borderBottomRightRadius: '100rem 5rem',
        borderBottomLeftRadius: '100rem 5rem',
        boxShadow: 'inset rgb(9 108 46 / 76%) 0 -2.3rem 10.7rem',
        zIndex: '-1',
        content: '""',
        overflow: 'hidden',
      }}
    >
      <Box p={'10rem 0 2.6rem 0'} width="100%" overflow={'hidden'} m="auto">
        <Box
          position={'relative'}
          zIndex="1"
          width="100%"
          m="auto"
          display={'flex'}
          justifyContent={'center'}
          _after={[
            '',
            '',
            '',
            {
              position: 'absolute',
              top: '-700px',
              left: '20%',
              width: '50rem',
              height: '50rem',
              border: '1px dashed rgba(5,96,0,.6)',
              rounded: '100%',
              content: '""',
              zIndex: '-1',
            },
          ]}
        >
          <Box
            p="0 15px 0 15px"
            width={'100%'}
            maxW={'1470px'}
            textAlign={['center', 'center', 'left', 'left', 'left']}
            ml={['0', '0', '1%', '5%']}
            position="relative"
            pb="150px"
          >
            <Box width="50%">
              <Heading
                color={'white'}
                as={'h1'}
                fontSize={['3rem', '3rem', '3.2rem', '4rem', '5rem']}
                fontWeight={500}
                mb={['1rem', '1rem', '1rem', '1rem']}
              >
                Be Healthy
                <br />
                for Life!
              </Heading>
              <Text
                fontWeight={500}
                fontSize={['14px', '20px', '22px', '26px']}
                mb={['15px', '15px', '15px', '']}
                color="#fcf8b3"
              >
                Your weight loss, diet, and <br />
                nutrition assistant.
              </Text>
              <Flex
                gap={[2, 2, 2, 4]}
                pb="80px"
                justifyContent={[
                  'center',
                  'center',
                  'flex-start',
                  'flex-start',
                  'flex-start',
                ]}
              >

                <Box as="a" target="_blank">
                  <Image
                    src={applestore}
                    width={['134px', '134px', '140px', '150px']}
                  />
                </Box>
                <Box as="a" target="_blank">
                  <Image
                    src={playStore}
                    width={['134px', '134px', '140px', '150px']}
                  />
                </Box>

              </Flex>
            </Box>

            <Box position={'absolute'} bottom="10">
              <Box>
                <Text
                  as="strong"
                  color="#46618a"
                  fontWeight={700}
                  fontSize={['1.2rem', '1.5rem', '1.8rem', '1.8rem']}
                >
                  Top Rated:
                </Text>
                <Text
                  as="span"
                  color="#46618a"
                  fontSize={['1.2rem', '1.5rem', '1.6rem', '1.6rem']}
                >
                  {' 61,383 reviews & counting'}
                </Text>
              </Box>
              <Box mt="10px">
                <Flex
                  gap={4}
                  alignItems={'center'}
                  justifyContent={[
                    'center',
                    'center',
                    'flex-start',
                    'flex-start',
                    'flex-start',
                  ]}
                >
                  <Flex
                    gap={1}
                    alignItems={'center'}
                    pr="10px"
                    borderRight="1px dashed #46618a"
                  >
                    <Image src={apple} h="22" />
                    <Image src={fullStar} h="22" />
                    <Image src={fullStar} h="22" />
                    <Image src={fullStar} h="22" />
                    <Image src={fullStar} h="22" />
                    <Image src={halfStar} h="22" />
                    <Image src='' />
                    <Text
                      color="#46618a"
                      fontSize={['1.2rem', '1.5rem', '1.6rem', '1.8rem']}
                    >
                      4.8
                    </Text>
                  </Flex>
                  <Flex gap={1} alignItems={'center'}>
                    <Image src={android} h="22" />
                    <Image src={fullStar} h="22" />
                    <Image src={fullStar} h="22" />
                    <Image src={fullStar} h="22" />
                    <Image src={fullStar} h="22" />
                    <Image src={halfStar} h="22" />
                    <Text
                      color="#46618a"
                      fontSize={['1.2rem', '1.5rem', '1.6rem', '1.8rem']}
                    >
                      4.6
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>
            <Image
              src={phone}
              position="absolute"
              left="30%"
              bottom="-120px"
              width="32%"
            />
            <Image
              src={watch}
              position="absolute"
              left="57%"
              bottom={'-80px'}
              width="25%"
            />
          </Box>
        </Box>
      </Box>

      <Image
        src={plate}
        position="absolute"
        top={0}
        right="-10"
        width="30rem"
        height="40rem"
      />
      <Image
        src={cherry}
        position="absolute"
        top={100}
        left="10"
        maxW="5%"
      />
    </Box>
  );
};

export default UpperSection;
