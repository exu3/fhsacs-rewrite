import React from "react"
import { Link } from 'gatsby'
import { ChakraProvider, Box, Text } from "@chakra-ui/react"

const NotFound = () => {
    return (
        <ChakraProvider>
            <Box>
                <Text textAlign="center">Page not found</Text>
                <Text><Link to="/">Go Home</Link></Text>
            </Box>
        </ChakraProvider>
    )
}

export default NotFound