import React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const members = [
  {
    wave: "KMLA 27기 (Class of 2025)",
    person: [
      { name: "Yujin Heo", position: "Captain", image: "/images/yujinheo.png" },
      {
        name: "Seoyeon Kang",
        position: "Vice Captain",
        image: "/images/seoyeonkang.png",
      },
      { name: "Mina Jo", position: "Member", image: "/images/minajo.png" },
      {
        name: "Gayeong Kim",
        position: "Member",
        image: "/images/gayeongkim.png",
      },
    ],
  },
  {
    wave: "KMLA 28기 (Class of 2026)",
    person: [
      { name: "Jia Lee", position: "Captain", image: "/images/jialee.png" },
      {
        name: "Yeonsoo Choo",
        position: "Vice Captain",
        image: "/images/yeonsoochoo.png",
      },
      {
        name: "Kanghyeon Park",
        position: "Member",
        image: "/images/kanghyeonpark.png",
      },
      {
        name: "Seohyeon Kang",
        position: "Member",
        image: "/images/seohyeonkang.png",
      },
      {
        name: "Sunwoo Shin",
        position: "Member",
        image: "/images/sunwooshin.png",
      },
      {
        name: "Jeonghyun Lee",
        position: "Member",
        image: "/images/jeonghyunlee.png",
      },
      { name: "Haeun Lee", position: "Member", image: "/images/haeunlee.png" },
    ],
  },
  {
    wave: "KMLA 29기 (Class of 2027)",
    person: [
      {
        name: "Songhyun Kim",
        position: "Captain",
        image: "/images/songhyunkim.png",
      },
      {
        name: "Seowon Lee",
        position: "Vice Captain",
        image: "/images/seowonlee.png",
      },
      { name: "Minju Kim", position: "Member", image: "/images/minjukim.png" },
      {
        name: "Jungmin Woo",
        position: "Member",
        image: "/images/jungminwoo.png",
      },
      { name: "Somin Lee", position: "Member", image: "/images/sominlee.png" },
      { name: "Jeong Lee", position: "Member", image: "/images/jeonglee.png" },
      {
        name: "Junseong Park",
        position: "Member",
        image: "/images/junseongpark.png",
      },
    ],
  },
];

export function Members() {
  return (
    <div className="w-full">
      {members.map((wave, index) => (
        <div
          key={index}
          className={`${index !== members.length - 1 ? "mb-8" : ""}`}
        >
          {/* Wave Title */}
          <h2 className="text-left font-bold text-[20px]  xl:text-[25px] ml-4 mb-[37px]">
            {wave.wave}
          </h2>

          {/* Scrollable Members Section */}
          <ScrollArea className="w-full h-[262px] rounded-md border-b-2 ">
            <div className="flex w-max space-x-8 p-4">
              {wave.person.map((member, i) => (
                <figure key={i} className="text-center">
                  {/* Circular Image */}
                  <div className="w-[130px] h-[130px] rounded-full overflow-hidden mx-auto mb-[27px] relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Member Name */}
                  <figcaption className="text-[18px] font-bold mb-[5px]">
                    {member.name}
                  </figcaption>

                  {/* Member Position */}
                  <i className="text-[16px] text-[#828282]">
                    {member.position}
                  </i>
                </figure>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      ))}
    </div>
  );
}

export default Members;
