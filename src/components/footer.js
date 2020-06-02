import React from "react"
import { Link } from "gatsby"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

const Footer = () => (
  <footer>
    <div className="nav footer__nav">
      <Link to="/">Home</Link>
      <a
        href="https://www.linkedin.com/in/bertrand-bazire/"
        target="_blank"
        rel="noreferrer"
      >
        Profile
      </a>
      <a href="#projects">Projects</a>
      <Link className="dropdown-trigger" to="/interests">
        Interests
      </Link>
    </div>

    <ul className="social-list">
      <li>
        <a
          href="https://github.com/BlockProgram"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="fa-github" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/bertrand-bazire/"
          target="_blank"
          rel="noreferrer"
        >
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
