import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../variants";
import Typed from "react-typed";
import ReactHtmlParser from "react-html-parser";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r  frpm-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center items-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xxl:h1"
          >
          I am a {' '}
            <Typed
            style={{color: '#F13024'}}
              strings={[
                'Software Engineer',
                'Full Stack Developer',
                'Unit Tester',
              ]}
              typeSpeed={50} // You can customize the typing speed if needed
              backSpeed={30} // You can customize the backspacing speed if needed
              loop
            />
            {/* Transforming Ideas <br />
            Into <span className="text-accent">Digital Reality</span> */}
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            write your compreshive description who you are what your are doing
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:block"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
        <div className="bg-none  w-[80%] h-full xxl:h-[70vh] absolute mix-blend-color-dodge translate-z-0 right-0 xxl:-right-[9%] xxl:bottom-0"></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[6%] xl:right-0"
        >
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
