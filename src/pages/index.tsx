import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Box, HStack } from '@chakra-ui/react'
import Calender from 'react-calendar'

const inter = Inter({ subsets: ['latin',] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nej | Studio</title>
        <meta name="description" content="Nej Studios Booking App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display="flex" flexDirection='column' w="100vw" h="100vh" justifyItems='center' alignContent='center'>
        <Calender
         />
      </Box>
   
    </>
  )
}
