"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

const links = [
  {
    name: "홈",
    path: "/",
  },
  {
    name: "소개",
    path: "/about",
  },
  {
    name: "활동",
    path: "/activity",
  },
  {
    name: "스토리",
    path: "/story",
  },
  {
    name: "기술",
    path: "/technology",
  },
  {
    name: "구성원",
    path: "/members",
  },
];

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuBurger className="text-[32px]"></CiMenuBurger>
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
