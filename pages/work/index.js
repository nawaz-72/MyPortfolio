import { RxSpeakerOff } from "react-icons/rx";

import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-screen bg-primary py-36 flex items-center justify-center ">
      <Circles />
      <div className=" container mx-auto ">
        <div className="flex flex-col  xl:flex-row gap-x-6 md:gap-x-2 lg:gap-x-6 ">
          <div className="text-center flex xl:w-[35vw] flex-col lg:text-left  mb-4 md:mb-2 lg:mb-4">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h4 xl:mt-8 !mb-2"
            >
              My Work<span className="text-accent ">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 md:mb-2 lg:mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              With a keen eye for detail and a passion for code, I engineer seamless software solutions that prioritize user experience and performance
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-[70%] md:max-w-[50%] mx-auto lg:max-w-[35%]  xl:max-w-[50%] xxl:max-w-[50%] "
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
