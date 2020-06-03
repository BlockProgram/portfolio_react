import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/interestsMenu"
import Article from "../components/article"

import articlesData from "../articles"

function Interests() {
  const [articles, updateArticles] = useState({ articlesData })

  const articlesEls = Object.keys(articles.articlesData).map(key => (
    <Article
      key={key}
      id={articles.articlesData[key].id}
      category={articles.articlesData[key].category}
      title={articles.articlesData[key].title}
      subtitle={articles.articlesData[key].subtitle}
      image={articles.articlesData[key].image}
      link={articles.articlesData[key].link}
    />
  ))

  const handleChange = value => {
    updateArticles({ articlesData: value })
  }

  return (
    <Layout>
      <SEO title="Interests" />
      <div className="interests">
        <Menu handleChange={handleChange} />
        <div>{articlesEls}</div>
      </div>
    </Layout>
  )
}

export default Interests
