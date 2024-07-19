import Image from "next/image";
import Link from "next/link";

const BannerContact = () => {
  return (
    <div className="h-[500px] lg:h-96 py-10 relative border-none w-full">
      <div className="absolute top-0 bottom-0 h-full w-full p-0 ">
        <Image
          src={"https://lvwdbucket.s3.us-east-2.amazonaws.com/moreture/Need/mountain.webp"}
          alt="banner"
          width={1080}
          height={653}
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" absolute top-0 bottom-0 h-full w-full p-0 flex justify-end px-20 opacity-10">
          <Image src={'/MoretureLogo.png'} width={300} height={300} alt="moreture Logo" priority className="h-48 w-auto"/>
      </div>
      <div className="absolute top-0 bottom-0 h-full w-full p-0  backdrop-brightness-100 flex justify-center items-center bg-gradient-to-b from-gray-950 via-black/50 to-gray-950 px-5 ">
        <div className="space-y-2 lg:space-y-5 max-w-[1000px]">
          <h2 className="font-semibold text-4xl lg:text-7xl">
            Turn Your Travel Dreams into Reality!
          </h2>
          <div className="text-2xl space-y-2 lg:space-y-5 ">
            <p className="lg:text-xl">
              {" "}
              Contact Us Now and Let the Adventure Begin!
            </p>
            <Link
              href={`tel:(725) 250-5617`}
              className="inline-block text-3xl font-semibold text-yellow-400"
            >
              (725) 250-5617
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContact;
