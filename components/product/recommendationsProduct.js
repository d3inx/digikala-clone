import { useContext } from "react";
import Image from "next/image";

import { ProductContext } from "../../pages/product/[productId]/[productName]";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Link from "next/link";

const RecommendationsProduct = () => {

  const data = useContext(ProductContext);
  const {recommendationProduct} = data;
  
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
        {recommendationProduct?.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="px-2 md:px-6 border-x-[.5px] "
            >
              <Link href={item.url}>
                <a>
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={110}
                      height={110}
                      layout="responsive"
                      className="z-50"
                    />
                    <div className="absolute top-0 w-full h-full">
                      <Image
                        src="/img/picture-bg.jpg"
                        alt=""
                        width={100}
                        height={100}
                        className="rounded-xl"
                        layout="responsive"
                        objectFit="cover"
                        priority
                      />
                    </div>
                  </div>
                  <p className="text-sm line-clamp-2 mt-4">{item.title}</p>
                  <p className="text-sm lg:text-base text-left pt-4 font-bold">
                    {item.price.toLocaleString("fa-IR") + " ریال"}
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
