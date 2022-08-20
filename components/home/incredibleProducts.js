import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const IncredibleProducts = ({ suggestedProducts, image, color }) => {
  return (
    <>
      {suggestedProducts && suggestedProducts.length > 0 && (
        <div
          className={`flex flex-wrap md:rounded-3xl w-full py-4 my-4 ${color}`}
        >
          <div className="w-2/5 md:w-1/6 p-4 flex flex-col items-center">
            <Image
              src={"https://www.digikala.com/statics/img/svg/amazing-typo.svg"}
              width={77}
              height={77}
              loading='eager'
              alt="شگفت انگیز"
            />
            <Image priority src={image} width={115} height={115} alt="شگفت انگیز" />
          </div>
          <div className="w-3/5 md:w-5/6">
            <Swiper
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1.5,
                },
                640: {
                  width: 640,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 5,
                },
                1280: {
                  width: 1280,
                  slidesPerView: 6,
                },
              }}
              slidesPerView={"auto"}
              spaceBetween={2}
              modules={[Navigation]}
              className="mySwiper h-full rounded-r-2xl"
            >
              {suggestedProducts?.map((item) => {
                return (
                  <SwiperSlide
                    className=" flex flex-col w-full h-full bg-white"
                    key={item.id}
                  >
                    <Link href={item.url.uri}>
                      <a>
                        <div className="relative w-52 h-52 flex items-center justify-center">
                          <Image
                            src={item.images.main.url[0]}
                            alt={item.title}
                            placeholder="blur"
                            blurDataURL={item.images.main.url[0]}
                            layout='fill'
                            objectFit="cover"
                            loading='eager'
                          />
                        </div>
                        <div className="flex flex-col mt-2 p-2">
                          <div className="flex justify-between">
                            <p className="text-neutral-700 font-bold">
                              {item.default_variant.price.selling_price.toLocaleString() + " ریال"}
                            </p>
                            <span className="bg-rose-600 flex items-center rounded-full px-2 text-xs text-white font-bold">
                              {item.default_variant.price.discount_percent}٪
                            </span>
                          </div>
                          <span className="text-gray-500 text-sm line-through">
                            {item.default_variant.price.rrp_price.toLocaleString() + " ریال"}
                          </span>
                        </div>
                      </a>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default IncredibleProducts;
