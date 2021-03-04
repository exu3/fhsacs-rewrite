import React from 'react'
import { ChakraProvider, Box, Text } from '@chakra-ui/react'

const About = () => (
  <ChakraProvider>
    <Box m={10} mx={20}>
        <Text fontSize="3xl" fontWeight="bold"> Who we are </Text>
        <Text>
            ACS (American Cancer Society) is a cool club. You should join because we have x and y events that are really cool. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </Text>
    </Box>
  </ChakraProvider>
)

export default About

