import React from 'react'
import { ChakraProvider, Box, Text } from '@chakra-ui/react'

const About = () => (
  <ChakraProvider>
    <Box m={10} mx={20}>
        <Text fontSize="3xl" fontWeight="bold"> Who we are </Text>
        <Text>
        Foothill ACS is an affiliate of the <a href="https://cancer.org" target="_blank"><strong>American Cancer Society</strong></a>. Our club looks to help aid the mission of creating a cancerless future through volunteering, advocating, fundraising, and raising awareness.
        </Text>
    </Box>
  </ChakraProvider>
)

export default About

