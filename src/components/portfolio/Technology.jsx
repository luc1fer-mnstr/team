import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNode } from 'react-icons/fa6'
import { BiLogoPostgresql } from 'react-icons/bi'
import { motion } from 'framer-motion'

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} // Scales between 1 and 1.1 continuously
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut", 
            delay: 0 // No delay for the first icon
          }}
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
            <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut", 
            delay: 0.2 // Delay added to the second icon
          }}
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
            <TbBrandNextjs className='text-7xl' />
        </motion.div>
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut", 
            delay: 0.4 // Delay added to the third icon
          }}
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
            <SiMongodb className='text-7xl text-green-500' />
        </motion.div>
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut", 
            delay: 0.6 // Delay added to the fourth icon
          }}
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
            <DiRedis className='text-7xl text-red-700' />
        </motion.div>
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut", 
            delay: 0.8 // Delay added to the fifth icon
          }}
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
            <FaNode className='text-7xl text-green-500' />
        </motion.div>
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut", 
            delay: 1 // Delay added to the sixth icon
          }}
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
            <BiLogoPostgresql className='text-7xl text-sky-700' />
        </motion.div>
        
      </div>
    </div>
  )
}

export default Technology
