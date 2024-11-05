"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

// components
import Nav from "./Nav";
import { MobileNav } from "./MobileNav";

const Header = () => {
  const pathname = usePathname();
  return (
    <header
      className={`py-1 lg:py-2 xl:py-4 w-[100%] z-40 ${
        pathname === "/"
          ? "bg-transparent text-white absolute"
          : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Image
              src="/images/logo blue.svg"
              alt="ongdalsam"
              width={66.94}
              height={64}
            ></Image>
          </Link>

          <Link href={"/"}>
            <h1 className="text-[16px] xl:text-xl font-bold">ONGDALSAM</h1>
          </Link>
        </div>

        {/* desktop nav */}

        <div className="hidden xl:flex items-center gap-8">
          <Nav></Nav>
          <Link href={"/donation"}>
            <Button className="bg-[#5CA45E] rounded-[5px] text-[15px] font-medium">
              후원하기
            </Button>
          </Link>
        </div>

        {/* mobile nav */}

        <div className="xl:hidden">
          <MobileNav></MobileNav>
        </div>
      </div>
    </header>
  );
};

export default Header;
