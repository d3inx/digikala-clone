import Image from "next/image";
import Link from "next/link";

import { StarIcon } from "@heroicons/react/solid";

const ResultProducts = ({ products }) => {
  return (
    <div className="flex flex-wrap divide-x divide-y border-t-[.5px] mt-8">
      {products.map((item) => {
        return (
          <Link href={item.url.uri} key={item.id}>
            <a className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 hover:shadow-xl cursor-pointer">
              <div className="w-full p-4">
                <Image
                  src={item.images.main.url[0]}
                  width={300}
                  height={300}
                  placeholder="blur"
                  blurDataURL={item.images.main.url[0]}
                  layout="responsive"
                  alt={item.title_fa}
                />
              </div>
              <p className="text-sm h-10 mt-4 line-clamp-2">{item.title_fa}</p>
              {item.rating.count > 0 && (
                <div className="flex items-center my-2">
                  <StarIcon className="w-4 h-4 text-amber-500" />
                  <p className="text-xs pr-2">{item.rating.rate / 20} </p>
                </div>
              )}
              {item.status === "marketable" ? (
                <div className="flex flex-row-reverse justify-between">
                  <div className="flex flex-col items-end">
                    <p className="text-sm font-bold">
                      {item.default_variant.price.selling_price.toLocaleString()}{" "}
                      ریال
                    </p>
                    {item.default_variant.price.discount_percent > 0 && (
                      <p className="text-xs text-gray-400 line-through mt-4">
                        {item.default_variant.price.rrp_price.toLocaleString()}
                      </p>
                    )}
                  </div>
                  {item.default_variant.price.discount_percent > 0 && (
                    <div className="bg-rose-600 h-5 flex items-center rounded-full px-2 mr-2 text-xs text-white font-bold">
                      {item.default_variant.price.discount_percent}٪
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-row-reverse justify-between">
                  <p className="font-bold text-gray-400">ناموجود</p>
                </div>
              )}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default ResultProducts;
