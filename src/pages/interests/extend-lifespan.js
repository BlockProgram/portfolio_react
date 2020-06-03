import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const extendLifespan = () => (
  <Layout>
    <SEO title="Tech' Oriented" />
    <div className="post">
      <h1 className="post__title">Tech' Oriented</h1>
      <h2 className="post__subtitle">
        Technology aka Humanity's greatest inventions
      </h2>
      <a href="https://i.hurimg.com/i/hdn/75/0x0/5deb806fd3806c0da89e6816.jpeg">
        <img
          className="post__main-img"
          src="https://i.hurimg.com/i/hdn/75/0x0/5deb806fd3806c0da89e6816.jpeg"
          alt="AI"
        />
      </a>
    </div>
  </Layout>
)

export default extendLifespan
