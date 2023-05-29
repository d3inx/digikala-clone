import { useContext, useState } from "react";

import { ChevronLeftIcon } from "@heroicons/react/outline";

import { ProductContext } from "../../pages/product/[productId]/[productName]";

const Introduction = () => {
  const [show, setShow] = useState(false);

  const data = useContext(ProductContext);
  const {introduction} = data;

  return (
    <div className="w-full lg:w-4/5 py-8 border-b-4">
      <h1 className="pb-2 text-sm lg:text-base font-bold">معرفی</h1>
      <div className="bg-rose-500 w-20 h-[2px]"></div>
      <div className={`text-xs lg:text-sm leading-loose mt-4 ${show ? "" : "line-clamp-2 lg:line-clamp-3"}`} dangerouslySetInnerHTML={{ __html: introduction }} />
      {!show ? (
        <button
          className="flex items-center text-cyan-500 mt-4 text-sm"
          onClick={() => setShow(!show)}
        >
          بیشتر
          <ChevronLeftIcon className="w-4 h-4 text-cyan-500" />
        </button>
      ) : (
        <button
          className="flex items-center text-cyan-500 mt-4 text-sm"
          onClick={() => setShow(!show)}
        >
          بستن
          <ChevronLeftIcon className="w-4 h-4 text-cyan-500" />
        </button>
      )}
    </div>
  );
};

export default Introduction;
