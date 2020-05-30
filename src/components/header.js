import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header__nav">
      <a href="/">Home</a>
      <a
        href="https://www.linkedin.com/in/bertrand-bazire/"
        target="_blank"
        rel="noreferrer"
      >
        Profile
      </a>
      <a href="#projects">Projects</a>
      <div className="dropdown">
        <a className="dropdown-trigger" href="/interests">
          Interests
        </a>
        <div className="dropdown-content">
          <a href="/category/technology">Technology</a>
          <a href="/category/productivity">Productivity</a>
          <a href="/category/longevity">Longevity</a>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
