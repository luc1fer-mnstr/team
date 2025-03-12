import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-purple-900">
        <div className="max-w-2xl px-6">
            <h1 className="text-4xl sm:text-5xl font-bold">Empowering Businesses with Smart IT Solutions</h1>
            <p className="mt-4 text-lg opacity-90">We provide expert solutions in web development, software, networking, hardware repairs, and IT training. Our skilled team of 10+ professionals is ready to help you.</p>
            <a href="#services" className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium px-6 py-3 rounded-lg transition">
                Explore Our Services
            </a>
        </div>
    </div>
  )
}

export default Hero
