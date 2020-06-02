import React from "react"
import { Link } from "gatsby"

import articles from "../articles"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Interests" />
    <main className="main">
      <button>Tech'</button>
      <button>Work'</button>
      <button>Live'</button>
    </main>
  </Layout>
)

export default SecondPage

console.log(articles)
