import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const Header = ({sliderItem}) => {


  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mt-8"
    >
        {sliderItem?.map((item) => {
            return (
                <SwiperSlide className="w-full aspect-[4/2] lg:aspect-[4/1]" key={item.id}>
                    <Image  src={item.image} alt={item.title} layout='fill' className='object-cover' priority />
                </SwiperSlide>
            );
        }
        )}
    </Swiper>
  );
};

export default Header;
