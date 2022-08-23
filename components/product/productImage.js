import Image from "next/image";
import { useEffect, useState } from "react";

const ProductImage = ({ images }) => {
  const [mainImage, setMainImage] = useState();

  useEffect(() => {
    setMainImage(images.mainImage);
  }, [images]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };
  return (
    <div className="w-full lg:w-2/5 flex flex-col">
      <div>
        <Image
          src={mainImage === undefined ? images.mainImage : mainImage}
          width={800}
          height={800}
          placeholder="blur"
          blurDataURL={mainImage === undefined ? images.mainImage : mainImage}
          layout="responsive"
          className="object-cover"
          alt=""
          priority
        />
      </div>
      <div className="flex flex-row justify-center items-center flex-wrap">
        {images.list?.map((image) => {
          return (
            <div
              key={image.url}
              className="w-1/6 cursor-pointer border-[.5px] border-gray-300 rounded-xl m-2 p-1"
              onClick={() => handleImageClick(image.url)}
            >
              <Image
                src={image.url}
                width={100}
                height={100}
                placeholder="blur"
                blurDataURL={image.url}
                layout="responsive"
                className="object-cover rounded-xl"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImage;
