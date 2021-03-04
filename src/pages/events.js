import React from "react"
import { Link } from 'gatsby'
import { ChakraProvider, Box, Text } from "@chakra-ui/react"

const Events = () => {
    return (
        <ChakraProvider>
            <Box>
                <Text textAlign="center">Page under development</Text>
                <Text><Link to="/">Go Home</Link></Text>
            </Box>
        </ChakraProvider>
    )
}

export default Events