import React from 'react'
import './base.css'
import Navigation from './navigation'
import Footer from './footer'
import { ChakraProvider } from '@chakra-ui/react'
import Head from '../components/head'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ChakraProvider>
        <Head />
        <Navigation />
        {children}
        <Footer />
      </ChakraProvider>
    )
  }
}

export default Template
