import Image from "next/image";
import Link from "next/link";

const BannerMedio = () => {
  return (
    <div className="h-[500px] relative border-none py-10">
      <div className=" absolute top-0 bottom-0 h-full w-full ">
        <Image
          src={"https://lvwdbucket.s3.us-east-2.amazonaws.com/moreture/Need/familyMountain.webp"}
          alt="banner"
          width={1080}
          height={653}
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" absolute top-0 bottom-0 h-full w-full p-0 backdrop-brightness-100 flex justify-center items-center bg-gradient-to-b from-gray-950 via-black/50 to-gray-950 px-5 ">
        <div className="space-y-2 lg:space-y-5 max-w-[1000px]">
          <h2 className="font-semibold text-4xl lg:text-6xl">
            Explore with your family in style and comfort!
          </h2>
          <p className="lg:text-xl">
            {" "}
            Discover our limousine services designed for unforgettable family
            adventures. Safety, luxury, and convenience for every journey. Book
            now and create lasting memories together
          </p>
          <div>
            <Link
              href={"/services"}
              className="border lg:text-xl inline-block py-2 px-4 hover:bg-yellow-400 transition-colors duration-300 rounded uppercase"
            >
              explore our services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerMedio;
