'use client'

import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const about = {
  title: 'About me',
  description: 'Lore',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'João Victor',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+11) 95827 4220',
    },
    {
      fieldName: 'Experience',
      fieldValue: '6+ Years',
    },
    {
      fieldName: 'E-mail',
      fieldValue: 'joaovr.costa@gmail.com',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Portuguese, Spanish',
    },
  ],
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    'Aqui se encontra experiencias que tive ao longo de todo meu trajeto na programação',
  items: [
    {
      company: 'ConverteMe Pagamentos',
      position: 'Front-end Engineer',
      duration: 'Mai/2023 - Present',
    },
    {
      company: 'Activision',
      position: 'Full Stack Engineer',
      duration: 'Out/2023 - Jan/2024',
    },
    {
      company: 'Proiot',
      position: 'Full Stack Engineer',
      duration: 'Abr/2022- Mai/2023',
    },
    {
      company: 'Mercado Livre',
      position: 'Full Stack Developer',
      duration: '2022- Present',
    },
    {
      company: 'Fatec',
      position: 'Full Stack Engineer',
      duration: 'Abr/2022- Mai/2023',
    },
    {
      company: 'Freelancer',
      position: 'Full Stack Developer',
      duration: '2022- Present',
    },
  ],
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'Minha educação',
  items: [
    {
      institution: 'Name',
      degree: 'Front-end Track',
      duration: '2023',
    },
    {
      institution: 'Name',
      degree: 'Front-end Track',
      duration: '2023',
    },
    {
      institution: 'Name',
      degree: 'Front-end Track',
      duration: '2023',
    },
  ],
}

const skills = {
  title: 'My Skills',
  description: '',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
    {
      icon: <FaReact />,
      name: 'ReactJS',
    },
    {
      icon: <SiNextdotjs />,
      name: 'NextJS',
    },
    {
      icon: <SiTailwindcss />,
      name: 'React',
    },
  ],
}

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-start justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[16px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <div className="relative overflow-hidden">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-2 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/6">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[16px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <div className="relative overflow-hidden">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-2 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/6">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] t">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex item-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default ResumePage
