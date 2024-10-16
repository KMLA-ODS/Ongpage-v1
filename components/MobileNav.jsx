"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

const links = [
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
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40">logo</div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-left gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className="text-xl capitalize hover:text-primary transition-all"
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
