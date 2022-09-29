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
const TargetModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const current_weigth = `${136} lbs`;
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handlechange = () => {
    console.log("e");
  };
  return (
    <>
      <Box onClick={onOpen} width={"30%"} variant="unstyled">
        <Input type="text" value={current_weigth} onChange={handlechange} />
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Target Weight</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Target Weight, lbs</FormLabel>
              <Input
                ref={initialRef}
                value={current_weigth}
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

export default TargetModal;
