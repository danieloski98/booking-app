import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Img,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center" >
      <Heading as="h1"> Logo</Heading>
      <Spacer />

      <HStack spacing="10px">
        <Box bg="grey.200" p="10px">
          Gallery
        </Box>
        <Box bg="grey.200" p="10px">
          Services
        </Box>

        <Button>Reserve</Button>
      </HStack>
    </Flex>
  );
}
