import Link from "next/link";
import Image from "next/image";

interface Props {
  fleets:{
    id: number,
    tittle: string,
    image: string,
  }[]
  
}

const GallerySlice = ({fleets}: Props) => {
  return (
    <div className="space-y-3 mt-5">
    
      <div className="xl:container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 px-2 w-full ">
        {fleets.map((car) => (
        <Link href={`?modal=true&id=${car.id}`} key={car.id} className="w-full h-full" scroll={false}>
            <Image src={car.image} width={1080} height={1080} alt={car.tittle} className="w-full h-full ring-1 ring-yellow-400"/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default GallerySlice
