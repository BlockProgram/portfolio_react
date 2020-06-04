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
      <div className="square n1">
        <div className="square__content">
          <div className="square__content-text">
            <h3 className="square__title">Full Stack App'</h3>
            <p className="square__text">
              Social network similar to 9GAG with CRUD functions and cookies
              based authentification. Users signup and login before posting GIFs
              and commenting on posts.
            </p>
            <ul className="square__list">
              <div className="square__list-item">
                <FaAngleRight className="square__list-icon" />
                <li>Node.js, Express, MySQL</li>
              </div>
              <div className="square__list-item">
                <FaAngleRight className="square__list-icon" />
                <li>
                  <a href="https://www.npmjs.com/package/bcrypt">Bcrypt, </a>
                  <a href="https://jwt.io/">Jsonwebtoken, </a>
                  <a href="https://www.npmjs.com/package/multer">Multer</a>
                </li>
              </div>
              <div className="square__list-item">
                <FaAngleRight className="square__list-icon" />
                <li> JavaScript, Sass, EJS</li>
              </div>
            </ul>
          </div>
          <div className="square__content-links">
            <a
              href="https://github.com/BlockProgram/fullstack_app_openclassrooms"
              target="_blank"
              rel="noreferrer"
            >
              <div className="square__link repo">
                <p>Code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="square n2">
        <div className="square__content">
          <div className="square__content-text">
            <h3 className="square__title">Ecommerce Website</h3>
            <p className="square__text">
              Project made as part of my{" "}
              <a href="https://openclassrooms.com/fr/paths/141-web-developer">
                OpenClassrooms online bootcamp
              </a>{" "}
              . It displays furnitures pulled from an Express REST API hosted
              locally by the backend. You can add products to your cart and
              order it through a form with validated inputs. I only built the
              frontend for this project.
            </p>
            <ul className="square__list">
              <div className="square__list-item">
                <FaAngleRight className="square__list-icon" />
                <li> AJAX, LocalStorage</li>
              </div>
              <div className="square__list-item">
                <FaAngleRight className="square__list-icon" />
                <li> JavaScript, CSS, HTML</li>
              </div>
            </ul>
          </div>
          <div className="square__content-links">
            <a
              href="https://github.com/BlockProgram/e-commerce_openclassrooms"
              target="_blank"
              rel="noreferrer"
            >
              <div className="square__link repo">
                <p>Code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="square n3">
        <div className="square__content">
          <div className="square__content-text">
            <h3 className="square__title">Productivity Dashboard</h3>
            <p className="square__text">
              A website to manage my daily life better. It includes weekly &
              yearly goals, to-do lists and more. LocalStorage is used to save
              checkboxes' values, dark mode preferences and savings data.
            </p>
            <ul className="square__list">
              <div className="square__list-item">
                <FaAngleRight className="square__list-icon" />
                <li> JavaScript</li>
              </div>
              <div className="square__list-item">
                <FaAngleRight className="square__list-icon" />
                <li> CSS, HTML</li>
              </div>
              <div className="square__list-item">
                <FaAngleRight className="square__list-icon" />
                <li> Jekyll</li>
              </div>
            </ul>
          </div>
          <div className="square__content-links">
            <a href="https://theblockchainprogrammer.com/">
              <div
                className="square__link website"
                target="_blank"
                rel="noreferrer"
              >
                <p>Website</p>
              </div>
            </a>
            <a
              href="https://github.com/BlockProgram/dashboard"
              target="_blank"
              rel="noreferrer"
            >
              <div className="square__link repo">
                <p>Code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="square n4">
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
              <div className="square__list-item">
                <FaAngleRight className="square__list-icon" />
                <li> Bootstrap</li>
              </div>
              <div className="square__list-item">
                <FaAngleRight className="square__list-icon" />
                <li> CSS, HTML</li>
              </div>
            </ul>
          </div>
          <div className="square__content-links">
            <a
              href="https://blockprogram.github.io/projet2_openclassrooms/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="square__link website">
                <p>Website</p>
              </div>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
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
