import React from 'react';
import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {SiMongodb} from "react-icons/si";
import {BiLogoDjango} from "react-icons/bi";
import {FaNodeJs} from "react-icons/fa";
import {IoLogoAngular} from "react-icons/io";
import { animate, motion } from "framer-motion";

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

function Technology() {
  return (
    <div className='pb-24 border-b border-neutral-800'>
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-4xl text-center'>Technology</motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
         className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconvariants(2.5)}
            initial="initial"
            animate="animate"
            className='p-4 border-4 rounded-2xl border-neutral-800'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
             variants={iconvariants(3)}
             initial="initial"
             animate="animate"
            className='p-4 border-4 rounded-2xl border-neutral-800'>
                <FaNodeJs className='text-green-500 text-7xl'/>
            </motion.div>
            <motion.div
            variants={iconvariants(5)}
             initial="initial"
             animate="animate" 
             className='p-4 border-4 rounded-2xl border-neutral-800'>
                <SiMongodb className='text-green-500 text-7xl'/>
            </motion.div>
            <motion.div 
            variants={iconvariants(2)}
            initial="initial"
            animate="animate"
            className='p-4 border-4 rounded-2xl border-neutral-800'>
                <TbBrandNextjs className='text-7xl'/>
            </motion.div>
            <motion.div 
            variants={iconvariants(6)}
            initial="initial"
            animate="animate"
            className='p-4 border-4 rounded-2xl border-neutral-800'>
                <IoLogoAngular className='text-red-500 text-7xl'/>
            </motion.div>
            <motion.div
            variants={iconvariants(4)}
            initial="initial"
            animate="animate"
            className='p-4 border-4 rounded-2xl border-neutral-800'>
                <BiLogoDjango className='text-white text-7xl'/>
            </motion.div>
        </motion.div>
        </div>
  )
}

export default Technology