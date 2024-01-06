import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height={16}
        >
          <p>Chidiebere • © 2024</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
