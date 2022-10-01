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
import { useDispatch, useSelector } from "react-redux";
import { getrequestdata, weigthpatch } from "../../../Redux/Appreducer/action";

const Modalcomp = () => {
  const data = useSelector((store) => store.Appreducer.data);
  const dispatch = useDispatch();
  const [wholedata, setWholedata] = React.useState([]);
  const [currentweigth, setCurrentweigth] = React.useState(0);
  const handlechange = () => {
    console.log("zaki");
  };

  const handlepatch = () => {
    const payload = { current_weight: Number(currentweigth) };
    dispatch(weigthpatch(1, payload)).then((r) => {
      dispatch(getrequestdata());
    });
  };
  React.useEffect(() => {}, [currentweigth]);
  const handleclick = () => {};
  React.useEffect(() => {
    if (data.length > 0) {
   
      setCurrentweigth(data[0].current_weight);
      setWholedata(data);
    }
  }, [data]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen} variant="unstyled">
        {data?.map((e, index) => (
          <h1
            style={{
              color: "green",
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: "22px",
            }}
            key={index}
            onClick={handleclick}
          >
            {currentweigth}
          </h1>
        ))}
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
              {data?.map((e, index) => (
                <Input
                  key={index}
                  ref={initialRef}
                  placeholder="Cals"
                  value={currentweigth}
                  variant="unstyled"
                  onChange={(e) => setCurrentweigth(e.target.value)}
                />
              ))}
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
            <Button colorScheme="blue" mr={3} onClick={handlepatch}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modalcomp;
