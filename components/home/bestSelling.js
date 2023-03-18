import Image from "next/image";
import Link from "next/link";

const BestSelling = ({ products }) => {
  return (
    <div className="border-[1px] rounded-3xl py-8 mt-8">
      <p className="text-2xl pb-8 text-center">پرفروش&zwnj;ترین کالاها</p>
      <div className="flex flex-wrap">
        {products?.map((item, index) => {
          return (
            <Link href={item.url} key={item.id}>
              <a className="flex items-center w-full sm:w-1/2 lg:w-1/4 px-4 my-4">
                <div className="relative min-w-[100px] h-24">
                  <Image
                    src={item.image}
                    alt={item.title_fa}
                    width={100}
                    height={100}
                    layout='responsive'
                    objectFit="contain"
                    className="z-50"
                  />
                  <div className="absolute top-0 w-full h-full">
                    <Image
                      src="/img/picture-bg.jpg"
                      alt=""
                      width={100}
                      height={100}
                      layout="responsive"
                      objectFit="cover"
                      priority
                    />
                  </div>
                </div>
                <span className="text-xl text-cyan-500 font-bold px-4">
                  {index + 1}
                </span>
                <p className="max-w-max text-sm py-8 border-b-[1px] border-gray-300 truncate">
                  {item.title}
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
