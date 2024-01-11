import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="mix-blend-color-dodge absolute left-0 top-0 z-10 w-[200px] xl:w-[400px] opacity-50">
      <Image
        src="/top-left-img.png"
        width={400}
        height={400}
        alt="top left image"
      />
    </div>
  );
};

export default TopLeftImg;
