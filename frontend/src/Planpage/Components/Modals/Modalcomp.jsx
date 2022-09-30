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
} from "@chakra-ui/react";
const Modalcomp = () => {
  const calvalue = 2370;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen} variant="unstyled">
        <h1
          style={{
            color: "green",
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "22px",
          }}
        >
          {calvalue}
        </h1>
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Weight</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                ref={initialRef}
                placeholder="Cals"
                value={calvalue}
                variant="unstyled"
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
                  Please enter your Daily Food Calorie Budget. MyNetDiary
                  recommends 2,869 calories based on your weight target. To gain
                  1 lb/week you need to consume 2,370 weight maintenance
                  calories + 499 calories of daily surplus required by your
                  weight target.
                </h5>
              </FormLabel>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modalcomp;
