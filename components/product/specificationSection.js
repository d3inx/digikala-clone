import React from "react";

const SpecificationSection = ({data}) => {
  return (
    <div className="flex items-center mt-4 ">
      <p className="text-xs lg:text-base w-1/4 text-gray-500 leading-loose">{data.title} :</p>
      <p className="text-xs lg:text-sm w-3/4 mr-8 py-4 border-b-[.5px] leading-loose ">
        {data.values.map((item, index) =>
          index !== data.values.length - 1 ? `${item} ,` : item
        )}
      </p>
    </div>
  );
};

export default SpecificationSection;
