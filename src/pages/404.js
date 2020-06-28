import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container-404">
      <h1 className="title-404">NOT FOUND</h1>
      <p className="text-404">This page doesn't exist.</p>
    </div>
  </Layout>
)

export default NotFoundPage
