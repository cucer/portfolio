'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Development</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {' '}
              the best{' '}
            </span>
            coding experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a full-stack developer with experience in website, web app,
          and cloud development.
        </motion.p>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md text-white max-w-[600px]"
        >
          Please check out my own SaaS product{' '}
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {' '}
            <a href="https://www.jectask.com" target="_blank">
              Jectask
            </a>{' '}
          </span> */}
        </motion.p>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md text-white max-w-[600px]"
        >
          <a href="https://www.jectask.com" target="_blank">
            <Image
              src="./jectask_home.png"
              alt="logo"
              width={150}
              height={150}
              className="cursor-pointer hover:animate-slowspin"
            />
          </a>
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="./mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
