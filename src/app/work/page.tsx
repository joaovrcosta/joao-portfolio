'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    num: '01',
    category: 'front-end',
    title: 'Project1',
    description: '',
    stack: [{ name: 'HTML 5' }, { name: 'Css 3' }, { name: 'Typescript' }],
    image: '/',
  },
  {
    num: '01',
    category: 'front-end',
    title: 'Project1',
    description: '',
    stack: [{ name: 'HTML 5' }, { name: 'Css 3' }, { name: 'Typescript' }],
    image: '/',
  },
  {
    num: '01',
    category: 'front-end',
    title: 'Project1',
    description: '',
    stack: [{ name: 'HTML 5' }, { name: 'Css 3' }, { name: 'Typescript' }],
    image: '/',
  },
  {
    num: '01',
    category: 'front-end',
    title: 'Project1',
    description: '',
    stack: [{ name: 'HTML 5' }, { name: 'Css 3' }, { name: 'Typescript' }],
    image: '/',
  },
]

const WorkPage = () => {
  return (
    <motion.div>
      <div className="container mx-auto">
        <div className="flex justify-center items-start">
          <div>Projects</div>
        </div>
      </div>
    </motion.div>
  )
}

export default WorkPage
