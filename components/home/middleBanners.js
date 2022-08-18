import Image from "next/image";




const MiddleBanners = ({banners}) => {
  return (
    <div className="flex flex-wrap mt-8">
        {banners?.map((item) => {
            return (
                <div key={item.id} className="w-1/2 p-4">
                    <Image
                        
                        src={item.image}
                        width={828}
                        height={328}
                        placeholder="blur"
                        blurDataURL={item.image}
                        layout="responsive"
                        alt={item.title}
                        className="rounded-lg xl:rounded-3xl"
                    />

                    <p className="text-center text-sm">{item.title_fa}</p>

                    </div>
            );
        }
        )}
    </div>
  )
}

export default MiddleBanners