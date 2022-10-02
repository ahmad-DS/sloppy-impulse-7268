import {
    Box,
    Heading,
    Grid,
    Image,
    Text,
    Flex,
    UnorderedList,
    ListItem,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  import styles from './Footer.module.css';
  import {footerItem} from './Footerdata'
  const Footer = () => {
    return (
      <Box
        background="#fff url(./assets/homepage/insightCardsBg.jpg) 0 0 repeat"
        position={'relative'}
        className={styles.homeFooterSec}
        width="100%"
      >
        <Box
          maxW={'1470px'}
          m="auto"
          p="5rem 1rem 0 1rem"
          // border={'1px solid blue'}
        >
          <Box mb={'2.5rem'} display={['block', 'block', 'block', 'none']}>
            <Link to="/">
              <Image src={footerItem.logo} h={['42px', '42px', '68px']} />
            </Link>
          </Box>
          <Flex
            justifyContent={['center', 'center', 'center', 'space-between']}
            flexDirection={[
              'column-reverse',
              'column-reverse',
              'column-reverse',
              'row',
            ]}
          >
            <Box mr={['0', '1.5rem']}>
              <Box mb={'3.5rem'} display={['none', 'none', 'none', 'block']}>
                <Link to="/">
                  <Image
                    src={footerItem.logo}
                    h={['65px', '65px', '65px', '63px', '68px']}
                  />
                </Link>
              </Box>
              <Flex
                gap={4}
                fontSize={['lg', 'xl']}
                flexDirection={['column', 'column', 'row', 'column']}
              >
                <Flex gap={4}>
                  {footerItem.store.map(store => (
                    <Box key={Date.now()} as="a" target="_blank" href={store.href}>
                      <Image src={store.icon} width="144px" />
                    </Box>
                  ))}
                </Flex>
                <Flex color={'#5b6067'} mt="1rem" gap={1}>
                  {footerItem.stars.map(star => (
                    <Image
                      key={Date.now()}
                      src={star}
                      width={['20px', '24px']}
                      h={['20px', '24px']}
                    />
                  ))}
                  <Text as={'strong'}>4.8</Text>
                  <Text as={'span'} color="#beaeac" position={'relative'}>
                    <Text
                      position={'absolute'}
                      top="-1"
                      m="0 3px"
                      fontSize={'40px'}
                      lineHeight="0.3"
                    >
                      {'.'}
                    </Text>
                  </Text>
                  <Text fontWeight={500} ml="0.7rem">
                    61,383 Ratings
                  </Text>
                </Flex>
              </Flex>
              <UnorderedList listStyleType={'none'} ml="0">
                <Flex
                  m={['15px 0 10px', '45px 0 10px']}
                  alignItems={'center'}
                  gap={2}
                >
                  {footerItem.socialMedia.map(item => (
                    <ListItem
                      key={Date.now()}
                      color="rgb(207, 192, 190)"
                      _hover={{
                        color: item.color,
                      }}
                      _active={{
                        background: item.bg ? item.bg : item.color,
                        color: 'white',
                      }}
                      rounded="50%"
                    >
                      <Box
                        as="a"
                        href={item.href}
                        target="_blank"
                        position={'relative'}
                        // background="rgba(110,0,0,.11)"
                      >
                        <Flex
                          w={['50px', '56px']}
                          h={['50px', '56px']}
                          border="2px solid rgba(110,0,0,.11)"
                          rounded={'50%'}
                          justifyContent="center"
                          alignItems={'center'}
                          _hover={{
                            border: `2px solid ${item.color}`,
                          }}
                        >
                          {/* <Image src={item.icon} /> */}
                          {item.reactIcon}
                        </Flex>
                      </Box>
                    </ListItem>
                  ))}
                </Flex>
              </UnorderedList>
            </Box>
            <Box>
              <Grid
                templateColumns={[
                  'repeat(2, 1fr)',
                  'repeat(2, 1fr)',
                  'repeat(4, auto)',
                ]}
                gridTemplateAreas={'revert'}
                gap={[2, 3, 5]}
              >
                {footerItem.links.map(link => (
                  <Box key={Date.now()}>
                    <Heading
                      as="h6"
                      fontSize={['18px', '20px']}
                      fontWeight={500}
                      color={'#46618a'}
                      textAlign="left"
                      m={['0.5rem 0 2rem 0', '0.5rem 0 2rem 0', '1rem 0 3rem 0']}
                    >
                      {link.heading}
                    </Heading>
  
                    <UnorderedList textAlign={'left'} ml="0">
                      {link.subHeading.map(subHeading => (
                        <ListItem
                          key={Date.now()}
                          listStyleType={'none'}
                          position="relative"
                          pl="1rem"
                          mb={['0.5rem', '0.5rem', '1rem']}
                          color={'#46618a'}
                          fontWeight={500}
                          fontSize={['sm', 'md', 'md', '19px']}
                          _before={{
                            position: 'absolute',
                            top: '-9',
                            left: '0',
                            content: '"."',
                            fontSize: '3rem',
                            color: '#beaeac',
                            rounded: '50%',
                          }}
                        >
                          {subHeading}
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Flex>
        </Box>
        <Box
          as="section"
          // border={'1px solid green'}
          backgroundColor="rgba(143,112,102,.05);"
          p="45px 0"
          width={'100%'}
        >
          <Box>
            <Box maxW={'1470px'} m="auto" p={['0 5px', '0 15px']}>
              <Flex
                justifyContent={['center', 'space-between']}
                fontWeight={500}
                fontSize={['sm', 'lg']}
                flexDirection={[
                  'column-reverse',
                  'column-reverse',
                  'column-reverse',
                  'row',
                ]}
              >
                <Flex
                  gap={[1, 2]}
                  color="#46618a"
                  flexDirection={['column', 'column', 'row', 'row']}
                  justifyContent={'center'}
                >
                  <Text>Copyright © 2022 MyNetDiary Inc.</Text>
                  <Text>All rights reserved.</Text>
                </Flex>
  
                <Flex
                  alignItems={'center'}
                  color="#46618a"
                  justifyContent={['center', '']}
                  mb={['10px', '']}
                >
                  <Text
                    p={['0 10px', '0 15px']}
                    _hover={{
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    Contact Us
                  </Text>
                  <Box
                    h={['0.5rem', '0.8rem']}
                    borderLeft={'1px solid #ccbebc'}
                  />
                  <Text
                    p={['0 10px', '0 15px']}
                    _hover={{
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    FAQ
                  </Text>
                  <Box
                    h={['0.5rem', '0.8rem']}
                    borderLeft={'1px solid #ccbebc'}
                  />
                  <Text
                    p={['0 10px', '0 15px']}
                    _hover={{
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    Privacy
                  </Text>
                  <Box
                    h={['0.5rem', '0.8rem']}
                    borderLeft={'1px solid #ccbebc'}
                  />
                  <Text
                    p={['0 10px', '0 15px']}
                    _hover={{
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    Terms of Use
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Footer;
  
  