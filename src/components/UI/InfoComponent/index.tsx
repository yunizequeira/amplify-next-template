import Image from "next/image";
import { BasicSingleAccordion } from "../../Acordion";

const InfoComponent = () => {
  return (
    <>
      <div className="space-y-8">
        <div className="space-y-4 flex flex-col items-center">
          <h2 className="text-center text-2xl lg:text-4xl font-light capitalize">
            {" "}
            Why choose us ?
          </h2>
          <p className="lg:px-5 px-2 max-w-[1000px] ">
            Choose our Las Vegas transportation and limousine service for
            unmatched luxury and professionalism. We guarantee safe, comfortable
            rides with our fleet of luxury vehicles and skilled drivers. With
            customizable options for weddings, corporate events, and tours, we
            ensure your satisfaction.
          </p>
        </div>
        <div className="w-full grid lg:grid-cols-2 items-center gap-5 xl:container mx-auto ">
          <figure className="h-96 lg:h-[600px] lg:px-5 px-2">
            <Image
              src={
                "https://lvwdbucket.s3.us-east-2.amazonaws.com/moreture/Need/moreno2.webp"
              }
              alt="moreno"
              width={590}
              height={600}
              className="w-auto h-full rounded lg:rounded-md "
            />
          </figure>
          <div className=" flex items-center lg:px-5 px-2 ">
            <div className="space-y-4 lg:space-y-8 lg:p-5 w-full h-full">
              <BasicSingleAccordion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoComponent;
