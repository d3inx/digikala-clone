

import Image from "next/image";

import { ChevronLeftIcon } from "@heroicons/react/outline";

const ReviewSection = ({ item , show , setShow }) => {
  return (
    <div className="flex flex-wrap w-full my-8 pb-8 border-b-4 ">
      <div className="w-full">
        <h2 className="pb-2 text-sm lg:text-base font-bold">{item.title}</h2>
        {item.sections.map((section) => {
          if (section.template === "text") {
            return (
              <div
                key={section.text}
                className="flex flex-wrap w-full my-8 pb-8"
              >
                <p
                  className="text-xs lg:text-sm leading-loose mt-4"
                  dangerouslySetInnerHTML={{ __html: section.text }}
                />
              </div>
            );
          } else if (section.template === "image") {
            return (
              <div
                key={section.image}
                className="w-full flex flex-wrap justify-center my-8 pb-8"
              >
                <div className="w-full lg:w-4/5">
                  <Image
                    src={section.image}
                    width={800}
                    height={500}
                    layout="responsive"
                    alt=""
                    className="object-cover"
                  />
                </div>
              </div>
            );
          } else if (section.template === "text-image") {
            return (
              <div key={section.text} className="w-full flex flex-wrap my-8 pb-8">
                <div className="w-full lg:w-3/4">
                  <p
                    className="text-xs lg:text-sm leading-loose mt-4"
                    dangerouslySetInnerHTML={{ __html: section.text }}
                  />
                </div>
                <div className="w-full lg:w-1/4">
                  <Image
                    src={section.image}
                    width={800}
                    height={500}
                    layout="responsive"
                    alt=""
                    className="object-cover"
                  />
                </div>
              </div>
            );
          } else if (section.template === "image-text") {
            return (
              <div key={section.text} className="w-full flex flex-wrap my-8 pb-8">
                <div className="w-full lg:w-1/4">
                  <Image
                    src={section.image}
                    width={800}
                    height={500}
                    layout="responsive"
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-3/4">
                  <p
                    className="text-xs lg:text-sm leading-loose mt-4"
                    dangerouslySetInnerHTML={{ __html: section.text }}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
      {!show ? (
        <button
          className="flex items-center text-cyan-500 mt-4 text-sm"
          onClick={() => setShow(!show)}
        >
          ??????????
          <ChevronLeftIcon className="w-4 h-4 text-cyan-500" />
        </button>
      ) : (
        <button
          className="flex items-center text-cyan-500 mt-4 text-sm"
          onClick={() => setShow(!show)}
        >
          ????????
          <ChevronLeftIcon className="w-4 h-4 text-cyan-500" />
        </button>
      )}
    </div>
  );
};

export default ReviewSection;
