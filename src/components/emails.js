import React from 'react'
import { Box, Button, Input, FormControl, FormLabel, FormHelperText, ChakraProvider, InputGroup, HStack } from '@chakra-ui/react'

const Emails = () => (
  <ChakraProvider>
    <Box bg="white" textAlign="center" p="5" w="60%" mx="auto" borderRadius="lg" borderColor="gray.200" borderWidth={1} boxShadow="md">
        <form>
            <FormControl id="email">
                <FormLabel>Join our mailing list!</FormLabel>
                <FormHelperText textAlign="left">
                    Enter your email below to stay updated on the latest news, upcoming events, and club meetings.
                </FormHelperText><br />
            </FormControl>
            <InputGroup>
            <HStack w="100%">
                <Input type="email" placeholder="name@example.com" focusBorderColor="blue.200" isRequired="true" w="100%" />
                <Button width={20} type="submit" bg="green.200" _hover={{ bg: "green.300" }} px={8}> Sign Up </Button>
            </HStack>
            </InputGroup>
        </form>
        {/* <Button type="submit" _hover={{ bg: "green.300" }}>Submit</Button> */}
    </Box>
  </ChakraProvider>
)

export default Emails