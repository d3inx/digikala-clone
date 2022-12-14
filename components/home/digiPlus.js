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
          loading='eager'
        />
        <Image
          src={"https://www.digikala.com/statics/img/png/digiplus/plus-widget.png"}
          layout='fill'
          alt="digiplus"
          quality={50}
          loading='eager'
          objectFit="cover"
        />
        <div className="text-white">خدمات ویژه برای اعضای دیجی&zwnj;پلاس</div>
      </div>
      <div className="flex flex-row flex-wrap w-full md:w-2/3 bg-white rounded-lg md:rounded-2xl">
        {product?.map((item) => {
          return (
            <Link href={item.url} key={item.id}>
              <a className="w-1/3 md:w-1/6">
                <div className="p-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    placeholder="blur"
                    blurDataURL={item.image}                    
                    width={300}
                    height={300}
                    layout="responsive"
                  />
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
