import React from 'react'
import {services} from '../constants'

const Services = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 mb-10">
          We provide a wide range of IT solutions tailored to your needs.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-4 text-blue-500">{React.createElement(service.icon)}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
