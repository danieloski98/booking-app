import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  VStack,
  Input,
  Text,
  Select,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

function BookingForm() {
  return (
    <Flex flexDir={'column'}>
      <VStack p={'10px'}>
        <Box>
          <FormControl id="firstName" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input type={'text'} placeholder={'Your name'} />
          </FormControl>
        </Box>

        <HStack>
        <Select placeholder="Shoot type" p={'10px'} variant={'flushed'}>
          <option value="option1">Regular </option>
          <option value="option2">Half Session</option>
          <option value="option3">Full Session</option>
          <option value="option3">Coperate Session</option>
          <option value="option3">Family Session</option>
          <option value="option3">Home Service</option>
        </Select>

          <Box>
            <FormControl id="numberOfOutfits">
              <FormLabel>No of Outifts</FormLabel>
            </FormControl>
          </Box>
          <Box>
            {' '}
            <Input type={'number'} w="50px" />
          </Box>
        </HStack>
        <Box>
          <FormControl id="number" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input type={'number'} placeholder={'Your Whatsapp number'} />
          </FormControl>
        </Box>
        <Box pb={'10px'}>
          <FormControl id="email">
            <FormLabel>email address</FormLabel>
            <Input type={'text'} placeholder={' email'} />
          </FormControl>
        </Box>
      </VStack>
    </Flex>
  );
}

export default BookingForm;
