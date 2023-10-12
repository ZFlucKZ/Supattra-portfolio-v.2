// useHooks
import { useWindowSize } from "@uidotdev/usehooks";

// Components
import { NavbarToggle } from "./navbarToggle";

// Next
import Link from "next/link";

import classNames from "classnames";

export default function Navbar({ isWhite = false }: NavbarTypes) {
  const size = useWindowSize();

  return (
    <>
      {size.width && size.width < 745 ? (
        <div className="relative bg-white-10 px-6 pt-6 md:px-10 md:pt-10">
          <NavbarToggle />
        </div>
      ) : (
        <div className="bg-white-10">
          <ul className="m-auto flex max-w-[1440px] list-none flex-row  px-[60px] pt-10">
            <li className="me-auto">
              <Link href="/" className="inline-block no-underline">
                <span
                  className={classNames("text-paragraph-2 font-normal", {
                    "text-white-10": isWhite,
                    "text-black-80": !isWhite,
                  })}
                >
                  SUPATTRA CHANSAWAD
                </span>
              </Link>
            </li>

            <li className="group relative me-6 md:me-4">
              <Link
                href="/#case-study"
                className={classNames(
                  "mb-1 inline-block text-paragraph-2 font-normal leading-normal no-underline",
                  { "text-white-10": isWhite, "text-black-80": !isWhite },
                )}
              >
                CASE STUDY
              </Link>
              <span
                className={classNames(
                  "absolute bottom-0 left-0 h-1 w-0  rounded transition-all duration-[400ms] group-hover:w-full sm:bg-black-80",
                  { "bg-white-10": isWhite, "bg-black-80": !isWhite },
                )}
              ></span>
            </li>
            <li className="group relative">
              <Link
                href="/#contact"
                className={classNames(
                  "mb-1 inline-block text-paragraph-2 font-normal leading-normal no-underline",
                  { "text-white-10": isWhite, "text-black-80": !isWhite },
                )}
              >
                CONTACT
              </Link>
              <span
                className={classNames(
                  "absolute bottom-0 left-0 h-1 w-0  rounded transition-all duration-[400ms] group-hover:w-full sm:bg-black-80",
                  { "bg-white-10": isWhite, "bg-black-80": !isWhite },
                )}
              ></span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
