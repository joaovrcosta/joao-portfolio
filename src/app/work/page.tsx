'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { IoIosArrowForward } from 'react-icons/io'
import Image from 'next/image'
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa'
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi'
import { RiTailwindCssFill } from 'react-icons/ri'
import {
  SiRadixui,
  SiShadcnui,
  SiNextdotjs,
  SiStyledcomponents,
} from 'react-icons/si'

const projects = [
  {
    num: '01',
    category: 'front-end',
    title: 'FurniShop',
    description: '',
    stacks: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'NextJS', icon: <SiNextdotjs /> },
      { name: 'Styled-component', icon: <SiStyledcomponents size={20} /> },
      { name: 'Css', icon: <FaCss3 /> },
      { name: 'Typescript', icon: <BiLogoTypescript /> },
      { name: 'Javascript', icon: <BiLogoJavascript /> },
      { name: 'ReactJS', icon: <FaReact /> },
      { name: 'Talwind', icon: <RiTailwindCssFill /> },
      { name: 'Radix', icon: <SiRadixui /> },
      { name: 'Shadcnui', icon: <SiShadcnui /> },
    ],
    image: '/assets/work/thumb1.png',
    url: '/',
  },
  {
    num: '01',
    category: 'front-end',
    title: 'Project2',
    description: '',
    stacks: [{ name: 'HTML 5' }, { name: 'Css 3' }, { name: 'Typescript' }],
    image: '/assets/work/thumb2.png',
    url: '/',
  },
  {
    num: '01',
    category: 'front-end',
    title: 'Alina Lee',
    description: '',
    stacks: [
      { name: 'HTML 5', icon: <FaHtml5 /> },
      { name: 'Css 3' },
      { name: 'Typescript' },
    ],
    image: '/assets/work/thumb3.png',
    url: '/',
  },
  {
    num: '01',
    category: 'front-end',
    title: 'Project4',
    description: '',
    stacks: [{ name: 'HTML 5' }, { name: 'Css 3' }, { name: 'Typescript' }],
    image: '/assets/work/thumb3.png',
    url: '/',
  },
]

const WorkPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-center items-start">
          <ul className="flex flex-col gap-10 mb-20">
            {projects.map((item, index) => {
              return (
                <li
                  key={index}
                  className="glass rounded-lg border border-slate-500 hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center sm:flex-col">
                    <Image
                      src={item.image}
                      width={480}
                      height={240}
                      alt=""
                      className="rounded-tl-lg"
                    />
                    <div className="p-8">
                      <h3 className="text-3xl">{item.title}</h3>
                    </div>
                  </div>
                  {/* footer */}
                  <div className="flex items-center justify-between w-full">
                    <div className="flex gap-2 p-4">
                      {item.stacks.map((item, index) => {
                        return <div key={index}>{item.icon}</div>
                      })}
                    </div>
                    <div className="flex items-end">
                      <Link
                        href={item.url}
                        className="p-4 gap-1 rounded-br-lg rounded-tl-lg hover:bg-accent hover:text-primary hover:transition-all hover:shadow-lg text-right flex justify-center items-center"
                      >
                        See
                        <IoIosArrowForward />
                      </Link>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default WorkPage
