import { Metadata } from "next";
import GallerySlice from "@/src/components/UI/GallerySlice";
import ModalNew from "@/src/components/UI/ModalNew";
import {fleets} from '@/src/libs/Const'

export const metadata: Metadata = {
  title: "Galery Moreture",
  description: "Limousine and transportation services Las Vegas Nevada",
  keywords: ["Moreture", "Moreture images", "Moreture gallery"],
};

type Props = {
  searchParams?: Record<string, string> | null | undefined;
};
const Gallery = (props: Props) => {
  const showModal = props.searchParams?.modal === "true";
  const productid = props.searchParams?.id;

  return (
    <section className="min-h-96 xl:container mx-auto px-5 py-10">
      <div className="mt-5 w-full lg:w-1/2 mx-auto">
        <p className="text-yellow-400 text-2xl text-center">Gallery</p>
        <h2 className="text-4xl lg:text-6xl capitalize text-center font-bold">
          Some work from Our memorable Gallery
        </h2>
      </div>
      <GallerySlice fleets={fleets}/>
      {showModal && productid && (
        <ModalNew productid={productid} close="/gallery" />
      )}
    </section>
  );
};

export default Gallery;
