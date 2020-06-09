import React from "react"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

const Hero = () => (
  <div className="hero__container">
    <div className="hero__content">
      <h1>
        <span>Bertrand</span>- Junior Web Developer
      </h1>
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
    </div>
  </div>
)

export default Hero
