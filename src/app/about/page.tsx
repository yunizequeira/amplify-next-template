import { Metadata } from "next";
import Image from "next/image";
import BannerContact from "@/src/components/UI/BannerContact";

export const metadata: Metadata = {
  title: "About Moreture",
};

const AboutPage = () => {
  return (
    <>
      <header>
        <section className="h-72 lg:h-96  py-10  relative border-none">
          <figure className=" absolute top-0 bottom-0 h-full w-full">
            <Image
              src={
                "https://lvwdbucket.s3.us-east-2.amazonaws.com/moreture/Need/familyMountain.webp"
              }
              alt="banner"
              width={1080}
              height={653}
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="px-2 py-10 w-full h-full flex justify-center items-center gap-2 absolute top-0 right-0 left-0 bg-gradient-to-b from-black/50 to-gray-950">
            <div className="space-y-3">
              <h1 className="font-semibold text-4xl lg:text-7xl uppercase text-center">
                Discover Our Story
              </h1>
            </div>
          </div>
        </section>
      </header>
      <main className="py-10">
        <section className="grid lg:grid-cols-2 gap-10 py-10 px-2 md:px-5 xl:container mx-auto mb-10">
          <div className="space-y-5 ">
            <article>
              <h2 className="text-center text-2xl lg:text-4xl uppercase">
                {" "}
                About us{" "}
              </h2>
              <p>
                Welcome to Moreture, your trusted luxury limousine service
                company in Las Vegas. We take pride in offering tailored luxury
                transportation experiences to meet the needs of our most
                discerning clients.
              </p>
            </article>
            <article>
              <h2 className="text-center text-2xl lg:text-4xl uppercase">
                {" "}
                Our History{" "}
              </h2>
              <p>
                From our humble beginnings, we have grown to become one of the
                leading limousine service providers in Las Vegas. Moreture has
                earned an unparalleled reputation for our commitment to
                excellence and customer satisfaction.
              </p>
            </article>
            <article>
              <h2 className="text-center text-2xl lg:text-4xl uppercase">
                {" "}
                Our Mission{" "}
              </h2>
              <p>
                At Moreture, our mission is to provide exceptional
                transportation service that exceeds our clients expectations in
                every aspect. We strive to deliver comfort, luxury, and safety
                on every journey, ensuring that each client enjoys a memorable
                and hassle-free experience.
              </p>
            </article>
          </div>
          <picture className="h-96">
            <Image
              src={
                "https://lvwdbucket.s3.us-east-2.amazonaws.com/moreture/Need/mulato.webp"
              }
              alt="banner"
              width={500}
              height={500}
              className="h-full w-full rounded"
            />
          </picture>
        </section>

        <section className="h-72 lg:h-96 py-10 relative border-none">
          <figure className="absolute top-0 bottom-0 h-full w-full">
            <Image
              src={
                "https://lvwdbucket.s3.us-east-2.amazonaws.com/moreture/Need/mulato.webp"
              }
              alt="banner"
              width={1080}
              height={653}
              className="h-full w-full object-cover"
            />
          </figure>
          <div className=" absolute top-0 bottom-0 h-full w-full p-0 flex justify-center items-center px-20 opacity-30">
            <Image
              src={"/MoretureLogo.png"}
              width={300}
              height={300}
              alt="moreture Logo"
              priority
              className="h-48 w-auto"
            />
          </div>
          <div className=" absolute top-0 bottom-0 h-full w-full p-0  backdrop-brightness-100 flex justify-center items-center bg-gradient-to-b from-gray-950 via-black/50 to-gray-950 px-5 ">
            <div className=" max-w-[1000px] flex flex-col justify-center items-center">
              <h2 className="font-semibold text-4xl lg:text-7xl uppercase">
                Our Team of Drivers
              </h2>
              <p className="lg:text-xl">
                {" "}
                Excellence and Professionalism on Every Journey
              </p>
            </div>
          </div>
        </section>
        <section className="xl:container mx-auto px-2 md:px-5 py-10 ">
          <div className="max-w-[1000px] mx-auto space-y-5">
            <p>
              At <span className="uppercase font-semibold">Moreture</span>, we
              are proud to have an exceptional team of drivers who embody
              excellence and professionalism in every service we provide. With
              years of experience in the industry and an unwavering commitment
              to customer satisfaction, our drivers are the heart and soul of
              our company.
            </p>
            <p>
              Each member of our team is distinguished by their dedication to
              providing safe, comfortable, and memorable travel experiences.
              From the moment you are picked up to your final destination, our
              drivers are committed to delivering a first-class service that
              exceeds your expectations.
            </p>
            <p>
              What sets us apart is our focus on attention to detail and quality
              in every aspect of our work. From the impeccable maintenance of
              our limousines to the courtesy and professionalism we show in
              every interaction with our customers, we strive to create
              unparalleled travel experiences that linger in the memories of
              those who choose us.
            </p>
            <p>
              Our team of drivers is not only trained in expert driving skills
              but also prides itself on offering personalized, customer-oriented
              service. We are committed to tailoring each journey to the
              individual needs and preferences of our customers, ensuring a
              truly unique and satisfying travel experience.
            </p>
          </div>
        </section>

        <section className="">
          <BannerContact />
        </section>
      </main>
    </>
  );
};

export default AboutPage;
