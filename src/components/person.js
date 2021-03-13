import { ChakraProvider, Text, Box, Image, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import FallbackPfp from '../../static/headshot.png'

const Person = ({ pic, name, role, bio, pronouns }) => (
    <ChakraProvider>
              <Box w="30rem" m={5}>
                <HStack>
                    <Image src={pic} borderRadius="50%" alt="Heashot" w="8rem" boxShadow="lg" fallbackSrc={FallbackPfp} />
                    <VStack alignItems="left">
                      <Text fontSize="lg">{name}</Text>
                      <Text>{role}</Text>
                      <Text>{bio}</Text>
                    </VStack>
                </HStack>
              </Box>
    </ChakraProvider>
)

export default Person