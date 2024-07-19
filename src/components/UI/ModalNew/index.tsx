import Image from "next/image";
import Link from "next/link";
import {fleets} from "@/src/libs/Const";
import RowsMoving from "@/src/components/UI/RowsMoving";
import { Close } from "@mui/icons-material";

const ModalNew = ({ productid ,close}: { productid: string,close:string }) => {
  const carShow = fleets.filter((car) => car.id === Number(productid));
  return (
    <div className="fixed top-0 left-0 w-full h-full min-h-96 flex items-center justify-center inset-0 z-10 bg-black/80 backdrop-blur-lg p-2">
      <div className="w-full lg:w-1/2 h-3/4 flex items-center justify-center relative p-2 ring-1 ring-yellow-400/20">
        <Image
          src={carShow[0].image}
          width={500}
          height={500}
          alt={carShow[0].tittle}
          className="w-full h-full"
        />

        <Link
          className="absolute top-2 right-2 text-red-500 hover:text-red-800 transition-colors duration-300 font-bold bg-slate-500/50 z-10"
          scroll={false}
          href={close}
        >
          <Close fontSize="large" />
        </Link>
        <RowsMoving
          productid={productid}
          size={fleets.length}
          carName={carShow[0].tittle}
        />
      </div>
    </div>
  );
};

export default ModalNew;
