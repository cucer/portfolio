'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';
import ProjectCard from '../sub/ProjectCard';
import SlideCard from '../sub/SlideCard';

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      {/* JECTASK */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Product
      </h1>

      <Image
        src="./jectask_home.png"
        alt="logo"
        width={200}
        height={200}
        className="cursor-pointer hover:animate-slowspin"
      />

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[20px] text-white font-medium mt-[10px] text-center mb-[20px]"
      >
        Jectask brings all your ideas, projects and tasks together easily. You
        can turn every idea into a success project!
      </motion.div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <SlideCard src="./jectask_dashhboard.png" title="Dashboard" />
        <SlideCard src="./jectask_projects.png" title="Projects" />
        <SlideCard src="./jectask_tasks.png" title="Tasks" />
        <SlideCard src="./jectask_notes.png" title="Notes" />
        <SlideCard src="./jectask_calendar.png" title="Calendar" />
        <SlideCard src="./jectask_help.png" title="Help" />
      </div>

      {/*  PROJECTS */}
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-40 pb-10">
        Just For Fun
      </h1>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[20px] text-white font-medium  text-center mb-[20px]"
      >
        Welcome to the Fun
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {' '}
          GitHub{' '}
        </span>
        Repository! This repository contains a collection of fun projects.
      </motion.div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard src="./yachting.png" title="Uzel Yachting" />
        <ProjectCard src="./djshop.png" title="Dj Shop" />
        <ProjectCard src="./covid.png" title="Covid Tracker" />
        <ProjectCard src="./restoran.png" title="Restoran Haftası" />
        <ProjectCard src="./yesim.png" title="Artist Portfolio" />
        <ProjectCard src="./circle.png" title="Funny Circles" />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 pt-5">
        <ProjectCard src="./spacex.png" title="SpaceX Launches" />
        <ProjectCard src="./packagesizer.png" title="Package Sizer" />
        <ProjectCard src="./song.png" title="Song Searcher" />
        <ProjectCard src="./metrics.png" title="Metrics" />
        <ProjectCard src="./djangular.png" title="Dj Equipments" />
        <ProjectCard src="./github.png" title="GitHub Finder" />
      </div>
    </div>
  );
};

export default Projects;
