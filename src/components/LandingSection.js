import React from "react";
import { Avatar, Heading, VStack, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am BRIAN!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading, VStack, and HStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <HStack spacing={8} textAlign="left" color="white">
      <Avatar
        size="2xl"
        name="Pete"
        src="https://i.pravatar.cc/150?img=7"
      />
      <VStack spacing={2} align="start">
        <Heading textAlign="center" as="h1" size="2xl">
          {greeting}
        </Heading>
        <Heading as="h3" size="lg">
          {bio1}
        </Heading>
        <Heading as="h5" size="lg">
          {bio2}
        </Heading>
      </VStack>
    </HStack>
  </FullScreenSection>
);

export default LandingSection;

