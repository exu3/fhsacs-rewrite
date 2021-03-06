import React from 'react'
import { Link } from "gatsby"
import { Box, Text, Button } from '@chakra-ui/react'

const Hero = () => (
  <div>
    <Box bg="blue.100" textAlign="center" p="10">
        <Text fontSize="2xl">Foothill High School</Text>
        <Text fontSize="4xl"  fontWeight="extrabold">American Cancer Society Club</Text>
        <Text fontSize="lg">The best club on campus.</Text><br />
        <Link to="/updates"><Button borderRadius="20" color="white" _hover={{ bg: "red.500" }} bgGradient="linear(rgba(0,178,255,1) 0%, rgba(22,217,255,1))" className="primary-btn">Learn more</Button></Link>
    </Box>
  </div>
)

export default Hero