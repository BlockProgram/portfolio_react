import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import codingImg from "../../images/coding-tech.jpeg"
import aiImg from "../../images/ai-human.jpeg"

const techOriented = () => (
  <Layout>
    <SEO title="Tech' Oriented" />
    <div className="post">
      <h1 className="post__title">Tech' Oriented</h1>
      <h2 className="post__subtitle">
        Technology aka Humanity's greatest inventions
      </h2>
      <a href="https://i.hurimg.com/i/hdn/75/0x0/5deb806fd3806c0da89e6816.jpeg">
        <img className="post__main-img" src={aiImg} alt="AI" />
      </a>

      <h3 className="post__summary tech">
        The following article covers my relationship to technology and why I'm
        learning programming.
      </h3>

      <p>
        First of all, let's define our subject clearly. We use the word
        "technology" regularly but it's not that easy to describe. Here is one
        definition I really like:
      </p>
      <p>
        <span>Technology: </span> the application of scientific knowledge for
        practical purposes (machinery, equipment...)
      </p>

      <p>
        All the things we take for granted nowadays like smartphones, Wifi or
        airplanes were once a fantasy. That's why we are very fortunate to live
        during the 21th century; even though we'll achieve much more in the
        coming centuries. I can't wait for 2057!
      </p>
      <p></p>

      <p>
        The older I get, the more attracted I am to technology in general and
        the more eager I am to learn & to participate in the advancement of our
        tools. It is particularly important to become familiar with high-tech in
        a world that increasingly uses it. IoT, robotics, AI and maybe one day
        Artificial General Intelligence! Technology is accelerating and the ones
        who embrace it the most will do well in the coming decades.
      </p>

      <p>
        As Malcolm X once said "the future belongs to those who prepare for it
        today".
      </p>

      <img class="post__img" src={codingImg} alt="programming" />

      <h3>My motivation to learn programming</h3>

      <p>
        For a very long time, I believed that computers and programming were too
        complex for me and that I should stick to being an end-user.
        Fortunately, my curiosity and ambition led me to discover the truth: if
        you want it bad, you can achieve anything.
      </p>

      <p>Here are the main reasons I started learning programming:</p>

      <ol className="post__ordered-list">
        <li> To be in tune with our technological world</li>
        <p>
          Tech' is everywhere and its expansion throughout the world is
          accelerating.
        </p>
        <p>
          As{" "}
          <a
            href="https://en.wikipedia.org/wiki/Ray_Kurzweil"
            target="__blank"
            rel="noreferrer"
          >
            Raymond Kurzweil
          </a>
          , famous inventor, futurist and Google engineer, details in his novel
          <a
            href="https://www.danielleworld.com/"
            target="__blank"
            rel="noreferrer"
          >
            "Danielle"
          </a>
          , being able to code is a critical skill to become a modern superhero.
        </p>
        <li> Being able to create software</li>
        <p>
          Using a computer program or an electronic device like a drone is cool
          but what's cooler is to be capable of creating your own software or
          device based on your needs and ideas.
        </p>
        <li>Great income</li>
        <p>
          Money is an important factor when choosing a career. Developers are
          able to earn quite a lot as employees or freelancers.
        </p>
        <li> A nomadic lifestyle</li>
        <p>
          It's to me a very crucial aspect concerning web developers and similar
          positions; you can travel the world and work remotely with ease.
        </p>
      </ol>

      <p className="post__last-sentence">
        You now have a better idea of why I'm pursuing the programming life!
      </p>
    </div>
  </Layout>
)

export default techOriented
