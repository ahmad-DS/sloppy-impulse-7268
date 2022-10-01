import React from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const Apple = ({ val }) => {
  return (
    <div>
      <CircularProgress
        size="250px"
        thickness="3px"
        value={40}
        color="green.400"
      >
        <CircularProgressLabel fontSize="20px">{val}</CircularProgressLabel>
      </CircularProgress>
    </div>
  );
};

export default Apple;
