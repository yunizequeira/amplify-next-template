import Navbar from "@/src/components/UI/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import Footer from "@/sessions/Footer";
import ScrollCheck from "@/src/components/UI/ScrollCheck";
// import Provider from "@/components/Provider";

const poppins = Poppins({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_HOME_PAGE}`),
  description:
    "High-quality limousine service in Las Vegas,Nevada. Book your limousine now.",
  twitter: {
    card: "summary_large_image",
  },
  applicationName: "Moreture ",
  keywords: [
    "Limousine Services",
    "Servicio de limonsina",
    "Transportation",
    "transportacion",
    "Las Vegas Limousine",
    "Limonsina en las vegas",
  ],
  creator: "Las Vegas Web Design Group",
  publisher: "Yunior Zequeira",
  icons: {
    icon: "/MoretureLogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="7Z6lnqG9y1lMRkB8qFJnYd6Jn42VVxCSNSNb28L_tvw"
        />
      </head>
      <body
        className={`${poppins.className} bg-gray-950 h-full text-blanco relative box-content`}
      >
        <main className="relative box-content">
          <ScrollCheck />
          {/* <Provider> */}
            <Navbar />
          {/* </Provider> */}
          <div>
            {children}
          </div>
          
        </main>
        <footer>
          {/* <Footer /> */}
        </footer>
      </body>
    </html>
  );
}