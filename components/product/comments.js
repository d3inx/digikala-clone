import React, { useContext } from "react";

import { MinusSmIcon, PlusSmIcon, ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/outline";

import { ProductContext } from "../../pages/product/[productId]/[productName]";

const Comments = () => {

  const data = useContext(ProductContext);
  const {lastComments} = data;

  return (
    <div className="w-full lg:w-4/5 py-8 border-b-4">
      <h1 className="pb-2 text-sm lg:text-base font-bold">امتیاز و دیدگاه کاربران</h1>
      <div className="bg-rose-500 w-20 h-[2px]"></div>
      {lastComments.map((data) => {
        
        return (
          <div
            key={data.id}
            className="flex flex-wrap w-full my-8 pb-8 border-b-4 "
          >
            <div className="w-full lg:w-4/5">
              <div className="flex">
                <h1
                  className={`w-8 h-6 text-center text-white text-xs rounded-md py-1 px-3 ${
                    data.rate > 2 ? "bg-green-600" : "bg-yellow-500"
                  }`}
                >
                  {data.rate}
                </h1>
                <h2 className="text-sm lg:text-base font-bold mr-4">{data.title}</h2>
              </div>
              <div className="flex items-center text-xs text-gray-500 mt-8 pb-4 border-b-[.5px]">
                <p>{data.createdAt}</p>
                <div className="w-1 h-1 rounded-full bg-gray-300 mx-4"></div>
                <p>{data.userName}</p>
              </div>
              <div className="pt-8">
                <p className="text-xs lg:text-sm leading-loose">{data.body}</p>
              </div>
              <>
                {data.advantages?.map((item) => {
                    return (
                        <div key={item} className="flex items-center text-xs mt-2">
                            <div>
                                <PlusSmIcon className="w-5 h-5 text-green-500" />
                            </div>
                            <p className="mr-2">{item}</p>
                        </div>
                    );
                })}
                {data.disadvantages?.map((item) => {
                    return (
                        <div key={item} className="flex items-center text-xs mt-2">
                            <div>
                                <MinusSmIcon className="w-5 h-5 text-red-500" />
                            </div>
                            <p className="mr-2">{item}</p>
                        </div>
                    );
                })}
              </>
              <div className="flex justify-end items-center text-gray-400">
                <div className="flex">
                    <p className="text-xs lg:text-sm">{data.likes}</p>
                    <div className="pr-1">
                        <ThumbUpIcon className="w-5 h-5" />
                    </div>
                </div>
                <div className="flex mr-4">
                    <p className="text-xs lg:text-sm">{data.dislikes}</p>
                    <div className="pr-1">
                        <ThumbDownIcon className="w-5 h-5" />
                    </div>
                </div>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
