"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import{ options} from "@/src/libs/Const";
import MenuButton from "@/src/components/UI/MenuButton";
import Sidebar from "@/src/components/UI/Sidebar";
// import LoginComponent from "../LoginComponent";
// import Search from "@/components/SearchEvents";
import { Search as SearchIcon, Close } from "@mui/icons-material";
import LogoLink from "@/src/components/UI/LogoLink";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const path = usePathname();

  const handleclick = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <>
      <div className="h-20 border-b border-b-slate-400/10 lg:flex items-center hidden px-10 z-50">
        <div className="h-full xl:container mx-auto w-full flex justify-between items-center ">
          <div className="hidden lg:block h-full py-2">
            <LogoLink />
          </div>
          {
            <div className="w-full flex justify-end items-center gap-5">
              {openSearch && path === "/services" ? (
                <div className="w-2/3 ">{/* <Search /> */}</div>
              ) : (
                <div className="h-full hidden lg:flex justify-center items-center gap-4">
                  {/* <LoginComponent /> */}
                  <Link
                    href={"tel:(725) 250-5617"}
                    className="px-8 py-2 rounded-md bg-yellow-400 uppercase font-bold text-sm text-black hover:bg-yellow-300 transition-colors duration-300"
                  >
                    {" "}
                    call us
                  </Link>
                </div>
              )}

              {path === "/services" && (
                <div>
                  {path === "/services" && openSearch ? (
                    <Close fontSize="large" onClick={handleclick} />
                  ) : (
                    <SearchIcon fontSize="large" onClick={handleclick} />
                  )}
                </div>
              )}
            </div>
          }
        </div>
      </div>
      {!path.includes("dashboard") && (
        <nav
          className={`h-20 w-full sticky top-0 left-0 z-40 shadow-lg border-b border-slate-500/20 px-5 bg-gray-950  `}
        >
          <div className="flex justify-between lg:justify-center items-center h-full w-full lg:container mx-auto">
            <div className="lg:hidden h-full py-2">
              <LogoLink />
            </div>

            <div className="lg:hidden">{/* <LoginComponent /> */}</div>
            <ul className="hidden h-full p-4 font-semibold uppercase lg:flex justify-evenly items-center gap-4 ">
              {options.map((option) => (
                <li key={option.id}>
                  <Link href={option.url} className="uppercase text-sm">
                    <p
                      className={
                        path == option.url
                          ? "relative text-yellow-400 transition-colors duration-300 px-4 before:absolute before:left-0 before:-bottom-2 before:w-full before:h-0.5 before:bg-yellow-400 before:rounded-full before:transition-all  before:duration-300 hover:before:w-full hover:text-yellow-400"
                          : "relative text-white transition-colors duration-300 px-4 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-yellow-400 before:rounded-full before:transition-all  before:duration-300 hover:before:w-full hover:text-yellow-400"
                      }
                    >
                      {option.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <MenuButton />
            <Sidebar />
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
