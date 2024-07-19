import { Suspense } from "react";
import Buttom from "@/src/components/UI/Button";

const Banner = () => {
  return (
    <div className="w-full min-h-96 h-[35rem] lg:h-[calc(100vh-6rem)]  relative border-none ">
      <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full">
        <Suspense fallback={<div>Loading...</div>}>
        <video
          src="https://lvwdbucket.s3.us-east-2.amazonaws.com/moreture/video/moreture1.webm"
          loop
          autoPlay
          muted
          preload="auto"
          playsInline
          poster="/airport.webp"
          className="w-full h-full object-cover"
        ></video>
        </Suspense>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full bg-gradient-to-b from-black/5 to-gray-950 filter backdrop-contrast-200 flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center gap-3 uppercase w-full h-full overflow-hidden">
          <h1 className="text-6xl lg:text-9xl text-blue-700 font-black">
            More<span className="text-yellow-400">Ture</span>
          </h1>
          <div className="text-center font-semibold text-yellow-400 space-y-2 w-full h-auto overflow-hidden">
            <p className=" lg:text-4xl capitalize">
              Offering the best Limo service{" "}
            </p>
            <p>las vegas, Nevada</p>
          </div>
          <div className="w-full h-auto overflow-hidden flex justify-center mt-7">
            <div className=" w-full flex justify-center gap-5">
              <Buttom link="/about " text="About us" type="no fill" />
              <Buttom link="/services" text="Booking" type="fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
