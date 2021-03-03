import React from 'react'
import { Box, Text, Button, Input, FormControl, FormLabel, FormHelperText, ChakraProvider } from '@chakra-ui/react'

const Emails = () => (
  <ChakraProvider>
    <Box bg="gray.100" textAlign="center" p="5" w="60%" mx="auto" borderRadius="15">
        <FormControl id="email">
        <FormLabel>Join our mailing list!</FormLabel>
        <FormHelperText>
            Enter your email below to stay updated on the latest news, upcoming events, and club meetings.
        </FormHelperText>
        </FormControl>
        <Input type="email" placeholder="Email" focusBorderColor="blue.200" isRequired="true" />
    </Box>
  </ChakraProvider>
)

export default Emails