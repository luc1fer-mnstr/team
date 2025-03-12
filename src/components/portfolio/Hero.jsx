import React from 'react'
import { HERO_CONTENT } from "../../constants"
import lucifer from '../../assets/lucifer.png'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-14'>
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            
            {/* Name Animation */}
            <motion.h1 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
              className='pb-14 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl lg:ml-14'
            >
              Lucifer
            </motion.h1>

            {/* Title Animation */}
            <motion.span 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent lg:ml-14"
            >
              Full Stack Developer
            </motion.span>

            {/* Description Animation */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.5 }}
              className='my-2 max-w-xl py-6 tracking-tighter lg:ml-14'
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section (Profile Image) */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className="flex justify-center">
            
            {/* Profile Image Animation */}
            <motion.img 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }} 
              animate={{ opacity: 1, scale: 1, rotate: 0 }} 
              transition={{ duration: 1, delay: 0.7 }}
              width={400}
              height={350}
              src={lucifer} 
              alt="lucifer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
