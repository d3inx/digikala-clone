import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";

const DigiPlus = () => {
  const product = useSelector(
    (state) => state.home.homeData.data?.digiplus.jet_delivery_products.products
  );
  return (
    <div className="flex flex-wrap bg-fuchsia-700 rounded-3xl p-4 md:p-8 mt-8">
      <div
        className="w-full md:w-1/3 bg-center bg-cover h-96 md:h-auto"
        style={{
          backgroundImage:
            "url('https://www.digikala.com/statics/img/png/digiplus/plus-widget.png')",
        }}
      >
        <Image
          src={"https://www.digikala.com/statics/img/svg/digiplus-logo.svg"}
          width={128}
          height={32}
          alt="digiplus"
        />
        <div className="text-white">خدمات ویژه برای اعضای دیجی&zwnj;پلاس</div>
      </div>
      <div className="flex flex-row flex-wrap w-full md:w-2/3 bg-white rounded-lg md:rounded-2xl">
        {product?.map((item) => {
          return (
            <Link href={item.url.uri} key={item.id}>
              <a className="w-1/3 md:w-1/6">
                <div className="p-4">
                  <Image
                    src={item.images.main.url[0]}
                    alt={item.title_fa}
                    width={300}
                    height={300}
                    layout="responsive"
                    loading="lazy"
                  />
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DigiPlus;
