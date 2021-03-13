import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Emails from '../components/emails'
import About from '../components/about'
import '../components/base.css'
import { ChakraProvider, Text, Box, Button, HStack, Center } from '@chakra-ui/react'
// import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <ChakraProvider>
      <Layout>
        
          <Helmet title={siteTitle} />
          <Hero />
          <About />

          <Emails />
          {/* updates and upcoming events buttons*/}
          <Box m={10} mx={20}>
            <Text fontSize="3xl" fontWeight="bold"> Learn more </Text>
            <Text>We meet biweekly on Wednesdays at 10:30am via <a href="http://tinyurl.com/acsrecurring"><strong>Zoom.</strong></a> Join our mailing list, <a href="https://www.remind.com/join/4hfc2hb"><strong>Remind</strong></a>, or <a href="https://www.facebook.com/groups/475915516547617"><strong>Facebook</strong></a> group to stay up to date on the latest events. Additionally, check out the information from past meetings on our website.</Text>
            <br />
            <Center>
              <HStack spacing="25px">
                <Link to="/blog/upcoming-events"><Button bg="blue.100" className="primary-btn" fontWeight="light" _hover={{ bg: "red.400"}}>Upcoming Events →</Button></Link>
                <Link to="/updates"><Button border="2px" borderColor="gray.200" bg="white" className="primary-btn" fontWeight="light" _hover={{ bg: "white" }}>Past Meetings → </Button></Link>
              </HStack>
            </Center>
          </Box>
      </Layout>
      </ChakraProvider>
    )
  }
}

export default RootIndex