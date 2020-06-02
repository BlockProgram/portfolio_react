import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav header__nav">
      <Link to="/">Home</Link>
      <a
        href="https://www.linkedin.com/in/bertrand-bazire/"
        target="_blank"
        rel="noreferrer"
      >
        Profile
      </a>
      <a href="#projects">Projects</a>
      <div className="dropdown">
        <Link className="dropdown-trigger" to="/interests">
          Interests
        </Link>
        <div className="dropdown-content">
          <Link to="/category/technology">Technology</Link>
          <Link to="/category/productivity">Productivity</Link>
          <Link to="/category/longevity">Longevity</Link>
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
