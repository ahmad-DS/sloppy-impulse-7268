import { Box, Flex, VStack, HStack, Text, Heading, Image } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'
import {BsThreeDotsVertical} from "react-icons/bs"

const Dashboard = () => {
	return (
		<Flex justifyContent="space-around" width="95%" margin="auto">
			<VStack width="45%" gap={2}>
				<Flex border="1px red solid" width="100%" justify="space-between">
					<VStack border="1px green solid">
						<Box>
							<Text>
								Exercise
							</Text>
							<Heading>0</Heading>

						</Box>
						<Box>
							<Text>
								Steps
							</Text>
							<Heading>0</Heading>
						</Box>
						<Box>
							<Text>
								Water
							</Text>
							<Heading>
								0
							</Heading>
						</Box>
						<Box>
							<Text>
								Notes
							</Text>
							<Heading>0</Heading>
						</Box>
					</VStack>
					<VStack>
						<CircularProgress value={59} size='100px' thickness='4px'>
							<CircularProgressLabel>40%</CircularProgressLabel>
						</CircularProgress>
					</VStack>
					<VStack border="1px green solid">
						<Box>
							<Text>
								Breakfast
							</Text>
							<Heading>0</Heading>
						</Box>
						<Box>
							<Text>
								Lunch
							</Text>
							<Heading>0</Heading>
						</Box>
						<Box>
							<Text>
								Dinner
							</Text>
							<Heading>0</Heading>
						</Box>
						<Box>
							<Text>
								Snacks
							</Text>
							<Heading>0</Heading>
						</Box>
					</VStack>
				</Flex>
				<Box p={5} shadow='md' borderWidth='1px'>
					<Image
						src="https://s3.amazonaws.com/img.mynetdiary.com/advice/2020/15_search_global@3x.png"
					/>
					{/* <Heading fontSize='xl'>{title}</Heading> */}
					<Text mt={4}>
						Please log more than 400 food calories to get weight forecast and diet tips.</Text>
				</Box>
				<Box border="1px red solid" width="100%" p={5} shadow='md' borderWidth='1px'>
					<Flex>
						<Image
						src="https://s3.amazonaws.com/img.mynetdiary.com/plan/nutrition_target.png"
						/>
						<Text>Nutrients</Text>
						<BsThreeDotsVertical/>
					</Flex>
					<Flex></Flex>
					<Flex></Flex>
				</Box>
			</VStack>
			<VStack border="1px red solid" width="45%">
				<Box p={5} shadow='md' borderWidth='1px'>
					<Image
					boxSize={50}
						src="https://s3.amazonaws.com/img.mynetdiary.com/dashboard/icon_analysis.png"
					/>
					{/* <Heading fontSize='xl'>{title}</Heading> */}
					<Text mt={4}>
						Please log more than 400 food calories to get weight forecast and diet tips.</Text>
				</Box>
				<Box p={5} shadow='md' borderWidth='1px'>
					<Image
					boxSize={50}
						src="https://s3.amazonaws.com/img.mynetdiary.com/dashboard/target_icon.png"
					/>
					{/* <Heading fontSize='xl'>{title}</Heading> */}
					<Text mt={4}>
						Weight Plan: gain 10 kg in 558 days.</Text>
					<Image
					boxSize={50}
						src="https://s3.amazonaws.com/img.mynetdiary.com/plan/weight_plan.png"
					/>
					{/* <Heading fontSize='xl'>{title}</Heading> */}
					<Text mt={4}>

						Current Weight: 60 kg.</Text>


				</Box>
				<Box p={5} shadow='md' borderWidth='1px'>
					{/* <Heading fontSize='xl'>{title}</Heading>
					<Text mt={4}>{desc}</Text> */}
					<Image
						src="https://s3.amazonaws.com/img.mynetdiary.com/premiumrecipe/premium_fast_and_easy_banner.jpeg"
					/>
				</Box>
				<Box p={5} shadow='md' borderWidth='1px'>
					<Image
					h="100px"
					w="140px"
					borderRadius={5}
					objectFit="cover"
						src="https://s3.amazonaws.com/img.mynetdiary.com/blog/benefits-of-eating-pumpkin-1.jpeg"
					/>
					<Heading fontSize='xl'>Not just for decoration: Enjoy the health benefits of eating pumpkin</Heading>
					<Text mt={4}>

						The benefits of eating pumpkin go far beyond the satisfaction of creamy pumpkin pie. Packed with vitamins and minerals, a half cup of pumpkin contains only 22 calories! Whether you use fresh or canned, fall is the perfect season for cooking with pumpkin.</Text>
				</Box>
			</VStack>
		</Flex>
	)
}

export default Dashboard