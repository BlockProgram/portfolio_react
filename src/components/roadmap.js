import React from "react"
import { FaRegCheckCircle } from "react-icons/fa"

const Roadmap = () => (
  <div className="roadmap__container">
    <p className="roadmap__statement">
      I've been studying programming full time since November 2019. The progress
      bar below summarizes what I learnt.
    </p>
    <div className="roadmap">
      <div className="roadmap__upper-row">
        <ul className="roadmap__item-text">
          <li>Technical sophistication:</li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a
              href="https://www.learnenough.com/command-line-tutorial/basics"
              target="__blank"
              rel="noreferrer"
            >
              Command line interface
            </a>
          </li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a
              href="https://www.learnenough.com/text-editor"
              target="__blank"
              rel="noreferrer"
            >
              Text editors
            </a>
          </li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a
              href="https://www.learnenough.com/git"
              target="__blank"
              rel="noreferrer"
            >
              Git
            </a>
          </li>
        </ul>
        <div className="roadmap__item-date date-above">
          <p>December 2019</p>
        </div>
        <ul className="roadmap__item-text">
          <li>Practice time with 2 projects:</li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a
              href="https://github.com/BlockProgram/official"
              target="__blank"
              rel="noreferrer"
            >
              1st portfolio website
            </a>
          </li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a
              href="https://theblockchainprogrammer.com/"
              target="__blank"
              rel="noreferrer"
            >
              Productivity dashboard
            </a>
          </li>
        </ul>
        <div className="roadmap__item-date date-above">
          <p>February-March 2020</p>
        </div>
        <ul className="roadmap__item-text">
          <li>2 months OpenClassrooms online bootcamp & more:</li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a
              href="https://openclassrooms.com/fr/paths/185-developpeur-web"
              target="__blank"
              rel="noreferrer"
            >
              Bootstrap, Sass, SEO
            </a>
          </li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a
              href="https://openclassrooms.com/fr/paths/185-developpeur-web"
              target="__blank"
              rel="noreferrer"
            >
              Cybersecurity (OWASP), JS full stack (Node, Express)
            </a>
          </li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a
              href="https://openclassrooms.com/fr/paths/185-developpeur-web"
              target="__blank"
              rel="noreferrer"
            >
              REST APIs, MongoDB, SQL
            </a>
          </li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a
              href="https://www.udemy.com/course/react-le-guide-complet/"
              target="__blank"
              rel="noreferrer"
            >
              React, Gatsby, Firebase
            </a>
          </li>
        </ul>
      </div>
      <div className="roadmap__middle-row">
        <div className="vertical-line upper"></div>
        <div className="vertical-line lower"></div>
        <div className="vertical-line upper "></div>
        <div className="vertical-line lower"></div>
        <div className="vertical-line upper"></div>
      </div>
      <div className="roadmap__lower-row">
        <div className="roadmap__item-date">
          <p>November 2019</p>
        </div>
        <ul className="roadmap__item-text">
          <li>First languages & tools:</li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a
              href="https://www.learnenough.com/html"
              target="__blank"
              rel="noreferrer"
            >
              HTML
            </a>
          </li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a
              href="https://www.learnenough.com/css-and-layout"
              target="__blank"
              rel="noreferrer"
            >
              CSS{" "}
            </a>
          </li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a href="https://jekyllrb.com/" target="__blank" rel="noreferrer">
              Jekyll (static site generator)
            </a>
          </li>
        </ul>
        <div className="roadmap__item-date">
          <p>January 2020</p>
        </div>
        <ul className="roadmap__item-text">
          <li>3 JavaScript courses with many projects:</li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a
              href="https://www.learnenough.com/javascript-tutorial/hello_world"
              target="__blank"
              rel="noreferrer"
            >
              LearnEnough
            </a>
          </li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a
              href="https://javascript.hardcode.rs/"
              target="__blank"
              rel="noreferrer"
            >
              JavaScript guide by Hardcoders
            </a>
          </li>
          <li>
            <FaRegCheckCircle className="roadmap__check-icon" />
            <a
              href="https://vanillawebprojects.com/"
              target="__blank"
              rel="noreferrer"
            >
              20 JS web projects by Traversy Media
            </a>
          </li>
        </ul>
        <div className="roadmap__item-date">
          <p>April-June 2020</p>
        </div>
      </div>
    </div>
  </div>
)

export default Roadmap
