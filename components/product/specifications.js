import { useContext, useState } from "react";

import { ChevronLeftIcon } from "@heroicons/react/outline";

import SpecificationSection from "./specificationSection";
import { ProductContext } from "../../pages/product/[productId]/[productName]";

const Specifications = () => {
  const [show, setShow] = useState(false);

  const data = useContext(ProductContext);
  const {specifications} = data;

  return (
    <div className="w-full lg:w-4/5 py-8 border-b-4">
      <h1 className="pb-2 text-sm lg:text-base font-bold">مشخصات</h1>
      <div className="bg-rose-500 w-20 h-[2px]"></div>
      <div>
      {show
        ? specifications.map((data) => {
            return (
              <SpecificationSection
                key={data.title}
                data={data}
                show={show}
              />
            );
          })
        : specifications.slice(0, 5).map((data) => {
            return (
              <SpecificationSection
                key={data.title}
                data={data}
                show={show}
              />
            );
          })}
      </div>
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

export default Specifications;
