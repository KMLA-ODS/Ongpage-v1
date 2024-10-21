"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    path: "/activity",
  },
  {
    name: "구성원",
    path: "/members",
  },
];

const Nav = () => {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
