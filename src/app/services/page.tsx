import Image from "next/image";
import { fetchServices } from "@/src/utils/FetchData";
import MediaCard from "@/src/components/UI/Card";
import { Metadata } from "next";
import { Suspense } from "react";
// import ServicesSkeleton from "@/components/Interface/ServicesSkeleton";
import Search from "@/src/components/UI/SearchEvents";
import Link from "next/link";
// import CardNew from "@/components/Interface/CardNew";

export const metadata: Metadata = {
  title: "The Best Prices in Limousine Services: Las Vegas Nevada - Moreture",
  description:
    "The Best Prices in Limousine Services and Tansportation in Las Vegas Nevada .Check out our competitive prices",
  openGraph: {
    images: [
      "https://easyfiesta.s3.us-east-2.amazonaws.com/moreture/services/1.png",
    ],
  },
  icons: {
    icon: "/MoretureLogo.png",
  },
  keywords: [
    "Las Vegas",
    "Limousine Services",
    "Best Limouesine Prices in Las Vegas",
  ],
  // icons:'/logo.png',
  appleWebApp: {
    capable: true,
    title: "Services Moreture",
    statusBarStyle: "black-translucent",
  },
  applicationName: "Moreture",
};

interface Props {
  searchParams?: {
    search?: string;
  };
}
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

const ServicesPage = async ({ searchParams }: Props) => {
  const search = searchParams?.search;
  const data = (await fetchServices(search)) as Service[];
  return (
    //
    <>
      <div className="w-full h-64 lg:h-96 relative border-none ">
        <div className=" absolute top-0 left-0 right-0 bottom-0 h-full w-full p-0 overflow-hidden">
          <Image
            src={
              "https://lvwdbucket.s3.us-east-2.amazonaws.com/moreture/Need/familyMountain.webp"
            }
            alt="banner"
            width={1080}
            height={500}
            priority
            className="h-full w-full object-cover"
          />
          <div className=" absolute top-0 bottom-0 h-full w-full p-0  backdrop-brightness-100 flex justify-center items-center bg-gradient-to-b from-transparent to-gray-950 px-5 ">
            <div className=" w-full md:w-3/4 lg:w-1/2"><Search /></div>
          </div>
        </div>
      </div>
      <Suspense fallback={<p>Loading...</p>} key={searchParams?.search}>
        <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 xl:container mx-auto lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 lg:px-5 pb-24 justify-center">
          {data.length > 0 ? (
            data.map((service) => (
              <div key={service.id}>
                <MediaCard data={service} />
              </div>
            ))
          ) : (
            <div>
              <Image
                src={"/404.jpg"}
                width={400}
                height={400}
                alt="not founded"
                className="rounded-lg shadow-md h-96 w-96"
              />

              <p className="font-semibold uppercase text-red-500">
                Could not find requested resource
              </p>
              <Link
                href="/"
                className="bg-blue-700 py-2 px-5 rounded-md font-bold inline-block"
              >
                Return Home
              </Link>
            </div>
          )}
        </div>
      </Suspense>
    </>
  );
};

export default ServicesPage;
