"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { image } from "framer-motion/client";

const projects = [
  {
    num: "01",
    title: "문화교류",
    description:
      "더미텍스트 감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한 사항은 법률로 정한다. 헌법재판소 재판관의 임기는 6년으로 하며, 법률",
    image: "/images/taekwondo.jpeg",
  },
  {
    num: "02",
    title: "교육봉사",
    description:
      "더미텍스트 감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한 사항은 법률로 정한다. 헌법재판소 재판관의 임기는 6년으로 하며, 법률",
    image: "/images/education.webp",
  },
  {
    num: "03",
    title: "노력봉사",
    description:
      "더미텍스트 감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한 사항은 법률로 정한다. 헌법재판소 재판관의 임기는 6년으로 하며, 법률",
    image: "/images/volunteering.jpeg",
  },
  {
    num: "04",
    title: "정수기 설치",
    description:
      "더미텍스트 감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한 사항은 법률로 정한다. 헌법재판소 재판관의 임기는 6년으로 하며, 법률",
    image: "/images/volunteering.jpeg",
  },
];

const Activity = () => {
  return (
    <section className="">
      <div className="h-[295px] xl:h-[315px] bg-[url('/images/ActivityBanner.webp')] bg-cover bg-center">
        <div className="container h-full flex items-end pl-[12px] pb-[40px] lg:pl-0 lg:pb-0 lg:items-center">
          <h2 className="text-[40px] font-bold text-white">활동소개</h2>
        </div>
      </div>
      <div className="min-h-[80vh] flex items-center justify-center relative">
        <div className="container mx-auto">
          <Tabs
            defaultValue="volunteering"
            className="w-full flex flex-col items-center relative"
          >
            <TabsList className="absolute top-[-65px]">
              <TabsTrigger value="volunteering">해외봉사</TabsTrigger>
              <TabsTrigger value="technology">기술개발</TabsTrigger>
              <TabsTrigger value="fundraising">모금사업</TabsTrigger>
            </TabsList>

            {/* Contents */}
            <div className="min-h-[70vh] w-full">
              <TabsContent value="volunteering">
                {/* photos & description */}

                <div className="mt-[40px] xl:mt-[60px] xl:mb-[40px]">
                  <h2 className="font-bold text-[18px] text-left xl:text-left xl:text-[35px]">
                    매년 옹달샘은 <span className="text-primary">현장으로</span>{" "}
                    나섭니다.
                  </h2>
                  <p className="font-light text-gray-600 text-[16px] mt-2 text-left xl:text-left xl:text-[16px] xl:font-normal">
                    2023년, 코로나 19 팬데믹 이후 라오스 방비엥에서 <br></br>
                    멤브레인 정수기 설치와 위생교육을 재개했습니다.<br></br>{" "}
                    옹달샘은 언제나 지속 가능한 발전을 위해 노력합니다.
                  </p>
                </div>

                {/* gallery */}
              </TabsContent>
              <TabsContent value="technology"></TabsContent>
              <TabsContent value="fundraising"></TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Activity;
