import React from 'react';
import { motion } from "framer-motion";

const container =(delay)=>({
hidden:{x:100, opacity:0},
visible:
{
  x:0,
  opacity:1,
  transition:{duration:0.5, delay:delay}
}


})

function Name() {
  return (
    <div className='pb-4 border-b border-neutral-900 mb-36 '>
    <div className='flex flex-wrap'>

<div className='w-full lg:w-1/2 lg:p-8'>
<div className='flex justify-center '>
    <motion.img
    initial={{x:-100, opacity:0}}
    animate={{x:0, opacity:1}}
    transition={{duration:1,delay:1.2}}
     className='rounded-2xl ' src="good2.png" width={300}height={300} alt="Profile Picture" />
    
</div>

</div>

        <div className='w-full lg:w-1/2'>
        <div className='flex flex-col items-center lg:items-start '>
            <motion.h1 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
           variants={container(0)}
           initial="hidden"
           animate="visible"
              className='pb-6 text-5xl font-thin tracking-tight text-transparent lg:mt-16 lg:text-7xl bg-gradient-to-r from-cyan-100 via-cyan-300 to-cyan-400 bg-clip-text'>Ruth Solomon</motion.h1>
             <motion.span
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }}
  drag="x"
  dragConstraints={{ left: -100, right: 100 }}
  variants={container(0.5)}
  initial="hidden"
  animate="visible"
 className='text-3xl tracking-tight text-transparent bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-400 bg-clip-text'>Full Stack Developer</motion.span>
            <motion.p  
            variants={container(1)}
           initial="hidden"
           animate="visible" className='max-w-xl py-4 my-2 tracking-tighter fontlight'>I'm a diligent full-stack developer who
is truly in love with the art of coding.  I have a
wide range of experience in both frontend and back-end development, as well
as a keen eye for creating intuitive and
visually appealing user interfaces. My
expertise spans across various
languages and frameworks like HTML,
CSS, JavaScript, React, Angular,
Python, Django and Node.js.My goal is to contribute to a dynamic and innovative team where I can leverage my skills and collaborate with talented individuals to build cutting-edge applications.</motion.p>

        </div>
        
        </div>
    </div>
    
    </div>
  )
}

export default Name