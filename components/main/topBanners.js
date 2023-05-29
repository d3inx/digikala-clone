import Image from "next/image";
import { useContext } from "react";

import { MainContext } from "../../pages/main/[categoryName]";

const TopBanners = () => {
  
  const data = useContext(MainContext);
  const {top_banners} = data;
  
  return (
    <>
      <div className="flex flex-wrap  mt-8">
        {top_banners?.map((item) => {
          return (
            <div key={item.title} className="relative w-1/2 md:w-1/4 p-2">
              <Image
                src={item.image}
                width={400}
                height={300}
                alt={item.title}
                layout="responsive"
                className="rounded-lg xl:rounded-3xl"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopBanners;
