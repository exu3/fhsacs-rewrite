import React from 'react'
import { Box, Text, Button, Input, FormControl, FormLabel, FormHelperText, ChakraProvider, InputGroup, InputRightElement } from '@chakra-ui/react'

const Emails = () => (
  <ChakraProvider>
    <Box bg="gray.100" textAlign="center" p="5" w="60%" mx="auto" borderRadius="lg" p={4}>
        <form>
            <FormControl id="email">
                <FormLabel>Join our mailing list!</FormLabel>
                <FormHelperText textAlign="left">
                    Enter your email below to stay updated on the latest news, upcoming events, and club meetings.
                </FormHelperText><br />
            </FormControl>
            <InputGroup>
                <Input type="email" placeholder="Email" focusBorderColor="blue.200" isRequired="true" />
                <InputRightElement children={<Button width={20} type="submit" bg="green.200" _hover={{ bg: "green.300" }}>✓</Button>} />
            </InputGroup>
        </form>
        {/* <Button type="submit" _hover={{ bg: "green.300" }}>Submit</Button> */}
    </Box>
  </ChakraProvider>
)

export default Emails