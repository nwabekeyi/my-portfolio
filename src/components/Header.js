import React, { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion"
import Hamburger from "hamburger-react"
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, VStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faHome,
    url: "/", // Replace with your home page URL
    title: "Go to Home Page",
  },
  {
    icon: faEnvelope,
    url: "mailto:chidi90simeon@gmail.com",
    title: "Send me an E-mail",
  },
  {
    icon: faGithub,
    url: "https://github.com/nwabekeyi",
    title: "View my Github profile",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/chidiebere-nwabekeyi-428a8488/",
    title: "View my Linkedin profile",
  },
  
  {
    icon: faTwitter,
    url: "https://twitter.com/nwabekeyi",
    title: "View my Twitter profile",
  },
  {
    icon: faWhatsapp,
    url: "https://wa.link/rx2op3",
    title: "Chat with me on WhatsApp",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)
 // State to track screen size
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setIsOpen(false));
 
    useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setIsVisible(isVisible);
    };

   
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const translateY = isVisible ? "translateY(0)" : "translateY(-200px)";

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 800);
  };
   // Effect to listen for screen size changes
   useEffect(() => {
    // Set initial screen size
    handleResize();
    // Attach event listener for resize
    window.addEventListener('resize', handleResize);
    // Cleanup on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
    maxWidth={ "100%" }
    ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1000}
      transform={translateY}
    >
      <Box color="white" maxWidth="1280px" margin="0 100px" style={{ height: '40px' }}>
        <HStack
          px={4}
          py={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={{base:4, md: 6}} marginTop={0.5}>
              {socials.map((item) => (
                <Link
                  key={item.icon}
                  href={item.url}
                  title={item.title}
                  spacing={10}
                  fontSize="sm"
                  _hover={{
                    color: "#0d6efd",
                    transform: "scale(1.5)"
                  }}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={item.icon} size="lg" />
                </Link>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={20}
             style={{ display: isSmallScreen ? 'none' : 'flex' }}

>         
              <Link
                href="#projects"
                onClick={handleClick("projects")}
                fontSize="sm"
                _hover={{
                  color: "#0d6efd",
                  transform: "scale(1.5)",
                }}
                target="_blank"
              >
                Projects
              </Link>
              <Link
  href="#contactme"
  onClick={handleClick("contactme")}
  fontSize="sm"
  _hover={{
    color: "#0d6efd",
    transform: "scale(1.5)",
  }}
>
  Contact Me
</Link>
            </HStack>
          </nav>

          {isSmallScreen && (
            <Box ref={ref} style={{
              position: 'absolute',
              top: '-4px', // Adjust this value based on your design
              left: '10px',
            }}>
              <Hamburger  toggled={isOpen} toggle={() => setIsOpen(!isOpen)} />
              {isOpen && (
                <AnimatePresence>
                <motion.nav
                exit={{opacity: 0}}
                  animate={{opacity: 1}}
                  initial={{opacity: 0}}
                transition={{duration: 0.5}}
                  style={{
                    position: 'absolute',
                    top: '40px', // Adjust this value based on your design
                    left: '-15px', // Adjust this value based on your design
                    backgroundColor: '#18181b',
                    padding: '20px',
                    zIndex: 1001,
                  }}
                >
              <VStack spacing={2} width={80} >
              <Link
                    href="#projects"
                    onClick={handleClick("projects")}
                    fontSize="sm"
                    border="1px solid #0d6efd"
                    borderRadius={5}
                    padding= "0 90px"
                    
                    _hover={{
                      color: "#0d6efd",
                      transform: "scale(1.5)"
                    }}
                    target="_blank"
                  >
                    Projects
                  </Link>
                  <Link
                   href="#contactme"
  onClick={handleClick("contactme")}
  fontSize="sm"
  border="1px solid #0d6efd"
  borderRadius={5}
  padding= "0 80px"
  
  _hover={{
    color: "#0d6efd",
    transform: "scale(1.5)"
  }}
  target="_blank"
>
  Contact Me
</Link>
              </VStack>
                </motion.nav>
                </AnimatePresence>
              )}
            </Box>
          )}
        </HStack>
       

       
      </Box>
    </Box>
  );
};

export default Header;
