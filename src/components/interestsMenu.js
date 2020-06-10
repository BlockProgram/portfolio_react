import React from "react"

import articlesData from "../articles"

function Menu({ handleChange }) {
  const filterArticles = category => {
    const articlesArray = Object.keys(articlesData).map(i => articlesData[i])
    const filteredArticles = articlesArray.filter(
      article => article.category === category
    )

    handleChange({ ...filteredArticles })
  }

  return (
    <div className="interests__buttons-container">
      <button
        onClick={() => filterArticles("Technology")}
        className="interests__button"
      >
        Technology
      </button>
      <button
        onClick={() => filterArticles("Productivity")}
        className="interests__button"
      >
        Productivity
      </button>
      <button
        onClick={() => filterArticles("Longevity")}
        className="interests__button"
      >
        Longevity
      </button>
    </div>
  )
}

export default Menu
