import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { MainContext } from "../../pages/main/[categoryName]";

const RecommendationSubCategories = () => {

  const data = useContext(MainContext);
  const {recommendation_sub_categories} = data;

  return (
    <>
      <h2 className="text-2xl mt-8 text-center">
        دسته&zwnj;بندی&zwnj;های پیشنهادی
      </h2>
      <div className="flex flex-wrap rounded-3xl border-[1px] border-gray-300 mt-8 divide-x divide-y overflow-hidden">
        {recommendation_sub_categories?.map((item) => {
          return (
            <Link href={item.url} key={item.id}>
              <a className="w-1/2 md:w-1/6 py-4">
                <div className="relative mx-12">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    layout="responsive"
                    className="z-40"
                  />
                  <div className="absolute top-0 w-full h-full">
                    <Image
                      src="/img/picture-bg.jpg"
                      alt=""
                      width={100}
                      height={100}
                      layout="responsive"
                      objectFit="cover"
                      priority
                    />
                  </div>
                </div>
                <p className="text-sm text-center truncate mt-4">
                  {item.title_fa}
                </p>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default RecommendationSubCategories;
