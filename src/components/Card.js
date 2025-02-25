import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      borderWidth={1}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      align="start"
      bg="white"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <Heading size="md" color="black">{title}</Heading>
      <Text color="black">{description}</Text>
      <HStack spacing={2} mt={2}>
        <Text color="blue.500" fontWeight="bold">Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
