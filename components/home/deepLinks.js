import { useContext } from "react";
import Image from "next/image";

import { DataContext } from "../../pages";

const DeepLinks = () => {

  const data = useContext(DataContext);
  const {deep_links} = data;

  return (
    <div className="flex flex-wrap mt-8">
      {deep_links?.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col items-center w-1/4 md:w-1/6 my-4 space-y-2"
          >
            <div className="relative w-12 h-12">
              <Image
                src={item.image}
                width={48}
                height={48}
                layout="responsive"
                alt={item.description}
                objectFit="cover"
              />
            </div>
            <span className="text-center text-xs">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DeepLinks;
