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
import { useDispatch, useSelector } from "react-redux";
import { getrequestdata, weigthpatch } from "../../../Redux/Appreducer/action";
const TargetModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handlechange = () => {
    console.log("e");
  };

  const data = useSelector((store) => store.Appreducer.data);
  const dispatch = useDispatch();
  const [wholedata, setWholedata] = React.useState([]);
  const [targetweigth, setTargetweigth] = React.useState(0);

  const handlepatch = () => {
    const payload = { target_weight: Number(targetweigth) };
    dispatch(weigthpatch(1, payload)).then((r) => {
      dispatch(getrequestdata());
    });
  };
  React.useEffect(() => {}, [targetweigth]);
  const handleclick = () => {};
  React.useEffect(() => {
    if (data.length > 0) {
      setTargetweigth(data[0].target_weight);
      setWholedata(data);
    }
  }, [data]);

  return (
    <>
      <Box onClick={onOpen} width={"30%"} variant="unstyled">
        <Input type="text" value={targetweigth} onChange={handlechange} />
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
              <FormLabel>Target Weight,Kg</FormLabel>
              <Input
                ref={initialRef}
                value={targetweigth}
                onChange={(e) => setTargetweigth(e.target.value)}
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
            <Button colorScheme="blue" mr={3} onClick={handlepatch}>
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
