import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Link from "next/link";

const RecommendationsProduct = ({ product }) => {
  return (
    <div className="py-4 lg:py-0 lg:p-4 border-[.5px] rounded-lg">
      <h1 className="pb-2 font-bold">کالاهای مشابه</h1>
      <div className="bg-rose-500 w-20 h-[2px]"></div>
      <Swiper
        breakpoints={{
          // when window width is >= 640px

          0: {
            slidesPerView: 2.5,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 4,
          },
          1280: {
            width: 1280,
            slidesPerView: 6,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {product?.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="px-2 md:px-6 border-x-[.5px] "
            >
              <Link href={item.url}>
                <a>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={110}
                    height={110}
                    layout="responsive"
                    className=""
                    loading="eager"
                  />
                  <p className="text-sm line-clamp-2">{item.title}</p>
                  <p className="text-sm lg:text-base text-left pt-4 font-bold">
                    {item.price.toLocaleString() + " ریال"}
                  </p>
                </a>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RecommendationsProduct;
