import React from 'react';
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import profilepic from "../assets/profile.jpg";

// Motion container variants for animations
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const HERO = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap items-center'>
        {/* Text Section */}
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className='pb-6 text-4xl lg:text-6xl font-thin tracking-tight lg:mt-16'
            >
              Keshav Chand
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent'
            >
            
            </motion.span>

            <motion.p
              variants={container(1)}
              initial='hidden'
              animate='visible'
              className='my-2 max-w-xl py-6 text-center lg:text-left'
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full lg:w-1/2 lg:pl-16'>
          <div className='flex justify-center lg:justify-end'>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilepic}
              alt='Keshav Chand'
              className='w-auto h-auto' // Keeping the image in its original form
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HERO;
