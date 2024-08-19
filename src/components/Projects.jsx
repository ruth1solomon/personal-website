import React from 'react';
import {motion} from "framer-motion";



function Projects() {
  return (
    <div className='pb-4 border-b border-neutral-900'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-4xl text-center'>Projects</motion.h2> 


        <div className='flex flex-wrap mb-8 lg:justify-center'>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='w-full lg:w-1/4'>
          <img className='mb-6 rounded' width={150} height={150} src="hr2.png" alt='HRMS' />
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        className="w-full max-w-xl lg:w-3/4">
         <h6 className='mb-2 font-semibold'>Employee Managment System</h6>
         <p className='mb-4 text-neutral-400'>I developed a comprehensive employee management system utilizing Angular, React, and Node.js.  This system streamlined HR processes by providing a user-friendly interface for managing employee information, leave requests, performance reviews, and payroll.</p>
         <p className='px-2 py-1 mt-4 mr-2 text-sm font-medium rounded text-cyan-400 '>NODE JS , ANGULAR , TALWIND CSS</p>
        </motion.div>
       </div>
       <div className='flex flex-wrap mb-8 lg:justify-center'>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='w-full lg:w-1/4'>
          <img className='mb-6 rounded' width={150} height={150} src="Blockchain.png" alt='Block Chain Picture' />
        </motion.div>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        className="w-full max-w-xl lg:w-3/4">
         <h6 className='mb-2 font-semibold'>Block Chain Based Criminal Recording System </h6>
         <p className='mb-4 text-neutral-400'>I developed a senior project of
blockchain based criminal recording
system where criminals are recorded using blockchain technology.  
It's like a digital vault that's super secure and impossible to tamper with. 
 This would mean that police and prosecutors always have reliable information, and nobody can change it or cheat the system.This would help to fight corruption and make sure everyone is held accountable. </p>
         <p className='px-2 py-1 mt-4 mr-2 text-sm font-medium rounded text-cyan-400 '>REACT , NODE JS , GO ,HYPERLENGER</p>
        </motion.div>
       </div>
       <div className='flex flex-wrap mb-8 lg:justify-center'>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='w-full lg:w-1/4'>
          <img className='mb-6 rounded' width={150} height={150} src="portfolio pic.jfif" alt='Portfolio Picture' />
        </motion.div>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        className="w-full max-w-xl lg:w-3/4">
         <h6 className='mb-2 font-semibold'>Portfolio</h6>
         <p className='mb-4 text-neutral-400'>I design and develop personal website which is built to be fully responsive, meaning it adapts perfectly to any screen size.  Whether you're browsing on a giant desktop monitor or a tiny phone, the layout will adjust to give you the best possible experience.  I use modern web design techniques to ensure smooth scrolling, fast loading times, and a beautiful visual experience no matter where you are.</p>
         <p className='px-2 py-1 mt-4 mr-2 text-sm font-medium rounded text-cyan-400 '>REACT , ANGULAR , TALWIND CSS, HTML</p>
        </motion.div>
       </div>
       <div className='flex flex-wrap mb-8 lg:justify-center'>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='w-full lg:w-1/4'>
          <img className='mb-6 rounded' width={150} height={150} src="kids.jfif" alt='HRMS' />
        </motion.div>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        className="w-full max-w-xl lg:w-3/4">
         <h6 className='mb-2 font-semibold'>EthioTech Kids</h6>
         <p className='mb-4 text-neutral-400'>I'm building an online platform to teach kids how to code.  It's all about making coding fun and accessible, with interactive games, projects, and challenges designed for young learners.  We're making learning to code a blast for kids.
         We're using age-appropriate languages and visual tools to make coding concepts easy to understand.</p>
         <p className='px-2 py-1 mt-4 mr-2 text-sm font-medium rounded text-cyan-400 '>DJANGO , BOOTSTRAP ,REACT</p>
        </motion.div>
       </div>
    </div>
  )
}

export default Projects