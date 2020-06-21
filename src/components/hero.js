import React, { Fragment, useEffect, useRef } from "react"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

import { Helmet } from "react-helmet"
import ScriptTag from "react-script-tag"

import Matter from "matter-js"
import MatterWrap from "matter-wrap"

function Hero() {
  const width = window.innerWidth

  useEffect(() => {
    Matter.use(MatterWrap)

    // module aliases
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies

    // create an engine
    var engine = Engine.create()

    // create a renderer
    var render = Render.create({
      element: document.body.querySelector(".matter-container"),
      engine: engine,
      options: {
        background: "transparent",
        width: width,
        height: 700,
        wireframes: false,
      },
    })

    // create two boxes and a ground
    var leftGround = Bodies.rectangle(250, 600, 1330, 40, {
      isStatic: true,
      angle: 0.08,
    })
    var rightGround = Bodies.rectangle(1165, 625, 500, 40, {
      isStatic: true,
      angle: -0.08,
    })
    var leftWall = Bodies.rectangle(50, 560, 10, 100, { isStatic: true })
    var rightWall = Bodies.rectangle(1320, 560, 10, 100, {
      isStatic: true,
      // render: { fillStyle: "transparent" },
    })

    // add bodies
    var stack = Composites.stack(750, -1600, 10, 20, 0, 0, function (x, y) {
      return Bodies.circle(x, y, Common.random(10, 25), {
        friction: 0.00001,
        restitution: 0.5,
        density: 0.001,
        render: {
          fillStyle: ["#e3cc42", "#6e6e6e", "#008000"][
            Math.round(Math.random() * 3 - 0.5)
          ],
        },
        plugin: {
          wrap: {
            min: {
              x: 0,
              y: 0,
            },
            max: {
              x: 2000,
              y: 2000,
            },
          },
        },
      })
    })

    // add all of the bodies to the world
    World.add(engine.world, [
      stack,
      leftWall,
      rightWall,
      leftGround,
      rightGround,
    ])

    // run the engine
    Engine.run(engine)

    // run the renderer
    Render.run(render)
  })

  return (
    <div className="hero__container">
      <div className="matter-container"></div>
      {/* <div className="hero__content">
        <h1>
          <span>Bertrand</span>- Junior Web Developer
        </h1>
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
      </div> */}
    </div>
  )
}

export default Hero
