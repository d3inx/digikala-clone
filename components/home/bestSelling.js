import Image from "next/image";
import Link from "next/link";

const BestSelling = ({ products }) => {
  return (
    <div className="border-[1px] rounded-3xl py-8 mt-8">
      <p className="text-2xl pb-8 text-center">پرفروش&zwnj;ترین کالاها</p>
      <div className="flex flex-wrap">
        {products?.map((item, index) => {
          return (
            <Link href={item.url.uri} key={item.id}>
              <a className="flex items-center md:w-1/4 px-4 my-4">
                <div className="relative min-w-[100px] h-24">
                  <Image
                    src={item.images.main.url[0]}
                    alt={item.title_fa}
                    placeholder="blur"
                    blurDataURL={item.images.main.url[0]}
                    layout='fill'
                    objectFit="contain"
                  />
                </div>
                <span className="text-xl text-cyan-500 font-bold px-4">
                  {index + 1}
                </span>
                <p className="max-w-fit text-sm py-8 border-b-[1px] border-gray-300 truncate">
                  {item.title_fa}
                </p>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BestSelling;
