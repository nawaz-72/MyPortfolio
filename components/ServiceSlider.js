// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Software',
    description: 'End-to-end software development services from requirement analysis to deployment and support.',
  },
  {
    icon: <RxPencil2 />,
    title: 'QA',
    description: 'Comprehensive testing services to ensure software reliability, performance, and user satisfaction.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Custom website design and development, including e-commerce, responsive design, and maintenance.',
  },
  {
    icon: <RxReader />,
    title: 'Consultation',
    description: ' Expert advice on software architecture, technology stack, and best practices in web development.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Maximize your site’s search engine ranking with our SEO services, crafted for impactful online engagement.',
  },
];

import {Swiper, SwiperSlide} from "swiper/react"
import {FreeMode, Pagination} from "swiper"

import 'swiper/css'
import "swiper/css/free-mode"
import "swiper/css/pagination"



const ServiceSlider = () => {
  return <Swiper breakpoints={{
    328: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    }
  }}
  freeMode={true}
  pagination={{
    clickable: true
  }}
  modules={[FreeMode, Pagination]}
  className="h-[290px] sm:h-[370px]">
    {serviceData.map((item, itemIndex) => {
      return (
        <SwiperSlide key={itemIndex}>
          <div className="bg-[rgba(46,74,99,0.16)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-8 sm:gap-x-0 cursor-pointer hover:bg-[rgba(185,69,111,0.16)] transition-all duration-300 group">
            <div className="text-4xl text-accent mb-4 ">{item.icon}</div>
            <div className="mb-8">
            <div className="mb-2 text-lg">{item.title}</div>
            <p className="max-w-[350px] leading-normal line-clamp-5 sm:line-clamp-3 md:line-clamp-4 lg:line-clamp-none">{item.description}</p>
          </div>
          <div className="text-3xl">
            <RxArrowTopRight className="group-hover:text-accent group-hover:rotate-45 transition-all duration-300"/>
          </div>
          </div>
          
        </SwiperSlide>
      )
    })}
  </Swiper>;
};

export default ServiceSlider;
