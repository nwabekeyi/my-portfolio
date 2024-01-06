import React from "react";
import { Avatar, Heading, HStack, VStack, Box, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faGit,
  faCss3,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Chidiebere Nwabekeyi!";
const bio1 =
  "A Frontend Developer, I shape digital experiences with design—transforming codes. Expertise in React for building dynamic, responsive web apps. Proficient in jQuery for enhanced interactivity. Skilled in SCSS, Git/GitHub for version control, and Figma for design collaboration.";
const techTools = [
  { name: "React", icon: faReact, color: "#61DAFB" },
  { name: "jQuery", icon: faJs, color: "#F7DF1E" },
  { name: "SCSS", icon: faCss3, color: "#1572B6" },
  { name: "Git/GitHub", icon: faGit, color: "#F05032" },
  { name: "Figma", icon: faFigma, color: "#F24E1E" },
];

const backgroundImageUrl =
  "https://wallpaperaccess.com/full/2484218.jpg";
const avatarUrl =
  "https://avatars.githubusercontent.com/u/41685349?s=400&u=7564f1e82ca84c1d704debd70557e664133e2966&v=4";

const LandingSection = () => (
  <Box
    className="background-container"
    style={{
      backgroundImage: `url(${backgroundImageUrl})`,
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
      opacity: 0,
      animation: "fadeIn 5s ease-out forwards",
      fontFamily: "sans-serif",
      maxWidth: "100%"
      
    }}
    mt={{ base: 8, md: 0 }}
  >
    <style>
      {`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes subtleMove {
          0% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .background-container {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }

        .content {
          text-align: center;
        }
      `}
    </style>

    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      marginTop="30px"
      maxWidth={{ base: "80%", lg: "70%" }}
    >
      <VStack
      width={"100%"}
        mt={{base: 15, md: 10}}
        className="content"
        spacing={8}
        textAlign="center"
        style={{ animation: "subtleMove 5s ease-in-out infinite" }}
      >
        <Avatar
          style={{
            width: "250px",
            height: "250px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
          }}
          src={avatarUrl}
          _hover={{
            transform: "scale(1.1)",
            transition: "0.5s ease-in-out",
          }}
        />
        <Box border={{ base: "2px solid blue", lg: "none" }} p={3} >
          
        <VStack spacing={2}
        >

          <Heading
            size="xl"
            color="white"
            fontWeight="bold"
            letterSpacing="wide"

            
          >
            {greeting}
          </Heading>

          <Box width={{base:"80vw", md:"70vw"}}>
            <Heading size="md" color="white">
              {bio1}
            </Heading>
          </Box>
        </VStack>
        </Box>
      </VStack>

      <HStack    spacing={{ base: 5, lg: 120 }} mx={0} mb={2} maxWidth={("100%")}>
        {techTools.map((tool, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{
              animation: `slideInLeft 2s ease-out forwards`,
            }}
          >
            <FontAwesomeIcon
              icon={tool.icon}
              style={{
                color: tool.color,
                fontSize: "2em",
                marginTop: "30px",
              }}

            />
            <Text color="white">{tool.name}</Text>
          </Box>
        ))}
      </HStack>
    </FullScreenSection>
  </Box>
);

export default LandingSection;
