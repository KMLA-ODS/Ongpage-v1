"use client";

import Link from "next/link";

const links = [
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
