import React from "react";
import { Box, Heading, Text, Image, Link } from "@chakra-ui/react";

const Card = ({ project }) => {
  const { title, description, getImageSrc, link } = project;

  return (
    <Box
    maxWidth={{base: "90vw", md: "100%"}}
      h={{base: 310, md: 520}}
      borderRadius="md"
      overflow="hidden"
      boxShadow="lg"
      bg="black"
      color="white"
      transition="transform 0.5s ease-in-out" 
      margin= "auto"
      _hover={{
        transform: "scale(1.07)",
        color: "black",
        textDecoration: "none",
        border: "#0d6efd 1px solid",
        backgroundColor: "white",
        margin: "auto"
      }}
    >        
      <Box pb={2}>
        <a
          href={link}
          color="black.500"
          textDecoration="none"
          _hover={{ textDecoration: "none" }} // Ensure removal of underline on hover
         target="_blank"
        >
          <Image src={getImageSrc()} alt={title} objectFit={("cover")} Width="100%" h={{base: 175, md: 350}}
 />
          <Heading as="h2" fontSize="xl" mb={2} ml={2}>
            {title}
          </Heading>
          <Text  pb={0} ml={2} fontSize={{base: 13, md:20}}>
            {description}
          </Text>
        </a>
      </Box>
    </Box>
  );
};

export default Card;
