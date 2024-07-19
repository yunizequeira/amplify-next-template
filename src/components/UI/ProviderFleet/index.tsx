"use client";
import { useState } from "react";
import Image from "next/image";
const provider = [
  {
    id: 1,
    name: "Cadilla Scalade",
    image: "/providerfleet/cadilla.png",
    tag: "SUV",
  },
  {
    id: 2,
    name: "GMC Yukon XL",
    image: "/providerfleet/gmc.png",
    tag: "SUV",
  },
  {
    id: 3,
    name: "Mercedes Sprinter",
    image: "/providerfleet/sprinter.png",
    tag: "SUV",
  },
  {
    id: 4,
    name: "Toyota C-HR",
    image: "/providerfleet/chr.png",
    tag: "Sedan",
  },
];

const ProviderFleet = () => {
    const [tag,setTag] = useState("")

   const  handleClick=(tag:string)=>{
        setTag(tag)
   }
  return (
    <div className="xl:container mx-auto px-2 py-10 space-y-5 lg:flex flex-col items-center ">
      <h2 className="text-center text-2xl lg:text-4xl uppercase">Explore our Fleet</h2>
      <div className="py-2 flex justify-center">
        <button className={tag === "" ? "uppercase  border-b-2 border-b-blue-700 px-5":"uppercase px-5"} onClick={(e)=>handleClick("")}>all</button>
        <button className={tag.toLowerCase() === "suv" ? "uppercase  border-b-2 border-b-blue-700 px-5":"uppercase px-5"} onClick={(e)=>handleClick("suv")}>suv</button>
        <button className={tag.toLowerCase() === "sedan" ? "uppercase border-b-2 border-b-blue-700 px-5":"uppercase px-5"} onClick={(e)=>handleClick("sedan")}>SEDAN</button>
      </div>
      <div className="flex gap-1 overflow-x-auto snap-x snap-mandatory ">
        {provider.map((car) => car.tag.toLowerCase() === tag.toLowerCase() ?(
          <div key={car.id} className="">
            <div className="snap-center flex-none w-64 h-auto py-4">
              <figure className="flex justify-center items-center">
                <Image
                  src={car.image}
                  width={311}
                  height={286}
                  alt={car.name}
                  className="w-28 lg:w-44 h-auto"
                />
              </figure>
              <div>
                <p className="text-center uppercase">{car.name}</p>
              </div>
            </div>
          </div>
        ):tag === "" && (
            <div key={car.id} className="">
            <div className="snap-center flex-none w-64 h-auto py-4">
              <figure className="flex justify-center items-center">
                <Image
                  src={car.image}
                  width={311}
                  height={286}
                  alt={car.name}
                  className="w-28 lg:w-44 h-auto"
                />
              </figure>
              <div>
                <p className="text-center uppercase">{car.name}</p>
              </div>
            </div>
          </div>
        ) )}
      </div>
    </div>
  );
};

export default ProviderFleet;
