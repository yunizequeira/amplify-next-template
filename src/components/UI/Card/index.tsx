import Link from "next/link";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Formatter } from "@/src/utils/Formatter";
import {
  PeopleAlt,
  AccessTimeFilled,
  LocationCity,
  FilterHdr,
  FlightLand,
} from "@mui/icons-material";
import Image from "next/image";
import UpdateButton from "../../UpdateButton";


interface Service {
  data: {
    name: string;
    price: number;
    image: string;
    id: string;
    typeService: string;
    typePrice: string;
    time: number;
    available: boolean;
  };
}

export default function MediaCard({ data }: Service) {
  return (
    <Card className="w-full h-full">
      <picture className="w-full">
        <Image
          src={data.image}
          alt={data.name}
          width={320}
          height={240}
          priority
          className="h-52 w-full lg:h-72 hover:scale-x-110 transition-transform duration-300"
        />
      </picture>

      <CardContent className="text-black space-y-5 pt-0">
        <Typography gutterBottom variant="h6" component="div" className="pt-2">
          <h1 className="line-clamp-1 capitalize font-bold">{data.name}</h1>
          <div className="text-xs text-slate-500 font-medium flex justify-between items-center">
            <div className="flex items-center gap-1">
              <AccessTimeFilled fontSize="small" /> <p>{data.time} Hours</p>
            </div>
            {data.name.toLowerCase().includes("airport") ? (
              <div className="flex items-center gap-1">
                <FlightLand fontSize="small" /> Airplane
              </div>
            ) : data.typeService === "rural" ? (
              <div className="flex items-center gap-1">
                <FilterHdr fontSize="small" /> Rural
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <LocationCity fontSize="small" /> City
              </div>
            )}
            <div className="flex items-center gap-1">
              <PeopleAlt fontSize="small" /> 7 People
            </div>
          </div>
        </Typography>

        <div className=" flex flex-row  justify-between  capitalize ">
          <Typography variant="body1" className="font-bold ">
            {Formatter(data.price)} /{" "}
            <span className="text-slate-500 lowercase font-normal">
              {data.typePrice}
            </span>
          </Typography>
          <Button
            size="small"
            variant="contained"
            className="bg-blue-700 text-white block capitalize py-2 px-4"
          >
            <Link href={`/services/${data.id}`}>
              <p className="font-bold ">More Info</p>
            </Link>
          </Button>
        </div>
      </CardContent>
      {/* <UpdateButton id={data.id} /> */}
    </Card>
  );
}
