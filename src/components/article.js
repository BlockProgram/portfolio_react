import React from "react"

const Article = ({ id, category, title, subtitle, image, link }) => (
  <a
    href={link}
    className={"article" + " " + id}
    // style={{
    //   backgroundImage: `url(${image})`,
    // }}
  >
    <p className="article__category">{category}</p>
    <div className="article__content">
      <p className="article__title">{title}</p>
      <p className="article__subtitle">{subtitle}</p>
    </div>
  </a>
)

export default Article
