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
    <div className="bg-primary h-full">
      <ParticlesContainer />
      <div className="w-full h-full">
        <div className="text-center flex flex-col justify-center items-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xxl:h1"
          >
            I&#39;m a{" "}
            <Typed
              style={{ color: "#df2935" }}
              strings={[
                "Software Engineer",
                "Full Stack Developer",
                "Quality Assurance Developer",
              ]}
              typeSpeed={50} // You can customize the typing speed if needed
              backSpeed={30} // You can customize the backspacing speed if needed
              loop
            />
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-center"
          >
            Expert in crafting scalable, robust, and intuitive software solutions that embody quality excellence.
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
    </div>
  );
};

export default Home;
