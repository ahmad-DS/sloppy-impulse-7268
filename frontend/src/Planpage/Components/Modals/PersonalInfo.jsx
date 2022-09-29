import React from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Input,
  Text,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
const PersonalInfo = () => {
  return (
    <>
      <Accordion defaultIndex={[0]} allowToggle width={"100%"}>
        <AccordionItem p={5}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <CgProfile fontSize="20px" />
                   )}
                  <Box ml={5} flex="1" textAlign="left">
                    <Text fontSize={18} fontWeight={600}>
                      Personal Info
                    </Text>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Input type="text" />
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default PersonalInfo;
