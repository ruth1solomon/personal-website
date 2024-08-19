import React from 'react';
import {motion} from "framer-motion";
import afri from "../img/afri.png";
import ethio from"../img/ethio.png";
import victory from "../img/victory.png";

function Experience() {
  return (
    <div className='pb-4 border-b border-neutral-900'>
       <motion.h2
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}
       className='my-20 text-4xl text-center'>Experience</motion.h2> 

       <div className='flex flex-wrap mb-8 lg:justify-center'>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='w-full lg:w-1/4'>
          <img src={afri} alt="Africom Logo" />
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}
        className="w-full max-w-xl lg:w-3/4">
         <h6 className='mb-2 font-semibold'>Role - Full Stack Developer </h6>
         <h6 className='mb-2 font-semibold'>Company - Africom Technologies </h6>
         <h6  className='mb-2 font-semibold'>Duration - 2021 -2022</h6>
         <p className='mb-4 text-neutral-400'>During my summer internship, I gained experience in
requirement gathering for a gym management system.
I conducted stakeholder interviews, analyzed existing
systems, and documented functional and nonfunctional requirements. This improved my
communication and analytical skills, emphasizing the
importance of accurately capturing requirements.</p>
<p className='px-2 py-1 mt-4 mr-2 text-sm font-medium rounded text-cyan-400 '>C# ,.NET , RESTAPI</p>
        </motion.div>
       </div>

       <div className='flex flex-wrap mb-8 lg:justify-center'>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='w-full lg:w-1/4'>
          <img src={ethio} alt="Ethiopian Airlines Logo" width={250} height={250}/>
        </motion.div>
        <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
         transition={{duration:1}}
        className="w-full max-w-xl lg:w-3/4">
         <h6 className='mb-2 font-semibold'>Role - Networking and IT Maintenance</h6>
         <h6 className='mb-2 font-semibold'>Company - Ethiopian Airlines </h6>
         <h6  className='mb-2 font-semibold'>Duration - 2022 -2023</h6>
         <p className='mb-4 text-neutral-400'>During my time at Ethiopian Airlines, I gained invaluable IT maintenance experience while building my networking skills.  It was a fast-paced environment where I was able to learn about different systems and troubleshoot problems.  I also had the opportunity to collaborate with a diverse team of professionals, which helped me develop my communication and teamwork abilities  specializing in Zoho system administration
and support. Assisted in managing and optimizing Zoho applications for efficient workflow and data management.</p>
<p className='px-2 py-1 mt-4 mr-2 text-sm font-medium rounded text-cyan-400 '>ZOHO , PYTHON , DJANGO</p>
        </motion.div>    
       </div>
       <div className='flex flex-wrap mb-8 lg:justify-center'>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='w-full lg:w-1/4'>
          <img src={victory} alt="Victory Water"  />
        </motion.div>
        <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
         transition={{duration:1}}
        className="w-full max-w-xl lg:w-3/4">
         <h6 className='mb-2 font-semibold'>Role - Graphics Designer , UI/UX Designer </h6>
         <h6 className='mb-2 font-semibold'>Company - Victory Water Ethiopia </h6>
         <h6  className='mb-2 font-semibold'>Duration - 2023 -2024</h6>
         <p className='mb-4 text-neutral-400'>At Victory Water Ethiopia, I had the opportunity to completely revamp their UI/UX design, including their logo and banner. I focused on creating a modern and engaging user experience that reflected their brand identity.  I was also involved in designing their website, mobile app, and marketing materials, ensuring a consistent and cohesive brand look and feel across all platforms.</p>
         <p className='px-2 py-1 mt-4 mr-2 text-sm font-medium rounded text-cyan-400 '>REACT ,NODEJS , ANGULAR </p>
        </motion.div>
       </div>
    </div>
  )
}

export default Experience