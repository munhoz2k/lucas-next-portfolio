import React from 'react'
import ProjectCard from './ProjectCard'
import { MotionSection } from '../motion/MotionSection'

interface ProjectsSectionProps {
  title: string
  ignitersDesc: string
  pizzaShopDesc: string
  githubBlogDesc: string
  santoCafeDesc: string
  dtMoneyDesc: string
}

export default function ProjectsSection({
  title,
  ignitersDesc,
  pizzaShopDesc,
  githubBlogDesc,
  santoCafeDesc,
  dtMoneyDesc
}: ProjectsSectionProps) {

  const projectsData = [
    {
      title: "Igniters",
      description: ignitersDesc,
      image: '/images/projects/igniters-page.png',
      github: 'https://github.com/munhoz2k/igniters',
      host: {
        online: true,
        pageUrl: 'https://igniters.vercel.app/'
      }
    },
    {
      title: "Pizza Shop",
      description: pizzaShopDesc,
      image: '/images/projects/pizza-shop-page.png',
      github: 'https://github.com/munhoz2k/pizza-shop',
      host: {
        online: false,
        pageUrl: ''
      }
    },
    {
      title: "Github Blog",
      description: githubBlogDesc,
      image: '/images/projects/github-blog.png',
      github: 'https://github.com/munhoz2k/github-blog',
      host: {
        online: false,
        pageUrl: ''
      }
    },
    {
      title: "Santo Cafe",
      description: santoCafeDesc,
      image: '/images/projects/santo-cafe-page.png',
      github: 'https://github.com/munhoz2k/santo-cafe',
      host: {
        online: false,
        pageUrl: ''
      }
    },
    {
      title: "DT Money",
      description: dtMoneyDesc,
      image: '/images/projects/dt-money-page.png',
      github: 'https://github.com/munhoz2k/dt-money',
      host: {
        online: false,
        pageUrl: ''
      }
    },
  ]

  return (
    <MotionSection
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: .1 }}
      className='md:mt-52 mt-36'
      id='projects-section'
    >
      <h1
        className='mb-16 text-center font-bold text-4xl text-black'
      >
        {title}
      </h1>

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
    </MotionSection>
  )
}