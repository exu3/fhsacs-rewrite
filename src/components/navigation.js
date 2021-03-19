import React from 'react'
import { Link } from 'gatsby'
import { ChakraProvider, HStack, Box, Center } from '@chakra-ui/react'
// import styles from './navigation.module.css'

const Navigation = () => (
  <ChakraProvider>
    <Box bg="gray.100" p="5" mx="auto" textAlign="center">
        <Center>
          <HStack spacing="25px">
            <Link to="/">Home</Link>
            <Link to="/blog/upcoming-events">Upcoming Events</Link>
            <Link to="/updates">Meetings</Link>
            <Link to="/blog/resources">Resources</Link>
            <a href="mailto:foothillacs@gmail.com">Contact</a>
          </HStack>
        </Center>
    </Box>
  </ChakraProvider>
)

export default Navigation