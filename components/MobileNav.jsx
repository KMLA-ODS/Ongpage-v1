"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

const links = [
  {
    name: "홈",
    path: "/",
  },

  {
    name: "기관소개",
    path: "/about",
  },
  {
    name: "활동소개",
    path: "/activity",
  },
  {
    name: "후원안내",
    path: "/donation",
  },
  {
    name: "문의하기",
    path: "/contact",
  },
  {
    name: "부원소개",
    path: "/members",
  },
];

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuBurger
          aria-label="menu-button"
          className="text-[32px]"
        ></CiMenuBurger>
      </SheetTrigger>
      <SheetContent className="flex flex-col z-50">
        {/* logo */}

        <div className=" mt-[40px] mb-4 text-[25px] font-bold">
          <h1>
            민족사관고등학교 <br></br>{" "}
            <span className="text-primary">옹달샘</span>
          </h1>
        </div>

        <Link href={"/donation"}>
          <Button className="bg-[#5CA45E] rounded-[5px] text-[15px] font-medium mb-8 w-full">
            후원하기
          </Button>
        </Link>

        {/* nav */}
        <nav className="flex flex-col justify-center items-left gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className="text-[18px] font-medium capitalize hover:text-primary transition-all"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
