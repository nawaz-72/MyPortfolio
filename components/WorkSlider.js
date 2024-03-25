// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Theta Vibes",
          path: "/check2.jpg",
        },
        {
          title: "title",
          path: "/check2.jpg",
        },
        {
          title: "title",
          path: "/check2.jpg",
        },
        {
          title: "title",
          path: "/check2.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/check2.jpg",
        },
        {
          title: "Theta Vibes",
          path: "/check2.jpg",
        },
        {
          title: "title",
          path: "/check2.jpg",
        },
        {
          title: "title",
          path: "/check2.jpg",
        },
      ],
    },
  ],
};

// icons
import { BsArrowRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[300px] md:h-[280px] lg:h-[360px] xl:h-[110%] "
    >
      {workSlides.slides.map((slide, itemIndex) => {
        return (
          <SwiperSlide key={itemIndex}>
            <div className="grid grid-cols-1 grid-rows-1  lg:grid-cols-2 lg:grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                    <Image className="w-full object-fill" src={image.path} width={300} height={300} alt="projectPic" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e92323] to-[#360abb] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[8px] lg:text-xs tracking-[0.2ch]">
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all delay-150 duration-300">
                            PROJECT
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all delay-200 duration-300 ">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
