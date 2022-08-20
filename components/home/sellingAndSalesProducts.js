import Image from "next/image";
import Link from "next/link";

const SellingAndSalesProducts = ({ products }) => {
  return (
    <div className="border-[1px] rounded-3xl py-8 my-8">
      <p className="text-2xl pb-8 text-center">منتخب محصولات تخفیف و حراج</p>
      <div className="flex flex-wrap divide-x divide-y">
        {products?.map((item) => {
          return (
            <Link href={item.url.uri} key={item.id}>
              <a className="flex flex-col items-center w-1/2 md:w-1/5 p-4">
                <div className="relative w-36 h-36">
                <Image
                  src={item.images.main.url[0]}
                  alt={item.title_fa}
                  placeholder="blur"
                  blurDataURL={item.images.main.url[0]}
                  layout='fill'
                  loading='eager'
                />
                </div>
                <div className="w-full flex flex-col mt-2 p-2">
                  <div className="flex justify-between">
                    <p className="text-neutral-700 font-bold">
                      {item.default_variant.price.selling_price.toLocaleString() + " ریال"}
                    </p>
                    {item.default_variant.price.discount_percent > 0 && (
                      <span className="bg-rose-600 flex items-center rounded-full px-2 text-xs text-white font-bold">
                        {item.default_variant.price.discount_percent}٪
                      </span>
                    )}
                  </div>
                  {item.default_variant.price.discount_percent > 0 && (
                    <span className="text-gray-500 text-sm line-through">
                      {item.default_variant.price.rrp_price.toLocaleString() + " ریال"}
                    </span>
                  )}
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SellingAndSalesProducts;
