import React from 'react'

import { MotionSection } from '../motion/MotionSection'
import SkillIcon from './SkillIcon'

import { DiCss3 } from 'react-icons/di'
import { RiHtml5Fill, RiJavascriptLine, RiReactjsLine } from 'react-icons/ri'
import { SiStyledcomponents, SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'

interface SkillSectionProps {
  title: string
}


export default function SkillSection({ title }: SkillSectionProps) {

  const skills = [
    {
      description:'ReactJS',
      redirectUrl:'https://react.dev/',
      icon: <RiReactjsLine size={180} />
    },
    {
      description:'NextJS',
      redirectUrl:'https://nextjs.org/',
      icon: <TbBrandNextjs size={180} />
    },
    {
      description:'TypeScript',
      redirectUrl:'https://www.typescriptlang.org/',
      icon: <TbBrandTypescript size={180} />
    },
    {
      description:'JavaScript',
      redirectUrl:'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      icon: <RiJavascriptLine size={200} />
    },
    {
      description:'TailwindCSS',
      redirectUrl:'https://tailwindcss.com/',
      icon: <SiTailwindcss size={180} />
    },
    {
      description:'Styled Components',
      redirectUrl:'https://styled-components.com/',
      icon: <SiStyledcomponents size={180} />
    },
    {
      description:'HTML5',
      redirectUrl:'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
      icon: <RiHtml5Fill size={180} />
    },
    {
      description:'CSS3',
      redirectUrl:'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
      icon: <DiCss3 size={180} />
    }
  ]

  return (
    <MotionSection
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: .3 }}
      className='mt-52'
      id='skills-section'
    >
      <h2 className='mb-12 text-4xl font-bold text-black text-center'>
        {title}
      </h2>

      <div className='grid grid-cols-2 gap-8 max-w-[1080px] md:grid-cols-4 mx-auto'>
        {skills.map((skill, i) => {
          return (
            <SkillIcon
              key={skill.description}
              description={skill.description}
              redirectUrl={skill.redirectUrl}
              animationDelay={0.8 + (0.2 * i)}
            >
              {skill.icon}
            </SkillIcon>
          )
        })}
      </div>
    </MotionSection>
  )
}
