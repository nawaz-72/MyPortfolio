import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNode,
  FaGithub
} from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSequelize,
  SiPostman,
  SiJira
} from "react-icons/si";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend Development",
        icons: [
          <FaHtml5 key="html5" className="text-accent" />,
          <FaCss3 key="css3" className="text-accent" />,
          <FaJs key="js" className="text-accent" />,
          <FaReact key="react" className="text-accent" />,
          <SiNextdotjs key="nextjs" className="text-accent" />,
          <SiFramer key="framer" className="text-accent" />,
          <TbBrandTailwind key="tailwind" className="text-accent" />,
        ],
      },
      {
        title: "Backend Developemnt",
        icons: [
          <FaNode key="node" className="text-accent" />,
          <SiExpress key="express" className="text-accent" />,
          <SiMongodb key="mongodb" className="text-accent" />,
          <SiMysql key="sql" className="text-accent" />,
          <SiSequelize key="sequlize" className="text-accent" />,
          <SiPostman key="postman" className="text-accent" />,

        ],
      },
      {
        title: "Version Control",
        icons: [
          <FaGithub key="git" className="text-accent" />,
          <SiJira key="jira" className="text-accent" />,
        ],
      },
    ],
  },
  {
    title: "Expertise",
    info: [
      {
        title: "Software Enginnering",
        icons: [
          <p key="engineering" className="text-xs">Leveraging my degree from <span className="text-accent">COMSATS</span>, I apply systematic engineering principles to develop software that is <span className="text-accent">efficient</span>, <span className="text-accent">reliable</span>, and <span className="text-accent">scalable</span>.</p>
        ],
      },
      {
        title: "Full Stack Development",
        icons: [
          <p key="development" className="text-xs">With a strong command of both <span className="text-accent">fontend</span> and <span className="text-accent">backend</span> technologies, I create cohesive and <span className="text-accent">dynamic web applications</span> that provide seamless user experiences.</p>
        ],
      },
      {
        title: "Quality Assurance",
        icons: [
          <p key="qa" className="text-xs"> My meticulous <span className="text-accent">approach</span> to testing ensures that all software I deliver meets the  <span className="text-accent">highest standards of quality</span>, contributing to the overall success of the projects.</p>
        ],
      },
      {
        title: "Innovation and Problem-Solving",
        icons: [
          <p key="PS" className="text-xs">I am passionate about tackling <span className="text-accent">complex</span> challenges and <span className="text-accent">innovating</span> solutions that push the boundaries of web development.</p>
        ],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Bachelors",
        icons: [
          <div key="bachelors" className="flex flex-col -gap-4 text-sm">
            <p>Software Engineering</p>
            <p className="text-xs text-accent">2019-2023</p>
          </div>

        ],
      },
      {
        title: "Intermediate",
        icons: [
          <div key="inter" className="flex flex-col -gap-4 text-sm">
            <p>Computer Science</p>
            <p className="text-xs text-accent">2016-2018</p>
          </div>

        ],
      },
    ],
  },
  // ... other data
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Circles />
      {/* Avatar Image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 xxl:items-center xxl:justify-center -left-[380px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3 z-10"
          >
            Capitivating <span className="text-accent">stories</span> birth
            magnificent desgin.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0  mb-6 xl:mb-12  px-2  xl:px-0  z-10  xl:line-clamp-4 xxl:line-clamp-none"
          >
            Comsats alum and Software Engineer at Altaurux, I blend front-end creativity with back-end stability using technologies like Next.js, React, and Node.js. I&#39;m passionate about delivering seamless websites and eager for new challenges that fuel my growth in web development.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={10} /> +
                </div>
                <div className="text-xs uppercase leading-[1.4] max-w-[100px] tracking-[1px]">
                  Month of Experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={10} /> +
                </div>
                <div className="text-xs uppercase leading-[1.4] max-w-[100px] tracking-[1px]">
                  Satisfied Clients
                </div>
              </div>
              {/* Projects */}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={10} /> +
                </div>
                <div className="text-xs uppercase leading-[1.4] max-w-[100px] tracking-[1px]">
                  Completed Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[350px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8  mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    "text-accent scale-110  after:w-[100%] after:bg-accent after:transition-all after:duration-300 font-bold "
                    } cursor-pointer capitalize  xl:text-lg  relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col lg:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light leading-5 mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
