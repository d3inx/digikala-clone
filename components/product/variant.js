import { ShieldCheckIcon, TruckIcon } from "@heroicons/react/outline";
import React from "react";

const Variant = ({ default_variant, status }) => {
  return (
    <div className="w-full lg:w-1/5 h-fit bg-gray-50 border-[.5px] border-gray-300 rounded-xl p-4">
      {status === "marketable" ? (
        <>
          <h1>فروشنده</h1>
          <div className="border-b-[.5px]">
            <p className="text-sm lg:text-base mt-8 py-4">
              {default_variant.seller.title}
            </p>
            {default_variant.rate > 0 && (
              <p className="text-xs text-gray-500 my-3">
                <span className="text-green-600 pl-2">
                  {default_variant.rate}%
                </span>{" "}
                رضایت از کالا
              </p>
            )}
          </div>
          <div className="flex items-center border-b-[.5px]">
            <div className="pl-2">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <p className="text-sm py-4">{default_variant.warranty.title_fa}</p>
          </div>
          <div className="py-4 border-b-[.5px]">
            <p className="text-sm lg:text-base font-bold">
              {default_variant.shipment_methods.description}
            </p>
            <div className="flex items-center">
              <div className="pl-2">
                <TruckIcon className="w-4 h-4 text-red-500" />
              </div>
              <p className="text-xs lg:text-sm text-gray-500">
                {default_variant.shipment_methods.providers[0].title}
              </p>
            </div>
          </div>
          <p className="text-xs py-4 border-b-[.5px]">
            {default_variant.digiclub.point} امتیاز دیجی&zwnj;کلاب
          </p>
          <div className="w-full lg:w-auto fixed lg:static bottom-0 right-0 border-t-2 bg-white p-4 lg:p-0 z-50">
            <div className="flex flex-col items-end py-1 lg:py-4">
              {default_variant.price.discount_percent > 0 && (
                <div className="flex justify-end">
                  <span className="text-gray-500 text-xs line-through">
                    {default_variant.price.rrp_price.toLocaleString() + " ریال"}
                  </span>
                  <span className="bg-rose-600 flex items-center rounded-full px-2 mr-2 text-xs text-white font-bold">
                    {default_variant.price.discount_percent}٪
                  </span>
                </div>
              )}
              <p className="pt-4 font-bold">
                {default_variant.price.selling_price.toLocaleString() + " ریال"}
              </p>
            </div>
            <button className="w-full text-sm bg-rose-500 text-white rounded-lg py-3">
              افزودن به سبد خرید
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center text-xl text-gray-500 font-bold">
            ناموجود
          </h1>
          <p className="text-sm mt-4">این کالا فعلا موجود نیست</p>
        </>
      )}
    </div>
  );
};

export default Variant;
