import { useContext } from "react";

import { ProductContext } from "../../pages/product/[productId]/[productName]";

import { ShieldCheckIcon, TruckIcon } from "@heroicons/react/outline";

const Variant = () => {

  const data = useContext(ProductContext);
  const {variant} = data;
  const {defaultVariant,status } = variant;

  return (
    <div className="w-full lg:w-1/5 h-fit bg-gray-50 border-[.5px] border-gray-300 rounded-xl p-4">
      {status === "marketable" ? (
        <>
          <h1>فروشنده</h1>
          <div className="border-b-[.5px]">
            <p className="text-sm lg:text-base mt-8 py-4">
              {defaultVariant.sellerName}
            </p>
            {defaultVariant.rate > 0 && (
              <p className="text-xs text-gray-500 my-3">
                <span className="text-green-600 pl-2">
                  {defaultVariant.rate}%
                </span>{" "}
                رضایت از کالا
              </p>
            )}
          </div>
          <div className="flex items-center border-b-[.5px]">
            <div className="pl-2">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <p className="text-sm py-4">{defaultVariant.warranty}</p>
          </div>
          <div className="py-4 border-b-[.5px]">
            <p className="text-sm lg:text-base font-bold">
              {defaultVariant.shipmentMethodsDescription}
            </p>
            <div className="flex items-center">
              <div className="pl-2">
                <TruckIcon className="w-4 h-4 text-red-500" />
              </div>
              <p className="text-xs lg:text-sm text-gray-500">
                {defaultVariant.shipmentMethodsProvidersTitle}
              </p>
            </div>
          </div>
          <p className="text-xs py-4 border-b-[.5px]">
            {defaultVariant.digiclubPoint} امتیاز دیجی&zwnj;کلاب
          </p>
          <div className="w-full lg:w-auto fixed lg:static bottom-0 right-0 border-t-2 bg-white p-4 lg:p-0 z-50">
            <div className="flex flex-col items-end py-1 lg:py-4">
              {defaultVariant.discountPercent > 0 && (
                <div className="flex justify-end">
                  <span className="text-gray-500 text-xs line-through">
                    {defaultVariant.rrpPrice.toLocaleString("fa-IR") + " ریال"}
                  </span>
                  <span className="bg-rose-600 flex items-center rounded-full px-2 mr-2 text-xs text-white font-bold">
                    {defaultVariant.discountPercent}٪
                  </span>
                </div>
              )}
              <p className="pt-4 font-bold">
                {defaultVariant.sellingPrice.toLocaleString("fa-IR") + " ریال"}
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
