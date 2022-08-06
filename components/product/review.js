import { useState } from "react";

import ReviewSection from "./reviewSection";

const Review = ({ data }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full lg:w-4/5 py-8 ">
      <h1 className="pb-2 text-sm lg:text-base font-bold">بررسی تخصصی</h1>
      <div className="bg-rose-500 w-20 h-[2px]"></div>
      {show
        ? data.map((item) => {
            return (
              <ReviewSection
                key={item.title}
                item={item}
                show={show}
                setShow={setShow}
              />
            );
          })
        : data.slice(0, 1).map((item) => {
            return (
              <ReviewSection
                key={item.title}
                item={item}
                show={show}
                setShow={setShow}
              />
            );
          })}
    </div>
  );
};

export default Review;
