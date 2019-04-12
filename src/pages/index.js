import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Yeimer Molina | Frontend Developer"
      keywords={[
        `Yeimer Molina`,
        `Frontend Developer Medellin`,
        `React Developer Medellin`,
      ]}
    />
    <Hero />
  </Layout>
)

export default IndexPage
