import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import { ProductContext } from "../../pages/product/[productId]/[productName]";

const ProductImage = () => {
  const [mainImage, setMainImage] = useState();

  const data = useContext(ProductContext);
  const {images} = data;

  useEffect(() => {
    setMainImage(images.mainImage);
  }, [images]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };
  return (
    <div className="w-full lg:w-2/5 flex flex-col">
      <div className="relative">
        <Image
          src={mainImage === undefined ? images.mainImage : mainImage}
          width={800}
          height={800}
          layout="responsive"
          className="object-cover z-50"
          alt=""
          priority
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
      <div className="flex flex-row justify-center items-center flex-wrap">
        {images.list?.map((image) => {
          return (
            <div
              key={image.url}
              className="w-1/6 cursor-pointer border-[.5px] border-gray-300 rounded-xl m-2 p-1"
              onClick={() => handleImageClick(image.url)}
            >
              <div className="relative">
                <Image
                  src={image.url}
                  width={100}
                  height={100}
                  layout="responsive"
                  className="object-cover rounded-xl z-50"
                  alt=""
                />
                <div className="absolute top-0 w-full h-full">
                  <Image
                    src="/img/picture-bg.jpg"
                    alt=""
                    width={100}
                    height={100}
                    className="rounded-xl"
                    layout="responsive"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImage;
