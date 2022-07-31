import Image from "next/image";
import Link from "next/link";

const RecommendationSubCategories = ({ categories }) => {
  return (
    <>
      <h2 className="text-2xl mt-8 text-center">
        دسته&zwnj;بندی&zwnj;های پیشنهادی
      </h2>
      <div className="flex flex-wrap rounded-3xl border-[1px] border-gray-300 mt-8 divide-x divide-y overflow-hidden">
        {categories?.map((item) => {
          return (
            <Link href={item.url.uri} key={item.id}>
              <a className="w-1/2 md:w-1/6 py-4">
                <div className="px-12">
                  <Image
                    src={item.top_product_image}
                    alt={item.title_fa}
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
                <p className="text-sm text-center truncate mt-4">
                  {item.title_fa}
                </p>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default RecommendationSubCategories;
