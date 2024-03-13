import Link from "next/link";

// icons
import {RiYoutubeFill, RiInstagramFill, RiFacebookFill, RiDiscordFill, RiGithubFill, RiLinkedinFill} from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center gap-x-5 sm:text-base md:text-lg ">
    <Link href={'https://www.instagram.com/nawaz_s_6/'} className="hover:text-accent transition-all hover:motion-safe:animate-spin duration-300  ">
      <RiInstagramFill/>
    </Link>
    <Link href={'https://www.facebook.com/profile.php?id=100004299543880'} className="hover:text-accent transition-all hover:motion-safe:animate-spin duration-300">
      <RiFacebookFill/>
    </Link>
    <Link href={'https://discord.com/users/760921076502364190'} className="hover:text-accent transition-all hover:motion-safe:animate-spin duration-300">
      <RiDiscordFill/>
    </Link>
    <Link href={'https://github.com/nawaz-72'} className="hover:text-accent transition-all hover:motion-safe:animate-spin duration-300">
      <RiGithubFill/>
    </Link>
    <Link href={'https://www.linkedin.com/in/muhammad-nawaz-ul-hassan-1779831a7/'} className="hover:text-accent transition-all hover:motion-safe:animate-spin duration-300">
      <RiLinkedinFill/>
    </Link>
  </div>;
};

export default Socials;
