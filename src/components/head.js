import React from 'react'
import { Helmet } from 'react-helmet'

const Head = () => {
    return (
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Foothill ACS Club</title>
            <meta name="description" content="Official website of the Foothill High School American Cancer Society." />

            {/* OpenGraph tags */}
            <meta property="og:url" content="https://foothillfalcons.org" />
            <meta property="og:title" content="Foothill High School ACS" />
            <meta property="og:description" content="Official website of the Foothill High School American Cancer Society." />

            {/* Twitter Card tags */}
            <meta name="twitter:title" content="Foothill High School ACS" />
            <meta name="twitter:description" content="Official website of the Foothill High School American Cancer Society." />
        </Helmet>
    )
}

export default Head