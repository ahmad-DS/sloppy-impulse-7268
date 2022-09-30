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
  Checkbox,
  Stack,
} from "@chakra-ui/react";
const WeeklyRate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handlechange = () => {
    console.log("e");
  };
  let weeklyobj = [
    { name: "Lose 1½ lb/week", value: 15 },
    { name: "Lose 1½ lb/week", value: 15 },
    { name: "Lose 2 lb/week", value: 20 },
    { name: "Lose ½ lb/week", value: 5 },
    { name: "Lose 1 lb/week", value: 10 },
    { name: "Maintain Weigth", value: 0 },
  ];
  return (
    <>
      <Box onClick={onOpen} width={"30%"} variant="unstyled">
        <Input type="text" onChange={handlechange} />
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Weekly Rate</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              {weeklyobj?.map((e,index) => (
                <Stack spacing={5} direction="column" key={index}>
                  <Checkbox>{e.name}</Checkbox>
                </Stack>
              ))}
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

export default WeeklyRate;
