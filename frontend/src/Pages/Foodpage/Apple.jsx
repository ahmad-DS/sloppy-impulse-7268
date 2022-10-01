import React from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const Apple = () => {
  return (
    <div>
      <CircularProgress value={40} color="green.400">
        <CircularProgressLabel>40%</CircularProgressLabel>
      </CircularProgress>
    </div>
  );
};

export default Apple;
