import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import { useContext } from "react";

import { MainContext } from "../../pages/main/[categoryName]";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const Header = () => {
  
  const data = useContext(MainContext);
  const {slider_banners} = data;

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mt-8"
    >
        {slider_banners?.map((item) => {
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
