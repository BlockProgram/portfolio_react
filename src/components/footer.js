import React from "react"
import { Link } from "gatsby"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

const Footer = () => (
  <footer>
    <div className="nav footer__nav">
      <Link to="/">Home</Link>
      <a href="https://www.linkedin.com/in/bertrand-bazire/">Profile</a>
      <Link to="/#projects">Projects</Link>
      <Link to="/interests">Interests</Link>
    </div>

    <ul className="social-list">
      <li>
        <a href="https://github.com/BlockProgram">
          <FaGithub className="fa-github" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/bertrand-bazire/">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="mailto:bazire.bertrand@gmail.com">
          <FaEnvelope />
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer
