import Link from "next/link";

// icons
import {RiYoutubeFill, RiInstagramFill, RiFacebookFill, RiDiscordFill, RiGithubFill, RiLinkedinFill} from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center gap-x-5 sm:text-base md:text-lg ">
    <Link href={''} className="hover:text-accent transition-all hover:motion-safe:animate-spin duration-300">
      <RiYoutubeFill/>
    </Link>
    <Link href={''} className="hover:text-accent transition-all hover:motion-safe:animate-spin duration-300  ">
      <RiInstagramFill/>
    </Link>
    <Link href={''} className="hover:text-accent transition-all hover:motion-safe:animate-spin duration-300">
      <RiFacebookFill/>
    </Link>
    <Link href={''} className="hover:text-accent transition-all hover:motion-safe:animate-spin duration-300">
      <RiDiscordFill/>
    </Link>
    <Link href={''} className="hover:text-accent transition-all hover:motion-safe:animate-spin duration-300">
      <RiGithubFill/>
    </Link>
    <Link href={''} className="hover:text-accent transition-all hover:motion-safe:animate-spin duration-300">
      <RiLinkedinFill/>
    </Link>
  </div>;
};

export default Socials;
