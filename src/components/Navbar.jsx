import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
function Navbar() {
  return (
    <div>
        
    <nav className='flex items-center justify-between py-6 '>
        <div className="flex items-center flex-shrink-0">
            <img className='mx-2 ' src=".\images\logo1.png" width={150}height={150} alt="logo" />
            
        </div>
        <div className='flex items-center justify-center gap-4 m-8 text-2xl'>
        <FaLinkedin className='text-blue-400'/>
            <FaGithub/>
            <FaInstagram className='text-pink-400 '/>
            <FaTwitter className='text-blue-400'/>
        </div>

    </nav>
    </div>
    
  )
}

export default Navbar