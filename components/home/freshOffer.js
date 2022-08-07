import Image from "next/image";
import Link from "next/link";

import { ArrowLeftIcon } from "@heroicons/react/outline";

const FreshOffer = ({ offer }) => {
  return (
    <div className="w-full flex flex-col md:flex-row rounded-3xl bg-green-100 shadow p-4 mt-4">
      <div className="flex items-center justify-evenly md:w-2/5">
        <Image
          src={"https://www.digikala.com/statics/img/png/amazing/fresh.png"}
          width={66}
          height={66}
          alt={offer?.title}
        />
        <Image
          src={"https://www.digikala.com/statics/img/svg/typography/fresh.svg"}
          width={250}
          height={28}
          alt={offer?.title}
        />
        <span className="bg-green-600 h-8 hidden md:flex items-center rounded-full px-4 text-white text-sm font-bold">
          تا ۴۳٪ تخفیف
        </span>
      </div>
      <div className="flex flex-wrap justify-center items-center w-full md:w-3/5 ">
        {offer?.products.slice(0, 3).map((item) => {
          return (
            <Link href={item.url.uri} key={item.id}>
              <a className="flex flex-col my-4 px-2 space-y-2">
                <div className="flex relative items-center justify-center p-2 bg-white rounded-full">
                  <Image
                    src={item.images.main.url[0]}
                    width={58}
                    height={58}
                    alt={item.title}
                    className="rounded-full"
                  />
                  <span className="bg-rose-600 absolute bottom-0 right-0 flex items-center rounded-full px-2 text-xs text-white font-bold">
                    {item.default_variant.price.discount_percent}٪
                  </span>
                </div>
              </a>
            </Link>
          );
        })}
        <button className="bg-white h-14 flex items-center rounded-full px-4 text-green-500">
          <p className="hidden md:block">بیش از ۹۰ کالا</p>
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default FreshOffer;
