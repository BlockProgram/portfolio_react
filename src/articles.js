import technologyImg from "./images/ai-human.jpeg"
import efficiencyImg from "./images/efficiency.jpg"
import longevityImg from "./images/human-evolution.jpeg"

const articlesData = {
  article1: {
    id: "art-1",
    title: "Tech' Oriented",
    subtitle: "Technology aka Humanity's greatest inventions",
    category: "Technology",
    image: { technologyImg },
    link: "interests/tech-oriented",
  },
  article2: {
    id: "art-2",
    title: "Achieving More",
    subtitle:
      "Being productive simply means achieving your goals as fast as possible",
    category: "Productivity",
    image: { efficiencyImg },
    link: "interests/achieving-more",
  },
  article3: {
    id: "art-3",
    title: "Extend Your Lifespan",
    subtitle: "Maximizing our stay on Earth",
    category: "Longevity",
    image: { longevityImg },
    link: "interests/extend-lifespan",
  },
}

export default articlesData
