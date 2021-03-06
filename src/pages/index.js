import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Roadmap from "../components/roadmap"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Roadmap />
    <Projects />
  </Layout>
)

export default IndexPage
