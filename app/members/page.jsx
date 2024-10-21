"use client";

import Image from "next/image";
import Link from "next/link";

import Members from "../../components/Members";

const Member = () => {
  return (
    <section className="">
      <div className="h-[295px] xl:h-[315px] bg-[url('/images/membersBanner.jpg')] bg-cover bg-center">
        <div className="container h-full flex items-end pl-[12px] pb-[40px] lg:pl-0 lg:pb-0 lg:items-center">
          <h2 className="text-[40px] font-bold text-white">부원 소개</h2>
        </div>
      </div>

      <div className="container mx-auto pt-10">
        <Members></Members>
      </div>
    </section>
  );
};

export default Member;
