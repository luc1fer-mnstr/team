import React from 'react'
import aboutImg from "../../assets/about.jpg"
import { ABOUT_TEXT } from '../../constants'
import { motion } from "motion/react"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      
      {/* Title Animation */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className='my-14 text-center text-4xl'
      >
        About <span className='text-neutral-500'>Me</span>
      </motion.h1>

      <div className='flex flex-wrap'>
        
        {/* Left Section (Image) */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className="flex items-center justify-center">
            <motion.img 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }} 
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }} 
              transition={{ duration: 1, delay: 0.5 }}
              width="500px" 
              className='rounded-2xl' 
              src={aboutImg} 
              alt="about" 
            />
          </div>
        </div>

        {/* Right Section (Text) */}
        <div className='w-full lg:w-1/2'>
          <div className="flex justify-center lg:justify-start">
            <motion.p 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1, delay: 0.7 }}
              className='my-2 max-w-xl py-6'
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
