import React from "react"

const Footer = () => (
  <footer>
    <div className="footer__nav">
      <a href="/">Home</a>
      <a
        href="https://www.linkedin.com/in/bertrand-bazire/"
        target="_blank"
        rel="noreferrer"
      >
        Profile
      </a>
      <a href="#projects">Projects</a>
      <a href="/interests">Interests</a>
    </div>

    <ul className="social-list">
      <li>
        <a
          href="https://github.com/BlockProgram"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/bertrand-bazire/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="mailto:bazire.bertrand@gmail.com">
          <i className="far fa-envelope"></i>
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer
