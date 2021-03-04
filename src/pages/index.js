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
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

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
            <Text>It is a long established fact that Come to our meetings on Wedensdya at this time. a reader will be distracted by the readable content of a page when looking at its layout.</Text>
            <br />
            <Center>
              <HStack spacing="25px">
                <Link to="/events"><Button bg="blue.100" className="primary-btn" fontWeight="light" _hover={{ bg: "red.400"}}>Upcoming Events →</Button></Link>
                <Link to="/updates"><Button border="2px" borderColor="gray.200" bg="white" className="primary-btn" fontWeight="light" _hover={{ bg: "white" }}>Past Meetings → </Button></Link>
              </HStack>
            </Center>
          </Box>
          {/* <div className="wrapper">
            <h2 className="section-headline">Meeting Updates</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div> */} 
          {/* recent meetings doesn't look so good on the homepage so moving it elsewhere */}
        
      </Layout>
      </ChakraProvider>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
// idk if we should use the contentful person thing