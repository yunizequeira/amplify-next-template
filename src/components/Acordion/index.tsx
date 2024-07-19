"use client";
import { Accordion } from "@aws-amplify/ui-react";
import { ReactNode } from "react";
import { Computer, LocalTaxi, NoCrash, Payments } from "@mui/icons-material";
interface Props {
  tittle: string;
  Icon: ReactNode;
  children: string;
}
const info = [
  {
    tittle: "Easy online Booking",
    parragraph:
      "Experience effortless booking with our user-friendly online platform. Streamline your reservation process and secure your transportation with just a few clicks.",
    icon: <Computer fontSize="large" />,
  },
  {
    tittle: "professional drivers",
    parragraph:
      "Count on our team of professional drivers for safe and reliable transportation. With extensive training and expertise, they ensure a smooth and enjoyable journey for every passenger.",
    icon: <LocalTaxi fontSize="large" />,
  },
  {
    tittle: "Variety of Car Brands",
    parragraph:
      "Choose from a diverse selection of luxury car brands for your transportation needs. Enjoy the style and comfort of top-tier vehicles tailored to your preferences",
    icon: <NoCrash fontSize="large" />,
  },
  {
    tittle: "Online Payment",
    parragraph:
      "Our Las Vegas transportation and limousine service offers convenient online payment options for hassle-free transactions. Enjoy seamless booking and secure payments for your convenience.",
    icon: <Payments fontSize="large" />,
  },
];

export const BasicSingleAccordion = () => {
  return info.map(({ tittle, parragraph, icon: Icon }) => (
    <Accordion.Container
      className="w-full rounded border border-yellow-700/10 py-6 px-5 shadow-md"
      key={tittle}
    >
      <Accordion.Item value={tittle} className="capitalize">
        <Accordion.Trigger className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {Icon}
            <p>{tittle}</p>
          </div>
          <Accordion.Icon />
        </Accordion.Trigger>
        <Accordion.Content className="text-slate-400 mt-5">
          {parragraph}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Container>
  ));
};
