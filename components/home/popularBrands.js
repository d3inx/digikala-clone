import Image from "next/image";
import { useContext } from "react";

import { DataContext } from "../../pages";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";



const PopularBrands = () => {

  const data = useContext(DataContext);
  const {popular_brands} = data;

  return (
    <div className="md:rounded-3xl md:border-[1px] md:border-gray-300 overflow-hidden py-8 mt-8">
      <p className="text-2xl pb-8 text-center">محبوب&zwnj;ترین برندها</p>
      <div className="">
        <Swiper
          breakpoints={{
            // when window width is >= 640px

            320: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              spaceBetween: 15,
              slidesPerView: 5,
            },
            1280: {
              width: 1280,
              spaceBetween: 30,
              slidesPerView: 7,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {popular_brands?.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="px-2 md:px-6 border-x-[.5px] "
              >
                <Image
                  
                  src={item.image}
                  alt={item.title}
                  width={110}
                  height={110}
                  layout="responsive"
                  objectFit="contain"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularBrands;
