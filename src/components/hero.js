import React, { Fragment, useEffect, useRef } from "react"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

import { Helmet } from "react-helmet"
import ScriptTag from "react-script-tag"

import Matter from "matter-js"
import MatterWrap from "matter-wrap"

function Hero() {
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
        width: 1440,
        height: 650,
        wireframes: false,
      },
    })

    // create two boxes and a ground
    var ground1 = Bodies.rectangle(0, 500, 300, 15, {
      isStatic: true,
      angle: 0.7,
      render: { fillStyle: "transparent" },
    })
    var ground2 = Bodies.rectangle(0, 541, 680, 15, {
      isStatic: true,
      angle: 0.3,
      render: { fillStyle: "transparent" },
    })
    var ground3 = Bodies.rectangle(360, 635, 250, 15, {
      isStatic: true,
      angle: 0.18,
      render: { fillStyle: "transparent" },
    })
    var ground4 = Bodies.rectangle(585, 640, 700, 15, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    })
    var ground5 = Bodies.rectangle(985, 640, 215, 15, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    })
    var ground6 = Bodies.rectangle(1265, 600, 200, 15, {
      isStatic: true,
      angle: -0.3,
      render: { fillStyle: "transparent" },
    })
    var ground7 = Bodies.rectangle(1300, 586, 200, 15, {
      isStatic: true,
      angle: -0.35,
      render: { fillStyle: "transparent" },
    })
    var ground8 = Bodies.rectangle(1400, 530, 200, 15, {
      isStatic: true,
      angle: -0.6,
      render: { fillStyle: "transparent" },
    })
    var leftWall = Bodies.rectangle(-10, 450, 10, 200, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    })
    var rightWall = Bodies.rectangle(1450, 450, 10, 200, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    })

    // add bodies
    var stack = Composites.stack(750, -1600, 10, 20, 0, 0, function (x, y) {
      return Bodies.circle(x, y, Common.random(10, 20), {
        friction: 0.00001,
        restitution: 0.5,
        density: 0.001,
        render: {
          fillStyle: ["#e3cc42", "#43c2de", "#c2c2c2"][
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
      ground1,
      ground2,
      ground3,
      ground4,
      ground5,
      ground6,
      ground7,
      ground8,
    ])

    // run the engine
    Engine.run(engine)

    // run the renderer
    Render.run(render)
  })

  return (
    <div className="hero__container">
      <div className="matter-container"></div>
      <div className="hero__content">
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
      </div>
    </div>
  )
}

export default Hero
