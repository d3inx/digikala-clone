import { useState } from "react";

import { StarIcon } from "@heroicons/react/solid";
import { InformationCircleIcon, ThumbUpIcon } from "@heroicons/react/outline";

import Image from "next/image";

const InfoSection = ({
  title_fa,
  title_en,
  rating,
  suggestion,
  colors,
  review,
  content_description,
  digiplus,
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]?.color);
  return (
    <div className="w-full lg:w-2/5 lg:px-4 mt-4 lg:mt-0">
      <h1 className="text-base lg:text-xl font-bold mb-4 lg:mb-0">
        {title_fa}
      </h1>
      <div className="hidden lg:flex items-center w-full my-4">
        <h2 className="text-xs text-gray-400 font-light min-w-max ml-2">
          {title_en}
        </h2>
        <div className="bg-gray-200 w-full h-[1px]"></div>
      </div>
      {rating.count > 0 && (
        <div className="flex items-center">
          <StarIcon className="w-4 h-4 lg:w-5 lg:h-5 text-amber-500" />
          <p className="text-xs pr-2">
            {rating.rate / 20}{" "}
            <span className="text-gray-500">({rating.count})</span>{" "}
          </p>
        </div>
      )}
      {suggestion.count > 0 && (
        <div className="flex items-center my-4">
          <ThumbUpIcon className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" />
          <p className="text-xs lg:text-sm text-gray-500 pr-2">
            {suggestion.percentage}% ({suggestion.count}) نفر از خریداران این
            کالا را پیشنهاد کردند.
          </p>
        </div>
      )}
      {colors[0] && (
        <div>
          <p className="text-sm lg:text-lg font-bold">رنگ : {selectedColor}</p>
          <div className="flex my-4">
            {colors.map((color) => {
              return (
                <div
                  key={color.id}
                  className={`cursor-pointer border-4 ring-1 ring-gray-300 w-8 h-8 lg:w-10 lg:h-10 rounded-full mx-1  ${
                    selectedColor === color.color
                      ? "border-cyan-500"
                      : "border-white"
                  }`}
                  style={{ backgroundColor: color.hexCode }}
                  onClick={() => setSelectedColor(color.color)}
                ></div>
              );
            })}
          </div>
        </div>
      )}
      {review && (
        <ul className="list-disc">
          <p className="text-sm lg:text-lg font-bold mt-8">ویژگی&zwnj;ها</p>
          {review.map((review) => {
            return (
              <li key={review.title} className="flex items-center my-4">
                <p className="text-sm lg:text-base text-gray-500">
                  {review.title} :
                </p>
                <p className="text-xs lg:text-sm font-bold mr-2">
                  {review.values.map((item, index) =>
                    index !== review.values.length - 1 ? `${item} ,` : item
                  )}
                </p>
              </li>
            );
          })}
        </ul>
      )}
      <div className="flex items-center border-t-[.5px] border-gray-300 pt-4">
        <div className="pl-2">
          <InformationCircleIcon className="w-5 h-5 text-gray-500" />
        </div>
        <p className="text-xs font-light text-gray-500">
          {content_description}
        </p>
      </div>
      <div className="flex justify-between items-center bg-white mt-8 p-4 border-[.5px] rounded-xl">
        <div className="flex flex-col">
          <h1 className="text-sm lg:text-base">ارسال رایگان</h1>
          <p className="text-xs lg:text-sm text-gray-500 mt-2">
            برای سفارش بالای ۵۰۰ هزار تومان
          </p>
        </div>
        <Image
          src={
            "https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg"
          }
          width={132}
          height={77}
          alt=""
          loading="eager"
        />
      </div>
      <div className="flex justify-between items-center bg-white my-4 p-4 border-[.5px] rounded-xl">
        <ul>
          <p className="text-sm lg:text-base">ویژه اعضای دیجی&zwnj;پلاس</p>
          {digiplus.map((item) => {
            return (
              <li key={item} className="flex items-center my-4">
                <p className="text-xs text-gray-500">{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default InfoSection;
