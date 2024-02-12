import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return(
  <header className="absolute z-30 w-full flex items-center justify-start px-16 xl:px-0 h-[90px]">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
    {/* Logo Image */}
      <Link href={"/"} rel="preload">
        <Image
          src={"/nawazLogo.png"}
          className="w-[200px] sm:w-[250px]lg:[300px] xl:w-full hover:animate-pulse duration-75"
          width={220}
          height={40}
          alt=""
          priority={true}
        ></Image>
      </Link>
      {/* Socials */}
      <Socials/>
    </div>
  </div>
</header>
)  
};

export default Header;
