import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const backgroundImageUrl =
  "https://wallpaperaccess.com/full/2484218.jpg";
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack maxWidth="100%"
    style={{backgroundImage: `url(${backgroundImageUrl})`,
  }}
    
    >
      <VStack   {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
