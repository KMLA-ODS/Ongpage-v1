"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ActSliderButton from "./ActSliderButton";
import "swiper/css";

const projects = [
  {
    num: "01",
    title: "해외봉사",
    description:
      "2023년, 코로나 19 팬데믹 이후 라오스 방비엥 마을에서 봉사를 재개하여 멤브레인 정수기 설치와 위생교육을 실시했습니다. 옹달샘은 꾸준한 유지보수를 통해 지속 가능한 발전을 도모하고 있습니다.",
    image: "/images/main-activity1.jpeg",
  },
  {
    num: "02",
    title: "기술개발",
    description:
      "세라믹 멤브레인 기술을 활용한 정수기 개발을 통해 옹달샘은 깨끗한 물 공급을 위한 혁신적인 솔루션을 제공하고 있으며, 해당 기술은 환경 친화적이고 유지 관리가 용이합니다.",
    image: "/images/main-activity2.jpg",
  },
  {
    num: "03",
    title: "모금사업",
    description:
      "옹달샘은 라오스 마을의 지속 가능한 발전을 지원하기 위해 모금 활동을 활발히 전개하고 있습니다. 모금된 자금은 세라믹 멤브레인 정수기 설치 및 유지보수에 사용됩니다.",
    image: "/images/main-activity3.jpg",
  },
];

const ActivitySwiper = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <div className="w-full mt-[630px] md:mt-[620px] xl:mt-[550px] text-black ">
      <h2 className="font-semibold mb-8 xl:mb-[100px] text-[20px] text-left xl:text-center xl:text-[35px] xl:font-bold">
        옹달샘의 활동
      </h2>
      <div className="flex flex-col-reverse xl:flex-row items-center justify-between w-full">
        <div className="w-full xl:w-[50%] xl:pr-6">
          <span
            className="font-extrabold text-8xl text-transparent leading-none "
            style={{ WebkitTextStroke: "3px black" }}
          >
            {project.num}
          </span>{" "}
          <h2 className="pl-1 font-semibold mt-2 text-[35px] text-left xl:text-left xl:text-[35px] xl:font-bold xl:mt-8 xl:mb-4">
            {project.title}
          </h2>
          <p className="pl-[6px] font-light text-gray-600 text-[16px] mt-2 text-left xl:text-[18px] xl:font-normal">
            {project.description}
          </p>
          <Link href={"/activity"}>
            <Button
              size="lg"
              className="bg-primary rounded-[5px] text-[15px] font-medium my-6 xl:my-8 ml-1"
            >
              더 알아보기
            </Button>{" "}
          </Link>
        </div>
        <div className="w-full xl:w-[50%] mb-8">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[379px] xl:h-[419px]  relative group flex justify-center items-center bg-pink-50/20">
                    <div></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      ></Image>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <ActSliderButton
              containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full justify-end xl:w-max xl:justify-none"
              btnStyles=" bg-primary text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default ActivitySwiper;
