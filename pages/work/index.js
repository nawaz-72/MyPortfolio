import { RxSpeakerOff } from "react-icons/rx";

import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-screen bg-primary/30 py-36 flex items-center justify-center ">
      <Circles />
      <div className=" container mx-auto">
        <div className="flex flex-col  xl:flex-row gap-x-6 ">
          <div className="text-center flex xl:w-[40vw] flex-col lg:text-left mb-4">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h4 xl:mt-8"
            >
              My Work<span className="text-accent ">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem abc askjdliajd asdahsiadha dashd sadas.A sadasdjka asjhduadg
              jifjoidjf jjld
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
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
