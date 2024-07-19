"use client";
import { usePathname } from "next/navigation";
import { useMenu } from "@/src/store/menu";
import {options} from "@/src/libs/Const";
import Link from "next/link";

const Sidebar = () => {
  const { open, closeMenu } = useMenu();
  const path = usePathname();
  return (
    <>
      {open !== null ? (
        <div
          className={
            open
              ? "lg:hidden bg-gray-950 w-full mx-auto fixed top-20  right-0 overflow-y-scroll"
              : "lg:hidden hidden bg-gray-950  w-full mx-auto fixed top-20  right-0 overflow-y-scroll "
          }
        >
          <ul className="flex flex-col justify-center items-center w-full ">
            {options.map((option) => (
              <li
                key={option.id}
                className="py-6 shadow-sm w-full border-b border-slate-500/20"
              >
                <Link
                  href={option.url}
                  className="uppercase"
                  onClick={closeMenu}
                >
                  <p
                    className={
                      path == option.url
                        ? "text-yellow-400 ml-6"
                        : "text-white ml-6"
                    }
                  >
                    {option.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
