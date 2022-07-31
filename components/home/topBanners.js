
import Image from "next/image";




const TopBanners = ({topBanners}) => {
  
  
  return (
    <>
      <div className="flex flex-wrap  mt-8">
        {topBanners?.map((item) => {
          return (
            <div key={item.id} className="w-1/2 md:w-1/4 p-2">
              <Image
                
                src={item.image}
                width={400}
                height={300}
                alt={item.title}
                layout="responsive"
                className="rounded-xl xl:rounded-3xl"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopBanners;
