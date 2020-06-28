import React from "react"
import { FaRegCheckCircle, FaArrowDown } from "react-icons/fa"

function Roadmap() {
  function scrollDown() {
    window.scrollTo({ top: 700, left: 100, behavior: "smooth" })
  }

  return (
    <div className="roadmap__container" id="roadmap">
      <button className="roadmap-scrollbtn" onClick={scrollDown}>
        <FaArrowDown className="scroll-arrow"></FaArrowDown>
      </button>
      <p className="roadmap__statement">
        I've been studying programming full time since November 2019. The
        progress bar below summarizes what I learnt.
      </p>
      <div className="roadmap">
        <div className="roadmap__upper-row">
          <ul className="roadmap__item-text">
            <li>Technical sophistication:</li>
            <li>
              <FaRegCheckCircle className="roadmap__check-icon" />
              <a href="https://www.learnenough.com/command-line-tutorial/basics">
                Command line interface
              </a>
            </li>
            <li>
              <FaRegCheckCircle className="roadmap__check-icon" />
              <a href="https://www.learnenough.com/text-editor">Text editors</a>
            </li>
            <li>
              <FaRegCheckCircle className="roadmap__check-icon" />
              <a href="https://www.learnenough.com/git">Git</a>
            </li>
          </ul>
          <div className="roadmap__item-date date-above">
            <p>December 2019</p>
          </div>
          <ul className="roadmap__item-text">
            <li>Practice time with 2 projects:</li>
            <li>
              <FaRegCheckCircle className="roadmap__check-icon" />
              <a href="https://github.com/BlockProgram/official">
                1st portfolio website
              </a>
            </li>
            <li>
              <FaRegCheckCircle className="roadmap__check-icon" />
              <a href="https://theblockchainprogrammer.com/">
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
              <a href="https://openclassrooms.com/fr/paths/185-developpeur-web">
                Bootstrap, Sass, SEO
              </a>
            </li>
            <li>
              <FaRegCheckCircle className="roadmap__check-icon" />
              <a href="https://openclassrooms.com/fr/paths/185-developpeur-web">
                Cybersecurity (OWASP), JS full stack (Node, Express)
              </a>
            </li>
            <li>
              <FaRegCheckCircle className="roadmap__check-icon" />
              <a href="https://openclassrooms.com/fr/paths/185-developpeur-web">
                REST APIs, MongoDB, SQL
              </a>
            </li>
            <li>
              <FaRegCheckCircle className="roadmap__check-icon" />
              <a href="https://www.udemy.com/course/react-le-guide-complet/">
                React, Gatsby
              </a>
              ,WordPress
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
              <a href="https://www.learnenough.com/html">HTML</a>
            </li>
            <li>
              <FaRegCheckCircle className="roadmap__check-icon" />
              <a href="https://www.learnenough.com/css-and-layout">CSS </a>
            </li>
            <li>
              <FaRegCheckCircle className="roadmap__check-icon" />
              <a href="https://jekyllrb.com/">Jekyll (static site generator)</a>
            </li>
          </ul>
          <div className="roadmap__item-date">
            <p>January 2020</p>
          </div>
          <ul className="roadmap__item-text">
            <li>3 JavaScript courses with many projects:</li>
            <li>
              <FaRegCheckCircle className="roadmap__check-icon" />
              <a href="https://www.learnenough.com/javascript-tutorial/hello_world">
                LearnEnough
              </a>
            </li>
            <li>
              <FaRegCheckCircle className="roadmap__check-icon" />
              <a href="https://www.udemy.com/course/javascriptleguide/">
                JavaScript guide by Hardcoders
              </a>
            </li>
            <li>
              <FaRegCheckCircle className="roadmap__check-icon" />
              <a href="https://vanillawebprojects.com/">
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
}

export default Roadmap
