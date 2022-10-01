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
const PercentModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Box onClick={onOpen} width={"30%"} variant="unstyled">
        <Input type="text" value="Same As Day" />
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Exercise In Micros</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
           
              <Input
                ref={initialRef}
             value="Same As Day"
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
               Take Care Of Health
                </h5>
              </FormLabel>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
         Get Premium 
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PercentModal;
