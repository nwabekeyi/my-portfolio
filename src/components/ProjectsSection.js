// ProjectsSection.js

import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Ribosomal App",
    description: `In crafting the Ribosomal app, I harnassed the power of React's UseReducer hook, seamlessly integrating dynamic data handling, while enhancing UI with Reactstrap library for polished user experience.`,
    getImageSrc: () => require("../images/ribosome.jpeg"),
    link: "https://ribosomalmrna.web.app/",
  },
  {
    title: "Simple calculator app",
    description:
      "This simple calculator app was skillfully crafted with React. Leveraging useRef and Usestate for input efficiency and real-time updates, I elevated its aesthetics using Reactstrap for a polished design.  🔥️",
    getImageSrc: () => require("../images/calculator.jpeg"),
    link: "https://simplecalculator-a6174.web.app",
  },
  {
    title: `Nwabekeyi's text editor`,
    description:
      `This text editor is a minimalist text editor crafted with Draft.js on React. merging simplicity and functionality, the app integrate React useState hooks for dynamic state management enusring user-friendly experience`,
    getImageSrc: () => require("../images/photo3.png"),
    link: "https://nwabekeyi-calculator.web.app",
  },
  {
    title: "Hair_Safari",
    description:
    "Explore a trendy hair store webpage crafted with HTML, SCSS, and jQuery. Immerse yourself in a seamless shopping experience, navigating stylish products with interactive features for a modern and chic look.",    getImageSrc: () => require("../images/photo4.png"),
    link: "https://youtu.be/oPotJkrU6HY",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
    
      p={8}
      alignItems="flex-start"
    >
      <Heading as="h1" id="projects-section" color={"white"} fontWeight={"bold"} margin={("auto")} mb={{base: 0, lg:3}}>
        Featured Projects
      </Heading>
      <Box
       display={{ base: "block", md: "grid" }} // Use block for small screens and grid for medium and larger screens
       gridTemplateColumns={{ lg: "repeat(2,minmax(0,1fr))" }} // Adjust the grid layout for medium and larger screens
       gridGap={5}
      >
        {projects.map((project) => (
          <Box mb={{ base: 10, lg: 0 }}
          maxWidth={("100%" )}
          margin={"auto"}
          mt={{base: 3, lg:0}}

          >
          <Card key={project.title} project={project} />
          </Box>
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
