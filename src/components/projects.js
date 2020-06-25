import React from "react"
import { FaAngleRight } from "react-icons/fa"

const Projects = () => (
  <div className="projects" id="projects">
    <h2 className="projects__title">Projects</h2>
    <p className="projects__statement">
      Here are my most advanced projects.{" "}
      <span>
        You can hover over each block to get more information about the project.
      </span>
    </p>
    <div className="squares-container">
      <div className="square wordpress">
        <div className="square__content">
          <div className="square__content-text">
            <h3 className="square__title">Wordpress Website</h3>
            <p className="square__text">
              Webpage of Compound Finance, a fictional company. It was made
              using DesktopServer and a popular theme.
            </p>
            <ul className="square__list">
              <li>
                <FaAngleRight className="square__list-icon" />
                WordPress, custom CSS
              </li>
              <li>
                {" "}
                <FaAngleRight className="square__list-icon" /> Bluehost, cPanel
              </li>
            </ul>
          </div>
          <div className="square__content-links">
            <a href="/">
              <div className="square__link website">
                <p>Website</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="square fullstack">
        <div className="square__content">
          <div className="square__content-text">
            <h3 className="square__title">Full Stack App'</h3>
            <p className="square__text">
              Social network similar to 9GAG with CRUD functions and
              cookie-based authentication. Users signup and login before posting
              GIFs and commenting on posts.
            </p>
            <ul className="square__list">
              <li>
                <FaAngleRight className="square__list-icon" />
                Node.js, Express, MySQL
              </li>

              <li>
                <FaAngleRight className="square__list-icon" />
                <a href="https://www.npmjs.com/package/bcrypt">Bcrypt, </a>
                <a href="https://jwt.io/">Jsonwebtoken, </a>
                <a href="https://www.npmjs.com/package/multer">Multer</a>
              </li>

              <li>
                {" "}
                <FaAngleRight className="square__list-icon" /> JavaScript, Sass,
                EJS
              </li>
            </ul>
          </div>
          <div className="square__content-links">
            <a href="https://github.com/BlockProgram/fullstack_app_openclassrooms">
              <div className="square__link repo">
                <p>Code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="square ecommerce">
        <div className="square__content">
          <div className="square__content-text">
            <h3 className="square__title">Ecommerce Website</h3>
            <p className="square__text">
              Project made as part of my{" "}
              <a href="https://openclassrooms.com/fr/paths/141-web-developer">
                OpenClassrooms online bootcamp.
              </a>{" "}
              It displays furnitures pulled from an Express REST API hosted
              locally by the backend. You can add products to your cart and
              order it through a form with validated inputs. I only built the
              frontend for this project.
            </p>
            <ul className="square__list">
              <li>
                <FaAngleRight className="square__list-icon" /> AJAX,
                LocalStorage
              </li>

              <li>
                <FaAngleRight className="square__list-icon" /> JavaScript, CSS,
                HTML
              </li>
            </ul>
          </div>
          <div className="square__content-links">
            <a href="https://github.com/BlockProgram/e-commerce_openclassrooms">
              <div className="square__link repo">
                <p>Code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="square dashboard">
        <div className="square__content">
          <div className="square__content-text">
            <h3 className="square__title">Productivity Dashboard</h3>
            <p className="square__text">
              A website to manage my daily life better. It includes weekly &
              yearly goals, to-do lists and more. LocalStorage is used to save
              checkboxes' values, dark mode preferences and savings data.
            </p>
            <ul className="square__list">
              <li>
                {" "}
                <FaAngleRight className="square__list-icon" /> JavaScript
              </li>

              <li>
                {" "}
                <FaAngleRight className="square__list-icon" /> CSS, HTML
              </li>

              <li>
                {" "}
                <FaAngleRight className="square__list-icon" /> Jekyll
              </li>
            </ul>
          </div>
          <div className="square__content-links">
            <a href="https://theblockchainprogrammer.com/">
              <div className="square__link website">
                <p>Website</p>
              </div>
            </a>
            <a href="https://github.com/BlockProgram/dashboard">
              <div className="square__link repo">
                <p>Code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="square cv">
        <div className="square__content">
          <div className="square__content-text">
            <h3 className="square__title">Online CV</h3>
            <p className="square__text">
              Project n°2 of the{" "}
              <a href="https://openclassrooms.com/fr/paths/141-web-developer">
                'Web Developer' course of OpenClassrooms
              </a>
              . It's a simple responsive CV built with Bootstrap.
            </p>
            <ul className="square__list">
              <li>
                {" "}
                <FaAngleRight className="square__list-icon" /> Bootstrap
              </li>

              <li>
                {" "}
                <FaAngleRight className="square__list-icon" /> CSS, HTML
              </li>
            </ul>
          </div>
          <div className="square__content-links">
            <a href="https://blockprogram.github.io/projet2_openclassrooms/">
              <div className="square__link website">
                <p>Website</p>
              </div>
            </a>
            <a href="https://github.com/BlockProgram/projet2_openclassrooms">
              <div className="square__link repo">
                <p>Code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Projects
