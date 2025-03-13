import { useState } from 'react';
import logo from '../assets/logo.png'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#3b3460] text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className='text-2xl font-bold'>
              <img width={200} height={100} src={logo} alt="logo" />
          </a>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-[#F4D35E]">Home</Link>
          <Link to="/services" className="hover:text-[#F4D35E]">Services</Link>
          <Link to="/members" className="hover:text-[#F4D35E]">Members</Link>
          <Link to="/contact" className="hover:text-[#F4D35E]">Contact</Link>
        </div>

        <button className="md:hidden text-white text-3xl mr-6"onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaXmark /> : <IoReorderThreeOutline />}
        </button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden ml-6 py-4 space-y-4`}>
        <Link to="/" className="block text-white hover:text-[#F4D35E]">Home</Link>
        <Link to="/services" className="block text-white hover:text-[#F4D35E]">Services</Link>
        <Link to="/members" className="block text-white hover:text-[#F4D35E]">Members</Link>
        <Link to="/contact" className="block text-white hover:text-[#F4D35E]">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
