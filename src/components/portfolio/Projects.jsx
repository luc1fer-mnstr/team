import { PROJECTS } from "../../constants"
import { motion } from "motion/react"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      
      {/* Title Animation */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h1>
      
      <div>
        {PROJECTS.map((project, index) => (
          
          // Each Project Block Animation
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: index * 0.3 }} 
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            {/* Project Image Animation */}
            <div className="w-full lg:w-1/4">
              <motion.img 
                width={150} 
                height={150} 
                src={project.image} 
                alt={project.title}
                className="mb-6 rounded" 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }} 
              />
            </div>

            {/* Project Details */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Technologies Animation */}
              {project.technologies.map((tech, techIndex) => (
                <motion.span 
                  key={techIndex} 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.5, delay: index * 0.3 + techIndex * 0.1 }}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
