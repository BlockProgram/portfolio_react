import React from "react"
import { Link } from "gatsby"

const Article = ({ id, category, title, subtitle, image, link }) => (
  <Link to={link} className={`article ${id}`}>
    <p className="article__category">{category}</p>
    <div className="article__content">
      <p className="article__title">{title}</p>
      <p className="article__subtitle">{subtitle}</p>
    </div>
  </Link>
)

export default Article
