// 'use client'
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

interface Props {
  productid: string;
  size: number;
  carName:string
}

const RwosMoving = ({ productid, size,carName }: Props) => {
  const id = parseInt(productid);
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full  flex items-center justify-between p-2 bg-black/50">
      <Link
        href={
          id === 1
            ? `?modal=true&id=${size}`
            : `?modal=true&id=${id - 1}`
        }
        scroll={false}
      >
        <ArrowLeft fontSize="large" />
      </Link>

      <h3 className="text-xl font-bold capitalize line-clamp-1">{carName}</h3>
      <Link
        href={
          id === size
            ? `?modal=true&id=${1}`
            : `?modal=true&id=${id + 1}`
        }
        scroll={false}
      >
        <ArrowRight fontSize="large" />
      </Link>
    </div>
  );
};

export default RwosMoving;
