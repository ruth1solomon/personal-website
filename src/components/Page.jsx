import React from 'react';
import { motion } from "framer-motion";

function Page() {
  return (
    <div className='pb-4 border-b border-neutral-900'> 
<motion.h2
whileInView={{opacity:1,y:0}}
initial={{opacity:0,y:-100}}
transition={{duration:1.5}}
className='my-20 text-4xl text-center'>About <span className='text-transparent bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text'>Me</span> </motion.h2>
<div className='flex flex-wrap'>
  <motion.div
  whileInView={{opacity:1,x:0}}
  initial={{opacity:0,x:-100}}
  transition={{duration:1}}
  className='w-full lg:w-1/2 lg:p-8'>
    <div className='flex items-center justify-center'>
      <img className='rounded-2xl' src=".\images\girl.jpeg" width={300} height={300} alt='About'/>
    </div>
  </motion.div>
  <motion.div
  whileInView={{opacity:1,x:0}}
  initial={{opacity:0,x:100}}
  transition={{duration:1}}
   className='w-full lg:w-1/2'>
    <div className='flex justify-center lg:justify-start'>
      <p className='max-w-xl py-6 my-2'>I'm a full-stack developer, well-versed in various technologies including React, Node.js, MongoDB, SQL, Django, Angular, and REST APIs.  I'm also a competitive programmer, proficient in Python and JavaScript.  When I'm not coding, you'll find me flexing my UI/UX and graphics design muscles.  I love creating beautiful and functional solutions that push the limits of what's possible.My goal is to contribute to a dynamic and innovative team where I can leverage my skills and collaborate with talented individuals to build cutting-edge applications.</p>

    </div>

    </motion.div>
</div>
  
    </div>
  )
}

export default Page