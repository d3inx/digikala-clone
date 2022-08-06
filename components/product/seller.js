import { ShieldCheckIcon } from "@heroicons/react/outline";

const Seller = ({ sellers }) => {
  return (
    <div className="hidden lg:block">
      <h1 className="pb-2 font-bold">فروشندگان این کالا</h1>
      <div className="bg-rose-500 w-20 h-[2px]"></div>
      <div className="flex flex-col">
        {sellers?.slice(0,3).map((seller) => {
          return (
            <div
              key={seller.id}
              className="flex items-center justify-between px-4 py-8"
            >
              <p className="w-1/5">{seller.seller.title}</p>
              <div className="w-1/5 flex flex-col text-xs text-gray-500">
                {seller.shipment_methods.providers.map((item) => {
                  return (
                    <div key={item.id} className="flex items-center py-1">
                      <p className="text-right">{item.title}</p>
                    </div>
                  );
                })}
              </div>
              <div className="w-1/5 flex">
                <div className="pl-2">
                  <ShieldCheckIcon className="w-5 h-5" />
                </div>
                <p className="text-right">{seller.warranty.title_fa}</p>
              </div>
              <div className="w-2/5 flex justify-end">
                  <div className="flex items-center">
                    {seller.price.discount_percent > 0 && (
                      <span className="text-gray-500 text-xs line-through">
                        {seller.price.rrp_price.toLocaleString() + " ریال"}
                      </span>
                    )}
                    <p className="text-xl font-bold px-2">
                      {seller.price.selling_price.toLocaleString() + " ریال"}
                    </p>
                    {seller.price.discount_percent > 0 && (
                      <span className="bg-rose-600 flex items-center rounded-full px-2 py-1 mr-2 text-xs text-white font-bold">
                        {seller.price.discount_percent}٪
                      </span>
                    )}
                  </div>
                  <button className="bg-rose-500 text-white text-sm px-4 py-3 rounded-lg mr-6">افزودن به سبد</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Seller;
