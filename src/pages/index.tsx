import Head from 'next/head';
import { Inter } from '@next/font/google';
import {
  Box,
  Container,
  Heading,
  HStack,
  VStack,
  Slide,
  Spacer,
  Text,
  extendTheme,
  SimpleGrid,
} from '@chakra-ui/react';
import Calender from 'react-calendar';
// import HeroSlide from '../herosection/hero';
import { Center, Flex, Image as Img } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import BookingForm from '@/components/BookingForm';
import HourRange from '../components/HourRange';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // const theme=extendTheme({
  //  textStyle: {
  //   h1: {
  //      fontSize: '30',

  //   }
  //   }
  // })

  return (
    <>
      <Head>
        <title>Nej | Studio</title>
        <meta name="description" content="Nej Studios Booking App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex flexDir="column" justify="center" align="center">
        <Box as="section">
          <Navbar />
          <Box as="section">
            <Img src="/slide/s1.jpg" />
          </Box>
        </Box>

        <Box as="section" p="10" alignItems="center">
          <Container>
            <Heading>Book an Appointment</Heading>
          </Container>
        </Box>

        <Spacer />

        <Flex p="10px" w="98%"  wrap={'wrap'}>
          <SimpleGrid columns={3} spacing={2}>
            <Box minHeight="100px">
              <BookingForm />
            </Box>
            <Box minHeight="300px" p="20px" >
              <Calender />
            </Box>
            <Box minHeight="100px" maxH={'350px'}  >
        
              <Box textStyle="h1">Time:</Box>
              <HourRange/>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
