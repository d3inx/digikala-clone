import Image from "next/image";



const DeepLinks = ({links}) => {
  return (
    <div className="flex flex-wrap mt-8">
      {links?.map((item) => {
        return (
          <div key={item.id} className="flex flex-col w-1/4 md:w-1/6 my-4 space-y-2">
            <div className="flex items-center justify-center">
              <Image
                
                src={item.icon.url[0]}
                width={52}
                height={52}
                alt={item.description}
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
