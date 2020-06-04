import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import humansImg from "../../images/human-evolution.jpeg"
import expectancyImg from "../../images/life-expectancy.png"

const extendLifespan = () => (
  <Layout>
    <SEO title="Tech' Oriented" />
    <div className="post">
      <h1 className="post__title">Extend Your Lifespan</h1>
      <h2 className="post__subtitle">Maximizing our stay on Earth</h2>
      <img
        className="post__main-img"
        src={humansImg}
        alt="Human evolution, from monkey to robot"
      />
      <h3 className="post__summary">
        Various advanced technologies combined with extensive research on our
        physiology are allowing us to live much longer
      </h3>
      <p>Being alive is great isn't it?!</p>
      <p>
        Despite all the mystery around our universe, human beings and life in
        general; our ultimate goal should always be to increase our lifespan &
        healthspan (quality of life). This article introduces you to my
        philosophy regarding longevity, my strategies to live longer as well as
        my mentors on this subject.
      </p>
      <img
        className="post__img"
        src={expectancyImg}
        alt="life expectancy graph beetween 1770 and 2018"
      />
      <p>
        After looking at the above graph, we clearly see the progress we made
        during the last decades when it comes to life expectancy. Imagine having
        30 years to live as a man living in 1800. That would not be fun!
      </p>
      <p>
        As of today, the average american woman has a life expectancy of 81
        years. Which is great compared to the past but pale into insignifiance
        compared to what could be possible ideally. Consider that the oldest
        person that ever lived, Jeanne Calment, died aged 122. While this age is
        remarkable, many scientists argue that human beings could live much
        longer and keep a great body in the process.
      </p>
      <p>
        Below are the most important habits that I know of to enhance our
        lifespan as well as a few online resources to become (at least) a
        supercentenarian!
      </p>
      <h3>Sleep</h3>
      <p>
        Although we might consider it a waste of time, sleep is actually crucial
        to one's health. It is during that period that your body and mind heal
        so you should always go for 7 to 8 hours of sleep. Sleeping, as you
        already know, is also critical to our productivity.
      </p>
      <p>
        You can read{" "}
        <a
          href="https://www.amazon.fr/Why-We-Sleep-Science-Dreams/dp/0241269067"
          target="__blank"
          rel="noreferrer"
        >
          "Why We Sleep"{" "}
        </a>
        if you want to discover all the benefits it has according to science.
      </p>
      <h3>Intermittent Fasting</h3>
      <p>
        I've started fasting after reading Serge Faguet's articles who says the
        following on fasting: "Do you actually think you evolved to have an
        around-the-clock buffet? Do you think the hunter-gatherers ate 5 times a
        day?". It's highly important to consider the point he's making. Our
        genes thus our body are those of a Homo Sapiens, a specy that first
        evolved more than 300,000 years ago. We must comply with our internal
        programming to live a long & healthy life.
      </p>
      <p>
        In that context, fasting is approriate and has many benefits such as
        triggering
        <a
          href="https://en.wikipedia.org/wiki/Autophagy"
          target="__blank"
          rel="noreferrer"
        >
          Autophagy
        </a>
        which corresponds to the cleaning & renewal of our cells, reducing
        probabilities of various diseases, increasing intelligence and also
        productivity by saving time.
      </p>
      <h3>Exercise</h3>
      <p>
        Like fasting, exercising is a natural behavior for us Homo Sapiens
        Humans. Here are the main benefits of it:
      </p>
      <ul className="lifespan-exercise-list">
        <li>- Strenghten the heart </li>
        <li>- Keeps muscles and bones in shape </li>
        <li>- Boosts our mood (dopamine) </li>
        <li>- Good for new neurons creations and memory </li>
        <li>- Metabolic effects (hormones, insulin sensitivity) </li>
      </ul>

      <h3> My Longevity Mentors</h3>
      <ul>
        <li>Serge Faguet</li>
        <p>
          In first place on my "live longer" list comes Serge Faguet's advices.
          He's an entrepreneur & biohacker who completely changed my daily life
          thanks to his
          <a
            href="https://medium.com/@sergefaguet"
            target="__blank"
            rel="noreferrer"
          >
            Medium articles.
          </a>
          Optimization at every level is an obsession for him so it's no
          surprise he adopts the best habits to affect longevity.
        </p>
        <li>Peter Attia</li>
        <p>
          Serge Faguet's health is monitored by one of best longevity experts on
          Earth: Dr Peter Attia. He's responsible for many of the great insights
          Serge has written about so I recommend checking out{" "}
          <a
            href=" https://peterattiamd.com/"
            target="__blank"
            rel="noreferrer"
          >
            his website & podcast.
          </a>
        </p>
        <li>David Sinclair </li>
        <p>
          One of the world's most knowledgeable individuals on the subject of
          longevity. He's a biologist and professor at the Harvard Medical
          School and has studied aging all his life. It's thanks to scientists
          like him that we have a shot at curing aging.
        </p>
        <p>
          He recently released a book called{" "}
          <a
            href="https://www.amazon.com/Lifespan-Why-Age-Dont-Have-ebook/dp/B07N4C6LGR"
            target="__blank"
            rel="noreferrer"
          >
            Lifespan: Why We Age - and Why We Don't Have To"
          </a>{" "}
          that I plan on reading soon.
        </p>
        <li>Aubrey de Grey</li>
        <p>
          English author and biomedical gerontologist, he's a major figure in
          the transhumanism community for his belief that we might find ways to
          keep humans alive indefinitely. He's also one of the few that
          popularized the concept of{" "}
          <a href="https://en.wikipedia.org/wiki/Longevity_escape_velocity">
            Longevity Escape Velocity
          </a>{" "}
          which basically describes a situation where life expectancy increases
          faster than the time is passing.
        </p>
        <iframe
          title="Aubrey de Grey on defeating death"
          className="post__youtube-video"
          width="700"
          height="400"
          src="https://www.youtube.com/embed/fp8lFMkenoU"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <li>Singularity University</li>
        <p>
          To change your perception of the future, Singularity University is THE
          entity to listen to. The company, that got created by visionaries
          (Diamandis & Kurzweil), offers educational programs as well as
          incubation and consultancy services.
          <a
            href="https://www.youtube.com/user/singularityu"
            target="__blank"
            rel="noreferrer"
          >
            Their youtube channel
          </a>{" "}
          is a goldmine where you'll learn how great the future is going to be
          in various sectors such as transportation and in our case health.
        </p>
      </ul>
      <p className="post__last-sentence">
        I hope the article inspired you to improve your health in order to be
        around for a very long time on our planet (or elsewhere in the Solar
        system).
      </p>
    </div>
  </Layout>
)

export default extendLifespan
