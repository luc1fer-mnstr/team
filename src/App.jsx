import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './pages/Navbar';
import Footer from './pages/Footer'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className='text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
      </div>
      
      <Router>
          <Navbar />
          <AppRoutes />
          <Footer />
      </Router>
      
    </div>
  )
}

export default App
