import Image from "next/image";
import { useContext } from "react";

import { DataContext } from "../../pages";




const MiddleBanners = () => {
  

  const data = useContext(DataContext);
  const {middle_banners} = data;

  return (
    <div className="flex flex-wrap mt-8">
        {middle_banners?.map((item) => {
            return (
                <div key={item.title} className="w-1/2 p-4">
                    <Image
                        
                        src={item.image}
                        width={828}
                        height={328}
                        layout="responsive"
                        alt={item.title}
                        className="rounded-lg xl:rounded-3xl"
                    />

                    </div>
            );
        }
        )}
    </div>
  )
}

export default MiddleBanners