import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    title: "Igniters",
    description: "NextJS t-shirt e-commerce, integrated with Stripe payment API",
    image: '/images/projects/igniters-page.png',
    github: 'https://github.com/munhoz2k/igniters',
    host: {
      online: true,
      pageUrl: 'https://igniters.vercel.app/'
    }
  },
  {
    title: "Pizza Shop",
    description: "React page for restaurants delivery management",
    image: '/images/projects/pizza-shop-page.png',
    github: 'https://github.com/munhoz2k/pizza-shop',
    host: {
      online: false,
      pageUrl: ''
    }
  },
  {
    title: "Github Blog",
    description: "React blog to visualize all your GitHub issues, integrated with GitHub API",
    image: '/images/projects/github-blog.png',
    github: 'https://github.com/munhoz2k/github-blog',
    host: {
      online: false,
      pageUrl: ''
    }
  },
  {
    title: "Santo Cafe",
    description: "React page for coffe delivery",
    image: '/images/projects/santo-cafe-page.png',
    github: 'https://github.com/munhoz2k/santo-cafe',
    host: {
      online: false,
      pageUrl: ''
    }
  },
  {
    title: "DT Money",
    description: "React page for restaurants delivery management",
    image: '/images/projects/dt-money-page.png',
    github: 'https://github.com/munhoz2k/dt-money',
    host: {
      online: false,
      pageUrl: ''
    }
  },
]

export default function ProjectsSection() {
  return (
    <div className='mt-48'>
      <h2
        className='mb-16 text-center font-bold text-4xl text-black'
      >
        My Projects
      </h2>

      <div
        className='grid lg:grid-cols-2 gap-16'
      >
        {projectsData.map(({title, description, image, github, host: { online, pageUrl }}, i) => {
          return (
            <ProjectCard 
              key={i}
              title={title}
              description={description}
              imgUrl={image}
              githubUrl={github}
              host={{ online, pageUrl }}
            />
          )
        })}
      </div>
    </div>
  )
}