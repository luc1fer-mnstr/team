import { EXPERIENCES } from "../../constants"
import { motion } from "motion/react"

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      
      {/* Title Animation */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          
          // Each Experience Block Animation
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: index * 0.3 }} 
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            {/* Year Section */}
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>

            {/* Role, Company, Description, Technologies */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role}
                <span className="text-sm text-purple-200"> - {experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>

              {/* Technologies Animation */}
              {experience.technologies.map((tech, techIndex) => (
                <motion.span 
                  key={techIndex} 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.5, delay: index * 0.3 + techIndex * 0.1 }}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
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

export default Experience
