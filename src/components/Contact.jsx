import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import { motion } from 'framer-motion';

const iconvariants=(duration)=>({
  initial:{y:-10},
  animate:{
      y:[10,-10],
  transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
  }
}
})
function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
        <div
        
        className="text-center tracking-tighter">
            <motion.p
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className='my-4'>Addis Ababa , Ethiopia</motion.p>
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className='my-4'>+251 935974321</motion.p>
            <a href="#" className='border-b'>ruthwoldesemait@gmail.com</a>
        </div>
        <div className='flex flex-wrap gap-4 my-5 items-center justify-center text-2xl'>
            <motion.div variants={iconvariants(2.5)}
        initial="initial"
        animate="animate"><FaLinkedin className='text-blue-500'/></motion.div>
           <motion.div variants={iconvariants(4)}
        initial="initial"
        animate="animate"> <FaGithub/></motion.div>
           <motion.div 
           variants={iconvariants(1.5)}
        initial="initial"
        animate="animate"> <FaInstagram className='text-pink-600 '/></motion.div>
           <motion.div
         variants={iconvariants(6)}
        initial="initial"
        animate="animate"> <FaTwitter className='text-blue-600'/></motion.div>


        </div>
    </div>
  )
}

export default Contact