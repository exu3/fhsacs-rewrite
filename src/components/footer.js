import { ChakraProvider, Text, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import { FiCloudLightning } from "@react-icons/all-files/fi/FiCloudLightning"
import { AiOutlineFacebook } from "@react-icons/all-files/ai/AiOutlineFacebook"

const Footer = () => (
    <ChakraProvider>
        <Box p={5}>
            <hr /><br />
            <HStack spacing="10px" justifyContent="center">
                <a href="https://instagram.com/foothillacs"><FaInstagram size="2em" alt="Instagram" /></a>
                <a href="mailto:foothillacs@gmail.com"><FaRegEnvelope size="2em" alt="email" /></a>
                <a href="https://www.remind.com/join/4hfc2hb"><FiCloudLightning size="2em" alt="remind" /></a>
                <a href="https://www.facebook.com/groups/475915516547617"><AiOutlineFacebook size="2em" alt="facebook" /></a>
            </HStack>
            <Text textAlign="center">Copyright Foothill ACS © 2021</Text>
            <Text textAlign="center">All Rights Reserved.</Text>
        </Box>
    </ChakraProvider>
)

export default Footer