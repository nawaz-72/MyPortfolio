import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:block xl:max-w-none">
    <Image src={'/profilePhoto-removebg-preview.png'} width={737} height={678} alt="avatar"
    className="translate-z-0 w-full h-full"></Image>
  </div>;
};

export default Avatar;
