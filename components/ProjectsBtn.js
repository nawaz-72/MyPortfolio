import Image from "next/image";
import Link from "next/link";
import {HiArrowRight} from 'react-icons/hi2'


const ProjectsBtn = () => {
  return <div className="mx-auto x:mx-0">
    <Link href={'/work'}
    className="relative w-[145px] h-[145px] md:w-[185px] md:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
      <Image
      src={'/rounded-text.png'}
      width={141}
      height={148}
      alt="project btn"
      className="animate-spin-slow w-full h-full max-w-[120px] max-h-[120px] md:max-w-[141px] md:max-h-[148px]">
      </Image>
      <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"></HiArrowRight>
    </Link>
  </div>;
};

export default ProjectsBtn;
