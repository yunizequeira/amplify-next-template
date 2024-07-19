import Link from "next/link";
import { fetchServices } from "@/src/utils/FetchData";
import Image from "next/image";

interface Service {
  name: string;
  price: number;
  image: string;
  id: string;
  typeService: string;
  typePrice: string;
  time: number;
  available: boolean;

}

const PopularServices = async () => {
  const data = (await fetchServices()) as Service[];
  const services = data.length > 3 ? data.splice(0, 3) : data;

  return (
    <div className="w-full py-10 space-y-6 lg:space-y-10">
      <div className="py-4">
        <h2 className="text-center text-4xl lg:text-7xl font-light">
          {" "}
          Popular Services{" "}
        </h2>
      </div>

      <div className=" grid sm:grid-cols-2 xl:container mx-auto lg:grid-cols-3 gap-7 px-2 lg:px-5 justify-center">
        {services.map((service) => (
          <div
            className="w-full relative hover:scale-110 transition-transform duration-300 cursor-pointer"
            key={service.id}
          >
            <Image
              src={service.image}
              width={1080}
              height={1080}
              alt={service.name}
              className=" "
            />
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-black flex flex-col justify-end p-5">
              <div className="space-y-5">
                <h2 className="text-2xl lg:text-4xl uppercase font-semibold">
                  {service.name}
                </h2>
                <Link
                  href={`/services/${service.id}`}
                  className="border text-xl inline-block py-2 px-4 hover:bg-yellow-400 transition-colors duration-300 rounded"
                >
                  <p>View Details</p>
                  {/* <p className="hidden">{service.name}</p> */}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
