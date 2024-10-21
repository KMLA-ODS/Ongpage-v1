"use client";

import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="h-[10000px]">
      <div className="h-[295px] xl:h-[315px] bg-[url('/images/ContactBanner.jpeg')] bg-cover bg-center">
        <div className="container h-full flex items-end pl-[12px] pb-[40px] lg:pl-0 lg:pb-0 lg:items-center">
          <h2 className="text-[40px] font-bold text-white">문의하기</h2>
        </div>
      </div>
    </section>
  );
};

export default Contact;
