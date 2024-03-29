import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { DataContext } from "../../pages";

const MainCategories = () => {

  const data = useContext(DataContext);
  const {main_categories} = data;

  return (
    <>
      <h3 className="text-2xl text-center my-8">خرید بر اساس دسته&zwnj;بندی</h3>
      <div className="flex flex-wrap">
        {main_categories?.map((item) => {
          return (
            <Link href={item.url} key={item.id}>
              <a className="w-1/3 md:w-1/5 p-4 md:p-10" key={item.id}>
                <Image
                  src={item.image}
                  width={400}
                  height={400}
                  layout="responsive"
                  alt={item.title}
                />
                <p className="text-center text-sm">{item.title}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MainCategories;
