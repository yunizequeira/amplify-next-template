import { Suspense } from "react";
import Banner from "@/src/components/UI/Banner";
import PopularServices from "@/src/components/UI/PopularServices";
import ProviderFleet from "../components/UI/ProviderFleet";
import BannerMedio from "../components/UI/BannerMedio";
import InfoComponent from "../components/UI/InfoComponent";
import { type Metadata } from "next";
import GallerySlice from "../components/UI/GallerySlice";
import ModalNew from "../components/UI/ModalNew";
import BannerContact from "../components/UI/BannerContact";
import {fleets} from '@/src/libs/Const'

export const metadata: Metadata = {
  title: "The Best Limo Services: Las Vegas Nevada - Moreture",
  description:
    "High-quality limousine service in Las Vegas,Nevada. Book your limousine now.",
};

type Props = {
  searchParams?: Record<string, string> | null | undefined;
};

const App = (props: Props) => {
  const showModal = props.searchParams?.modal === "true";
  const productid = props.searchParams?.id;

  return (
    <div>
      <section className="">
        <Suspense fallback={<p>Loading video...</p>}>
          <Banner />
        </Suspense>
      </section>
      <section id="popular" className="w-full space-y-10 mx-auto py-10">
        <PopularServices />
      </section>
      <section id="fleet" className="w-full space-y-10 mx-auto px-5 ">
        <ProviderFleet />
      </section>
      <section className="">
        <BannerMedio />
      </section>
      <section className=" py-10 px-5 ">
        <InfoComponent />
      </section>
      <section className="py-10 ">
        <div className="py-4">
          <h2 className="text-center text-4xl font-light capitalize">
            {" "}
            Gallery{" "}
          </h2>
        </div>
        <GallerySlice fleets={fleets} />
      </section>
      <section id="contact">
        <BannerContact />
      </section>
      {showModal && productid && <ModalNew productid={productid} close="/" />}
    </div>
  );
};

export default App;
