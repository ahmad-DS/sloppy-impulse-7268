import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const RecipeModal = ({ data, open, close }) => {
  const { onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <div>
      <Modal size="5xl" finalFocusRef={finalRef} isOpen={open} onClose={close}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                }}
              >
                <div>
                  <img src={data.imagePreview.imageSrc} alt="" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "space-between",
                    justifyContent: "space-between",
                    padding: "1rem",
                  }}
                >
                  <div>
                    <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
                      {data.name}
                    </h2>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
                        6 serving
                      </h4>
                      <h2>total</h2>
                    </div>
                    <div>
                      <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
                        8 min
                      </h4>
                      <h2>prep</h2>
                    </div>
                    <div>
                      <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
                        6 min
                      </h4>
                      <h3>cooking</h3>
                    </div>
                    <div>
                      <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
                        {data.singleServingCalories} g
                      </h4>
                      <h3>recipe weight</h3>
                    </div>
                    <div style={{ color: "green" }}>
                      <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
                        {data.singleServingCalories}
                      </h4>
                      <h3>cals / {data.singleServing}</h3>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>FOOD LABEL</div>
                    <div>COPY & CUSTOMIZE 🔒</div>
                    <div>Print 🔒</div>
                    <div>
                      <Button colorScheme="whatsapp">LOG 🔒</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                <div>
                  <ul style={{ listStyle: "none" }}>
                    {data.ingredients.map((item, index) => (
                      <li style={{ margin: "0.5rem" }} key={index}>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>6 Steps 🔒</h3>
                  <SkeletonText mt="8" noOfLines={6} spacing="8" />
                </div>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default RecipeModal;
