"use client";

import Image from "next/image";
import Link from "next/link";

import SwiperComponent from "../../components/Swiper";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

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
    <section className="mb-12 xl:mb-16">
      <div className="h-[295px] xl:h-[315px] bg-[url('/images/ActivityBanner.webp')] bg-cover bg-center">
        <div className="container h-full flex items-end pl-[12px] pb-[40px] lg:pl-0 lg:pb-0 lg:items-center">
          <h2 className="text-[40px] font-bold text-white">활동소개</h2>
        </div>
      </div>
      <div className="flex items-center justify-center relative">
        <div className="container mx-auto ">
          <Tabs
            defaultValue="oversees-volunteering"
            className="w-full flex flex-col items-center relative"
          >
            <TabsList className="absolute top-[-25px]">
              <TabsTrigger value="oversees-volunteering">해외봉사</TabsTrigger>
              <TabsTrigger value="tech">기술개발</TabsTrigger>
              <TabsTrigger value="fd">모금사업</TabsTrigger>
            </TabsList>

            {/* Contents */}
            <div className="min-h-[70vh] w-full">
              <TabsContent value="oversees-volunteering">
                {/* description */}
                <div className="w-full flex flex-col items-left pt-[97px]">
                  <h2 className=" text-[18px] xs:text-[20px] font-bold xl:text-[30px] my-[10px] text-left">
                    매년 8월 옹달샘은{" "}
                    <span className="text-primary">현장으로</span> 나섭니다.{" "}
                  </h2>

                  <p className=" text-[14.5px] xs:text-[16px] xl:text-[18px] text-left ">
                    2014년 설립된 옹달샘은
                    <br className="xl:hidden"></br> 깨끗한 식수를 필요로 하는
                    개발도상국 아동과 마을을 <br></br> 위해 식수 공급 및
                    위생교육 사업과 진행하는 <br className="xl:hidden"></br>
                    <span className="font-semibold text-primary">
                      적정기술 해외봉사 동아리
                    </span>
                    입니다.
                  </p>
                </div>
                <div></div>
              </TabsContent>
              <TabsContent value="tech">
                <div className="mt-[50px]">tech</div>
              </TabsContent>
              <TabsContent value="fd">
                <div className="w-full flex flex-col  mb-10 text-left xl:text-center">
                  <h2 className="pt-[60px] font-bold text-[20px] xl:text-[25px] xl:pt-[65px]  ">
                    옹달샘의 영향력이 <br className="xl:hidden"></br>
                    <span className="text-primary"> 더 멀리까지 </span>닿을 수
                    있도록
                  </h2>
                  <p className=" text-[14.5px] xs:text-[16px] xl:text-[18px] ">
                    옹달샘이 교내 모금 행사, 크라우드 펀딩 등을 통해 모은 금액
                    전부는 <br className="hidden xl:inline"></br> 위생 물품과
                    정수기 보급으로 <br className="xl:hidden"></br> 개발도상국
                    아이들에게 전달됩니다.
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Activity;
