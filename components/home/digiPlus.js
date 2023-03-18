import Image from "next/image";
import Link from "next/link";


const DigiPlus = ({product}) => {
  return (
    <div className="flex flex-wrap bg-fuchsia-700 rounded-3xl p-4 md:p-8 mt-8">
      <div
        className="relative w-full md:w-1/3 bg-center bg-cover h-96 md:h-auto"
        // style={{
        //   backgroundImage:
        //     "url('https://www.digikala.com/statics/img/png/digiplus/plus-widget.png')",
        // }}
      >
        <Image
          src={"https://www.digikala.com/statics/img/svg/digiplus-logo.svg"}
          width={128}
          height={32}
          alt="digiplus"
        />
        <Image
          src={"https://www.digikala.com/statics/img/png/digiplus/plus-widget.png"}
          layout='fill'
          alt="digiplus"
          quality={50}
          objectFit="cover"
        />
        <div className="text-white">خدمات ویژه برای اعضای دیجی&zwnj;پلاس</div>
      </div>
      <div className="flex flex-row flex-wrap w-full md:w-2/3 bg-white rounded-lg md:rounded-2xl">
        {product?.map((item) => {
          return (
            <Link href={item.url} key={item.id}>
              <a className="w-1/3 md:w-1/6">
                <div className="relative m-4">
                  <Image
                    src={item.image}
                    alt={item.title}                  
                    width={100}
                    height={100}
                    layout="responsive"
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
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DigiPlus;
