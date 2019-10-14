import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import IconsGreenBar from "../components/IconsGreenBar"
import Footer from "../components/Footer"

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
    <About />
    <IconsGreenBar />
    <Footer />
  </Layout>
)

export default IndexPage
