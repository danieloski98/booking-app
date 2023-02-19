import {
  Box,
  Flex,
  Heading,
  extendTheme,
  VStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import Hour from './Hour';

function HourRange() {
  return (
    <>
      <Flex flexWrap={'wrap'} justify={'center'} overscroll={'auto'}>
        <Box p={'5px'}>
          {' '}
          <VStack>
            <Hour time={'9:00am'} />
            <Hour time={'10:00am'} />
            <Hour time={'11:00am'} />
          </VStack>
        </Box>
        <Box p={'5px'}>
          {' '}
          <VStack>
            <Hour time={'12:00pm'} />
            <Hour time={'1:00pm'} />
            <Hour time={'2:00pm'} />
          </VStack>
        </Box>
        <Box p={'5px'}>
          {' '}
          <VStack>
            <Hour time={'3:00pm'} />
            <Hour time={'4:00pm'} />
            <Hour time={'5:00pm'} />
          </VStack>
          <Button
            width="100%"
            p={'10px'}
            m={'10px'}
            bg={'blue.400'}
            textColor={'blue.100'}
            _hover={{ color: 'white' }}
            // onClick={() => {}}
          >
            Confirm Booking
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default HourRange;
