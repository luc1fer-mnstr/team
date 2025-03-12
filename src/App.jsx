import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './pages/Navbar';
import Footer from './pages/Footer'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className='text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_10%,#63e_100%)]"></div>
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
