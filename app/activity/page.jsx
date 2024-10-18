"use client";

import Image from "next/image";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import { Swiper, SwiperSlide } from "swiper/react";

const Activity = () => {
  return (
    <section className="h-[10000px]">
      <div className="h-[315px] xl:h-[315px] bg-[url('/images/ActivityBanner.jpg')] bg-cover bg-center">
        <div className="container h-full flex items-end pl-[12px] pb-[40px] lg:pl-0 lg:pb-0 lg:items-center">
          <h2 className="text-[40px] font-bold text-white">활동소개</h2>
        </div>
      </div>
      <div className="min-h-[80vh] flex items-center justify-center relative">
        <div className="container mx-auto absolute top-[-25px]">
          <Tabs
            defaultValue="volunteering"
            className="w-full flex flex-col items-center"
          >
            <TabsList>
              <TabsTrigger value="volunteering">해외봉사</TabsTrigger>
              <TabsTrigger value="technology">기술개발</TabsTrigger>
              <TabsTrigger value="fundraising">모금사업</TabsTrigger>
            </TabsList>

            {/* Contents */}
            <div className="min-h-[70vh] w-full">
              <TabsContent value="volunteering">
                {/* photos & description */}

                <div className="mt-[40px] xl:mt-[100px] xl:mb-[40px]">
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
