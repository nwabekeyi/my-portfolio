// LandingSection.js
import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext, AlertProvider } from "../context/alertContext"; // Update the path

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const backgroundImageUrl =
  "https://wallpaperaccess.com/full/2484218.jpg";

  const showAlert = (type, message) => {
    onOpen(type, message);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: async (values) => {
      try {
        await submit(values);
        showAlert("success", "Form submitted successfully");
        formik.resetForm();
      } catch (error) {
        showAlert("error", error.message);
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address"),
      type: Yup.string().optional(),
      comment: Yup.string().min(25, "Must be at least 25 characters"),
    }),
  });
 
  return (
    <AlertProvider>
      <FullScreenSection  w={{ base: "80%", md: "90%" }}   mb={10}>

    <Heading as="h1" id="contactme-section" color={"white"} mt={10}>
            Contact me
    </Heading>
    
 <VStack
         
          // Adjust the width based on screen sizes
          px={{ base: 4, md: 4}}
          width={{base:"80vw", md:"80vw"}} 
          alignItems="flex-start"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            color:"white",
          }}
        >
          
          <Box p={{ base: 6, md: 6 }} rounded="md" width={("70vw")} margin={("auto")}
>
            <form onSubmit={formik.handleSubmit}   >
              <VStack spacing={4} >
                <FormControl
                  isInvalid={
                    formik.touched.firstName && formik.errors.firstName
                  }
                >
                  <FormLabel htmlFor="firstName" color={"white"}>Name</FormLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    {...formik.getFieldProps("firstName")}
                  />
                  <FormErrorMessage>
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div>{formik.errors.firstName}</div>
                    ) : null}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.email && formik.errors.email}
                >
                  <FormLabel htmlFor="email" color={"white"}>Email Address</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                  <FormErrorMessage>
                    {formik.touched.email && formik.errors.email ? (
                      <div>{formik.errors.email}</div>
                    ) : null}
                  </FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="type" color={"white"}>Type of enquiry</FormLabel>
                  <Select
                    id="type"
                    name="type"
                    color={"black"}
                    backgroundColor={"white"}
                    {...formik.getFieldProps("type")}
                    
                  >
                    <option value="hireMe">
                      Freelance project proposal
                    </option>
                    <option value="openSource">
                      Open source consultancy session
                    </option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>
                <FormControl
                  isInvalid={
                    formik.touched.comment && formik.errors.comment
                  }
                >
                  <FormLabel htmlFor="comment" color={"white"}>Your message</FormLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    height={250}
                    {...formik.getFieldProps("comment")}
                    w="100%"
                  />
                  <FormErrorMessage>
                    {formik.touched.comment && formik.errors.comment ? (
                      <div>{formik.errors.comment}</div>
                    ) : null}
                  </FormErrorMessage>
                </FormControl>
                <Button
                  type="submit"
                  backgroundColor="#0d6efd"
                  width="full"
                  isLoading={isLoading}
                >
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
        </FullScreenSection>
    </AlertProvider>
  );
};

export default LandingSection;
