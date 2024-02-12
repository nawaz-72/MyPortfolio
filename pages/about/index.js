import React,{useState} from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma" />, <SiAdobexd key="xd" />, <SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
  // ... other data
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles"
import {motion} from "framer-motion"
import { fadeIn } from "../../variants"

const About = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Circles/>
      {/* Avatar Image */}
      <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[370px]">
      <Avatar/>
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div>text</div>
        <div>about</div>
      </div>
    </div>
  );
};

export default About;
