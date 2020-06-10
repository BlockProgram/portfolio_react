import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import efficiencyImg from "../../images/efficiency.jpg"
import toDoImg from "../../images/to-do-list.png"

const achievingMore = () => (
  <Layout>
    <SEO title="Tech' Oriented" />
    <div className="post">
      <h1 className="post__title">Achieving More</h1>
      <h2 className="post__subtitle">
        Being productive simply means achieving your goals as fast as possible
      </h2>
      <a href="https://tedideas.files.wordpress.com/2020/05/final_08_glennharvey_2020_04_10_flow-state.jpg?w=750">
        <img
          className="post__main-img"
          src={efficiencyImg}
          alt="writer in a state of flow"
        />
      </a>

      <h3 className="post__summary achieve">
        In this article, I'm going over the best strategies I learned from top
        entrepreneurs, books and my own experience.
      </h3>

      <p>
        Productivity is rightfully a major topic covering all aspects of our
        lives. Because time is limited, we must maximize its utility.
      </p>

      <p>
        The most interesting lessons I've came across in my whole life are from
        <a href="https://medium.com/@sergefaguet">Serge Faguet</a>. A serial
        entrepreneur and biohacker who wrote several priceless articles on
        Medium the past few years. My favorite one is entitled
        <a href="https://medium.com/hackernoon/biohack-your-intelligence-now-or-become-obsolete-97cdd15e395f">
          "How to biohack your intelligence"
        </a>
        . This piece describes in rich detail how to become much "smarter" and
        thus effective each day.
      </p>

      <h3>
        Here are to me the most important habits he recommends for optimal
        performance:
      </h3>

      <ol>
        <li>
          <h4> Iterate over and over</h4>
          <p>Notice what you're not doing perfectly and improve. </p>
        </li>

        <li>
          <h4>Fix your sleep (7-8 hours)</h4>
          <p>More sleep = more energy, memory... = more productivity</p>
        </li>

        <li>
          <h4>
            Set goals on many time frames (daily, weekly, yearly, ultimate
            goals)
          </h4>
          <p>
            Doing so will help you to stay motivated for long periods of time
            and will give meaning to your daily tasks.
          </p>
        </li>

        <li>
          <h4>
            Cut off any distraction when you work, to get into a state of flow
          </h4>
        </li>
      </ol>

      <p>
        There are so many valuable lessons in his articles that I suggest you
        read it all to achieve greater levels of productivity.
      </p>

      <a href="https://images.frandroid.com/wp-content/uploads/2015/09/to-do_list.png">
        <img className="post__img" src={toDoImg} alt="to-do list Simpsons" />
      </a>

      <h3>
        Other than that, here are a few more tips coming from various sources:
      </h3>

      <ul>
        <li>
          <h4>Use a to-do list</h4>
          <p>
            I really like using to-do lists as well as reminders. It allows me
            to plan in advance, to prioritize tasks and to never forget
            anything. My go-to solution is
            <a href="https://www.pivotaltracker.com/dashboard">
              Pivotal Tracker
            </a>
            , an agile project management tool usually used for software
            development but it works fine for your daily tasks too!
          </p>
        </li>

        <li>
          <h4>Learn about the state of Flow</h4>
          <p>
            This is certainly the deepest and most fascinating concept that I'm
            studying recently. You're in a state of flow when you're so focused
            on what you're doing that you lose sense of time, of self and
            anything that might cloud your mind during the rest of the day. It
            happens when you're working on something challenging (particularly
            when your skills level is close to the challenge level) or when
            you're watching a cool movie for example.{" "}
          </p>
          <p>
            There is even more to the state of flow, it's a major component of
            happiness because you feel great during it. To learn more about this
            essential theory, you can watch{" "}
            <a href="https://www.ted.com/talks/mihaly_csikszentmihalyi_flow_the_secret_to_happiness">
              a TED talk by the man
            </a>{" "}
            who named the concept and carry on by reading his book{" "}
            <a href="https://www.amazon.com/Flow-Psychology-Experience-Perennial-Classics/dp/0061339202">
              "Flow: the psychology of optimal experience"
            </a>
            .
          </p>
        </li>

        <li>
          <h4>Use a pomodoro</h4>
          <p>
            You may be familiar with the{" "}
            <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
              pomodoro technique
            </a>
            , a way of organizing your work schedule by splitting it into
            blocks. For example, you may concentrate deeply on a task for 35
            minutes and then take a break of 5 minutes. It's a great way to stay
            on track if you're doing something that doesn't put you in a state
            of flow.
            <a href="https://domantasp.github.io/Pomotimer/">
              Here is the online pomotimer I'm using.
            </a>
          </p>
        </li>
      </ul>

      <p className="post__last-sentence">
        Those were my essentials to get more done in less time, happy working!
      </p>
    </div>
  </Layout>
)

export default achievingMore
