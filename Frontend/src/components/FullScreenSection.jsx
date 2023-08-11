import React from "react";
import { Box } from "@chakra-ui/react";

const FullScreenSection = ({ children, height }) => {
  return (
    <Box
      width="100vw"
      height={height || "100vh"}
      display="flex"
      justifyContent="center  "

      alignItems="center"
      bgColor="#93E1D8"
    >
      {children}
    </Box>
  );
};

export default FullScreenSection;
