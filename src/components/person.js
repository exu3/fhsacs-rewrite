import { ChakraProvider, Text, Box, Image, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import FallbackPfp from '../../static/headshot.png'

const Person = ({ pic, name, role, bio, pronouns }) => (
    <ChakraProvider>
              <Box w="30rem" m={5}>
                <HStack>
                    <Image src={pic} borderRadius="50%" alt="Headshot" w="7rem" boxShadow="lg" fallbackSrc={FallbackPfp} />
                    <VStack alignItems="left">
                      <Text fontSize="xl"><strong>{name}</strong>, {role}</Text>
                      <Text>{bio}</Text>
                    </VStack>
                </HStack>
              </Box>
    </ChakraProvider>
)

export default Person