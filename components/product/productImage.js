import Image from "next/image";
import { useEffect, useState } from "react";

const ProductImage = ({ images }) => {
  const [mainImage, setMainImage] = useState();

  useEffect(() => {
    setMainImage(images.main.url[0]);
  } , [images]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };
  return (
    <div className="w-full lg:w-2/5 flex flex-col">
      <Image
        src={mainImage === undefined ? images.main.url[0] : mainImage}
        width={800}
        height={800}
        placeholder="blur"
        blurDataURL={mainImage === undefined ? images.main.url[0] : mainImage}
        layout="responsive"
        className="object-cover"
        alt=""
      />
      <div className="flex flex-row justify-center items-center flex-wrap">
        {images.list?.map((image) => {
          return (
            <div
              key={image.url[0]}
              className="w-1/6 cursor-pointer border-[.5px] border-gray-300 rounded-xl m-2 p-1"
              onClick={() => handleImageClick(image.url[0])}
            >
              <Image
                src={image.url[0]}
                width={100}
                height={100}
                placeholder="blur"
                blurDataURL={image.url[0]}
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
